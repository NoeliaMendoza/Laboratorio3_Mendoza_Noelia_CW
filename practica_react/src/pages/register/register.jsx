import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { register as registerService } from '../../services/auth.services';
import styles from './register.module.css';

export const Register = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nombre || !correo || !password || !confirmPassword) {
            setError('Debe completar todos los campos.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }
        setError('');
        setLoading(true);
        try {
            await registerService(nombre, correo, password);
            navigate('/login');
        } catch (registerError) {
            const status = registerError?.response?.status;
            const mensaje = registerError?.response?.data?.mensaje || 'Error al registrarse.';
            if (status === 400) setError(mensaje);
            else if (status === 500) setError('Error del servidor. Intenta más tarde.');
            else setError(mensaje);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.contenedor}>
            <div>
                <h2 className={styles.titulo}>Registro</h2>
                <p className={styles.subtitulo}>
                    Completa tu información para crear una cuenta y acceder a los personajes del multiverso.
                </p>
            </div>

            <form className={styles.formulario} onSubmit={handleSubmit}>
                <TextField className={styles.campo} label="Nombre" required fullWidth margin="normal" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <TextField className={styles.campo} label="Correo electrónico" type="email" required fullWidth margin="normal" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                <TextField className={styles.campo} label="Contraseña" type="password" required fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
                <TextField className={styles.campo} label="Confirmar contraseña" type="password" required fullWidth margin="normal" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                {error && <p className={styles.errorText}>{error}</p>}

                <div className={styles.actions}>
                    <Button className={styles.boton} variant="contained" type="submit" disabled={loading}>
                        {loading ? 'Registrando...' : 'Registrarse'}
                    </Button>
                    <p className={styles.infoText}>
                        Al registrarte aceptas los términos y condiciones. <Link to="/login" style={{ color: '#3b82f6', textDecoration: 'none' }}>¿Ya tienes cuenta?</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};