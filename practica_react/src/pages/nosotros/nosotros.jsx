import React from 'react'
import styles from './nosotros.module.css'
import { MateriaItem } from '../../components';
import { FaCode, FaGlobe, FaBrain, FaDatabase, FaBook, FaBriefcase } from 'react-icons/fa';

export const NosotrosPages = () => {
    return (
        <>
            <div className={styles.contenedor}>
                <div className={styles.estudiante}>
                    <h2 className={styles.titulo}>Sobre el Proyecto</h2>
                    <p className={styles.descripcion}>
                        Dimension Explorer es un sitio web desarrollada como práctica académica
                        para explorar el universo de Rick and Morty a través de su API.
                    </p>
                </div>

                <div className={styles.infoGrid}>
                    <div className={styles.infoItem}>
                        <span>Estudiante</span>
                        <p>Noelia Mendoza</p>
                    </div>
                    <div className={styles.infoItem}>
                        <span>Carrera</span>
                        <p>Ingeniería en Tecnologías de la Información</p>
                    </div>
                    <div className={styles.infoItem}>
                        <span>Materia</span>
                        <p>Programación Integrativa de Componentes Web</p>
                    </div>
                    <div className={styles.infoItem}>
                        <span>Universidad</span>
                        <p>Universidad de las Fuerzas Armadas – ESPE</p>
                    </div>
                </div>

                <div className={styles.objetivo}>
                    <h3 className={styles.objetivoTitulo}>Objetivo de la Práctica</h3>
                    <p>Desarrollar una SPA en React consumiendo una API REST pública,
                        aplicando conceptos de componentes, props, estado y React Router DOM.</p>
                </div>

                <div className={styles.tecnologias}>
                    <h3 className={styles.tecnologiasTitulo}>Tecnologías Utilizadas</h3>
                    <div className={styles.tecGrid}>
                        <span className={styles.tecItem}>React</span>
                        <span className={styles.tecItem}>Vite</span>
                        <span className={styles.tecItem}>React Router DOM</span>
                        <span className={styles.tecItem}>JavaScript</span>
                        <span className={styles.tecItem}>CSS Modules</span>
                        <span className={styles.tecItem}>Rick and Morty API</span>
                    </div>
                </div>
                <div className={styles.materias}>
                    <h3 className={styles.materiasTitulo}>Materias del Semestre</h3>
                    <MateriaItem
                        icono={<FaCode />}
                        nombre="Programación Integrativa de Componentes Web"
                        descripcion="Desarrollo de aplicaciones web modernas usando React y componentes reutilizables."
                    />
                    <MateriaItem
                        icono={<FaGlobe />}
                        nombre="Desarrollo Web para Integración de Tecnologías"
                        descripcion="Integración de tecnologías web para el desarrollo de soluciones digitales."
                    />
                    <MateriaItem
                        icono={<FaBrain />}
                        nombre="Inteligencia Artificial"
                        descripcion="Fundamentos de IA y analítica de datos aplicados a soluciones tecnológicas."
                    />
                    <MateriaItem
                        icono={<FaDatabase />}
                        nombre="Modelado Avanzado de Base de Datos"
                        descripcion="Diseño y modelado avanzado de bases de datos relacionales y no relacionales."
                    />
                    <MateriaItem
                        icono={<FaBook />}
                        nombre="Lectura y Escritura de Textos Académicos"
                        descripcion="Desarrollo de competencias en redacción y comprensión de textos académicos."
                    />
                    <MateriaItem
                        icono={<FaBriefcase />}
                        nombre="Prácticas Laborales I"
                        descripcion="Aplicación de conocimientos en entornos laborales reales de tecnología."
                    />
                </div>
            </div>

        </>
    )
}