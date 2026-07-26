import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './login.module.css';
import loginImage from '../../assets/login.jpg';
import { login as loginService } from '../../services/auth.services';

export const Login = () => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!correo || !password) {
            setError('Debes ingresar correo y contraseña.');
            return;
        }

        setError('');
        setLoading(true);

        try {
            const response = await loginService(correo, password);
            localStorage.setItem('token', response.token);
            localStorage.setItem('usuario', JSON.stringify(response.usuario || {}));
            navigate('/dashboard');
        } catch (loginError) {
            const status = loginError?.response?.status;
            const mensaje = loginError?.response?.data?.mensaje || 'Error al iniciar sesión.';
            if (status === 401) setError('Contraseña incorrecta.');
            else if (status === 404) setError('Usuario no encontrado.');
            else if (status === 403) setError('No tienes permisos para acceder.');
            else if (status === 500) setError('Error del servidor. Intenta más tarde.');
            else setError(mensaje);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.contenedor}>
            <div className={styles.formArea}>
                <div className={styles.header}>
                    <h2 className={styles.titulo}>Iniciar sesión</h2>
                    <p className={styles.subtitulo}>
                        Accede con tu correo y contraseña para continuar en el mundo de Rick and Morty.
                    </p>
                </div>

                <form className={styles.formulario} onSubmit={handleSubmit}>
                    <TextField
                        className={styles.campo}
                        label="Correo electrónico"
                        type="email"
                        required
                        fullWidth
                        margin="normal"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                    <TextField
                        className={styles.campo}
                        label="Contraseña"
                        type="password"
                        required
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className={styles.errorText}>{error}</p>}

                    <div className={styles.actions}>
                        <Button className={styles.boton} variant="contained" type="submit" disabled={loading}>
                            {loading ? 'Ingresando...' : 'Entrar'}
                        </Button>
                        <p className={styles.infoText}>
                            ¿Aún no tienes cuenta? <Link to="/register" style={{ color: '#3b82f6', textDecoration: 'none' }}>Regístrate para comenzar</Link>.
                        </p>
                    </div>
                </form>
            </div>

            <aside className={styles.panel}>
                <img
                    className={styles.panelImage}
                    src={loginImage}
                    alt="Login visual"
                />
            </aside>
        </div>
    );
};