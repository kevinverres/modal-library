import React from 'react'
import styles from './index.module.css'
import 'modal-library-kv/dist/index.css';

/**
 * Permet d'afficher une fenêtre modal avec un message précis "L'utilisateur a été créé avec succès !!!"
 * @returns HTMLElement
 */
export const Modal = () => {
  return <div className={styles.modal}>
  <img id='closeModalKv' src={require('./cross.png')} />
  <p>L'utilisateur a été créé avec succès !!!</p>
</div>
}