import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
export const Header = () => {
    return (
        <header className={styles.menu}>
            <h1>Dimension Explorer</h1>
            <nav className={styles.menuContainer}>
                <Link className={styles.menuItems} to='/'>Inicio</Link>
                <Link className={styles.menuItems} to='/nosotros'>Nosotros</Link>
                <Link className={styles.menuItems} to='/contactos'>Contactos</Link>
                <Link className={styles.menuItems} to='/personajes'>Personajes</Link>
            </nav>
        </header>
    )
}

