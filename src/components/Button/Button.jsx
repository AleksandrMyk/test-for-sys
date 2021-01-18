import React from 'react';
import styles from './button.module.css';

const Button = ({ onClick }) => (
  <div className={styles.container}>
    <button className={styles.button} type="button" onClick={onClick}>
      Купить
    </button>
  </div>
);

export default Button;
