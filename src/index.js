import React from 'react'
import styles from './index.module.css'
import 'modal-library-kv/dist/index.css';

export const Modal = () => {
  return <div className={styles.modal}>
  <img id='closeModalKv' src={require('./cross.png')} />
  <p>L'utilisateur a été créé avec succès !</p>
</div>
}