import api from '../api/axios';

export const obtenerProductos = async () => {
    const response = await api.get('/productos');
    return response.data;
};

export const obtenerUnProducto = async (id) => {
    const response = await api.get(`/productos/${id}`);
    return response.data;
};

export const crearProducto = async (producto) => {
    const response = await api.post('/productos', producto);
    return response.data;
};

export const editarProducto = async (id, producto) => {
    const response = await api.put(`/productos/${id}`, producto);
    return response.data;
};

export const eliminarProducto = async (id) => {
    const response = await api.delete(`/productos/${id}`);
    return response.data;
};

