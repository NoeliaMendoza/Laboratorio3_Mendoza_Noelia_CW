import React from 'react'
import { Header, Footer } from '../index';
import styles from './layout.module.css';

export const Layout = ({ children }) => {
    return (
        <div className={styles.contenedor}>
            <Header></Header>
            <main className={styles.main}>
                {children}
            </main>
            <Footer></Footer>
        </div>
    )
}
