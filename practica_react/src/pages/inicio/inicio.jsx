import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './inicio.module.css';
import { ConceptoCard } from '../../components';
import reactIcon from '../../assets/react-icono.png';
import props from '../../assets/props.png';
import propTypes from '../../assets/propTypes.png';
import hooks from '../../assets/hooks.png';
import CSSModules from '../../assets/CSSModules.png';
import reactRouter from '../../assets/reactRouter.png';
import fetchAPI from '../../assets/fetchAPI.png';
import useStateAndUseEffect from '../../assets/useState-useEffect.png';

export const InicioPages = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.hero}>
                <h2 className={styles.heroTitulo}>Desarrollo de Componentes Reutilizables con React</h2>
                <p className={styles.heroDescripcion}>
                    Una aplicación web desarrollada con React 19 que consume la API oficial de Rick and Morty.
                    Explora los personajes del multiverso aplicando conceptos de componentes reutilizables,
                    Props, Hooks, CSS Modules y React Router.
                </p>
                <button
                    className={styles.heroButton}
                    type="button"
                    onClick={() => navigate('/personajes')}
                >
                    Ver Personajes de la Serie
                </button>
            </div>

            <div className={styles.conceptos}>
                <h3 className={styles.conceptosTitulo}>Conceptos de React</h3>
                <div className={styles.conceptosGrid}>
                    <ConceptoCard
                        imagen={reactIcon}
                        titulo="Componentes"
                        descripcion="Bloques reutilizables de interfaz que encapsulan lógica y presentación visual."
                    />
                    <ConceptoCard
                        imagen={props}
                        titulo="Props"
                        descripcion="Mecanismo para pasar información entre componentes de forma unidireccional."
                    />
                    <ConceptoCard
                        imagen={propTypes}
                        titulo="PropTypes"
                        descripcion="Validación de propiedades recibidas por los componentes para reducir errores."
                    />
                    <ConceptoCard
                        imagen={hooks}
                        titulo="Hooks"
                        descripcion="Funciones especiales como useState y useEffect para gestionar estado y ciclo de vida."
                    />
                    <ConceptoCard
                        imagen={CSSModules}
                        titulo="CSS Modules"
                        descripcion="Sistema de estilos encapsulados que evita conflictos entre componentes."
                    />
                    <ConceptoCard
                        imagen={reactRouter}
                        titulo="React Router"
                        descripcion="Librería para implementar navegación entre páginas en aplicaciones SPA."
                    />
                    <ConceptoCard
                        imagen={fetchAPI}
                        titulo="Fetch API"
                        descripcion="Función asíncrona para consumir servicios externos y obtener datos de una API REST."
                    />
                    <ConceptoCard
                        imagen={useStateAndUseEffect}
                        titulo="useState y useEffect"
                        descripcion="Hooks para gestionar el estado del componente y ejecutar efectos al cargar la página."
                    />
                </div>
            </div>
        </>
    );
};