import { useState, useEffect } from "react";
import { obtenerPersonajes } from "../../services/rick-and-morty-service";
import styles from './personajes.module.css';
import { PersonajeCard } from "../../components";

export const PersonajesPages = () => {

    const [personajes, setPersonajes] = useState([]);

    const getPersonajes = async () => {
        const data = await obtenerPersonajes();
        setPersonajes(data);
    };

    useEffect(() => {
        getPersonajes();
    }, []);

    return (
        <>
            <h1 className={styles.titulo}>Personajes del Multiverso</h1>
            <p className={styles.descripcion}>Explora los personajes de todas las dimensiones de Rick and Morty.</p>
            <div className={styles.contenedor}>
                {personajes.map(personaje =>
                    <PersonajeCard
                        key={personaje.id}
                        nombre={personaje.name}
                        especie={personaje.species}
                        url={personaje.image}
                    />
                )}
            </div>
        </>
    );
};