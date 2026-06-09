import React from 'react'
import styles from './contactos.module.css'

export const ContactosPages = () => {
    return (
        <div className={styles.contenedor}>
            <div className={styles.izquierda}>
                <h2 className={styles.izquierdaTitulo}>Contáctanos</h2>
                <p className={styles.izquierdaDescripcion}>
                    ¿Tienes alguna pregunta sobre el multiverso? <br />
                    Escríbenos y te responderemos.
                </p>
            </div>

            <div className={styles.derecha}>
                <h3 className={styles.formTitulo}>Envíanos un mensaje</h3>
                <input className={styles.input} type="text" placeholder="Nombre" />
                <input className={styles.input} type="email" placeholder="Correo electrónico" />
                <textarea className={styles.textarea} placeholder="Mensaje"></textarea>
                <button className={styles.boton}>Enviar</button>
            </div>
        </div>
    )
}