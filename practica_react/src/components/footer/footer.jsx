import styles from './footer.module.css';

export const Footer = () => {
    const aniActual = new Date().getFullYear();
    return (
        <div className={styles.footerContainer}>
            <p className={styles.footerText}>Todos los derechos reservados - ESPE {aniActual}</p>
        </div>
    )
}