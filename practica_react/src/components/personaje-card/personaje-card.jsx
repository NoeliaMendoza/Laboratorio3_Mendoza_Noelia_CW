import PropTypes from 'prop-types';
import styles from './personaje-card.module.css';

export const PersonajeCard = ({ nombre, especie, url }) => {
    return (
        <div className={styles.personajeCard}>
            <img className={styles.personajeImg} src={url} alt={nombre} />
            <div className={styles.personajeInfo}>
                <h3 className={styles.personajeNombre}>{nombre}</h3>
                <p className={styles.personajeEspecie}>{especie}</p>
            </div>
        </div>
    );
}

PersonajeCard.propTypes = {
    nombre: PropTypes.string.isRequired,
    especie: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};