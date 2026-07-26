import { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    CircularProgress,
    Alert,
} from '@mui/material';
import {
    obtenerProductos,
    crearProducto,
    editarProducto,
    eliminarProducto,
} from '../../services/product.services';

const initialFormData = {
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    imagen: '',
};

const extraerError = (err) => {
    const status = err?.response?.status;
    let mensaje = err?.response?.data?.mensaje || err?.message || 'Error inesperado.';
    if (status === 403) mensaje = 'No tienes permisos para esta acción.';
    else if (status === 404) mensaje = 'Recurso no encontrado.';
    else if (status === 500) mensaje = 'Error del servidor. Intenta más tarde.';
    else if (!status) mensaje = 'Error de conexión. Verifica el servidor.';
    return { mensaje, severity: status === 403 ? 'warning' : status >= 500 ? 'error' : 'error' };
};

export const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [errorSeverity, setErrorSeverity] = useState('error');

    const fetchProducts = async () => {
        setLoading(true);
        setError('');
        try {
            const data = await obtenerProductos();
            setProducts(data || []);
        } catch (fetchError) {
            const { mensaje, severity } = extraerError(fetchError);
            setError(mensaje);
            setErrorSeverity(severity);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleOpen = () => {
        setIsEditMode(false);
        setSelectedProduct(null);
        setFormData(initialFormData);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProduct(null);
        setIsEditMode(false);
        setFormData(initialFormData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCreate = async () => {
        setError('');
        try {
            await crearProducto({
                nombre: formData.nombre,
                descripcion: formData.descripcion,
                precio: Number(formData.precio),
                stock: Number(formData.stock),
                imagen: formData.imagen,
            });
            await fetchProducts();
            handleClose();
        } catch (createError) {
            const { mensaje, severity } = extraerError(createError);
            setError(mensaje);
            setErrorSeverity(severity);
        }
    };

    const handleEditClick = (product) => {
        setIsEditMode(true);
        setSelectedProduct(product);
        setFormData({
            nombre: product.nombre || '',
            descripcion: product.descripcion || '',
            precio: product.precio || '',
            stock: product.stock || '',
            imagen: product.imagen || '',
        });
        setOpen(true);
    };

    const handleUpdate = async () => {
        if (!selectedProduct) return;
        setError('');
        try {
            await editarProducto(selectedProduct.id, {
                nombre: formData.nombre,
                descripcion: formData.descripcion,
                precio: Number(formData.precio),
                stock: Number(formData.stock),
                imagen: formData.imagen,
            });
            await fetchProducts();
            handleClose();
        } catch (updateError) {
            const { mensaje, severity } = extraerError(updateError);
            setError(mensaje);
            setErrorSeverity(severity);
        }
    };

    const handleDelete = async (id) => {
        const confirmado = window.confirm('¿Estás seguro de eliminar este producto?');
        if (!confirmado) return;

        setError('');
        try {
            await eliminarProducto(id);
            setProducts((prev) => prev.filter((product) => product.id !== id));
        } catch (deleteError) {
            const { mensaje, severity } = extraerError(deleteError);
            setError(mensaje);
            setErrorSeverity(severity);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Dashboard de Productos</h1>
            <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
                style={{ marginBottom: '20px' }}
            >
                + Crear Producto
            </Button>

            {error && (
                <Alert severity={errorSeverity} style={{ marginBottom: '20px' }} onClose={() => setError('')}>
                    {error}
                </Alert>
            )}

            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
                    <CircularProgress />
                </div>
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow style={{ backgroundColor: '#f5f5f5' }}>
                                <TableCell><strong>ID</strong></TableCell>
                                <TableCell><strong>Nombre</strong></TableCell>
                                <TableCell><strong>Descripción</strong></TableCell>
                                <TableCell><strong>Precio</strong></TableCell>
                                <TableCell><strong>Stock</strong></TableCell>
                                <TableCell align="center"><strong>Imagen</strong></TableCell>
                                <TableCell align="center"><strong>Acciones</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>{product.id}</TableCell>
                                    <TableCell>{product.nombre}</TableCell>
                                    <TableCell>{product.descripcion}</TableCell>
                                    <TableCell>{product.precio}</TableCell>
                                    <TableCell>{product.stock}</TableCell>
                                    <TableCell align="center">
                                        <img
                                            src={product.imagen || 'https://via.placeholder.com/50'}
                                            alt={product.nombre}
                                            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                            onError={(e) => { e.target.src = 'https://via.placeholder.com/50'; }}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button size="small" color="primary" onClick={() => handleEditClick(product)}>
                                            Editar
                                        </Button>
                                        <Button size="small" color="error" onClick={() => handleDelete(product.id)}>
                                            Eliminar
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>{isEditMode ? 'Editar Producto' : 'Crear Nuevo Producto'}</DialogTitle>
                <DialogContent style={{ marginTop: '10px' }}>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="nombre"
                        label="Nombre"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={formData.nombre}
                        onChange={handleChange}
                        style={{ marginBottom: '10px' }}
                    />
                    <TextField
                        margin="dense"
                        name="descripcion"
                        label="Descripción"
                        type="text"
                        fullWidth
                        variant="outlined"
                        multiline
                        rows={3}
                        value={formData.descripcion}
                        onChange={handleChange}
                        style={{ marginBottom: '10px' }}
                    />
                    <TextField
                        margin="dense"
                        name="precio"
                        label="Precio"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={formData.precio}
                        onChange={handleChange}
                        style={{ marginBottom: '10px' }}
                    />
                    <TextField
                        margin="dense"
                        name="stock"
                        label="Stock"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={formData.stock}
                        onChange={handleChange}
                        style={{ marginBottom: '10px' }}
                    />
                    <TextField
                        margin="dense"
                        name="imagen"
                        label="URL de Imagen"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={formData.imagen}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button
                        onClick={isEditMode ? handleUpdate : handleCreate}
                        variant="contained"
                        color="primary"
                    >
                        {isEditMode ? 'Actualizar' : 'Crear'}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};


