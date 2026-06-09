import PropTypes from 'prop-types';
import styles from './concepto-card.module.css';

export const ConceptoCard = ({ imagen, titulo, descripcion }) => {
    return (
        <div className={styles.conceptoCard}>
            <img className={styles.imagen} src={imagen} alt={titulo} />
            <h3 className={styles.titulo}>{titulo}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
        </div>
    );
};

ConceptoCard.propTypes = {
    imagen: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
};

