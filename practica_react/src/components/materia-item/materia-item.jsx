import PropTypes from 'prop-types';
import styles from './materia-item.module.css';

export const MateriaItem = ({ icono, nombre, descripcion }) => {
    return (
        <div className={styles.materiaItem}>
            <div className={styles.icono}>{icono}</div>
            <div className={styles.info}>
                <h3 className={styles.nombre}>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
            </div>
        </div>
    );
};

MateriaItem.propTypes = {
    icono: PropTypes.element.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
};