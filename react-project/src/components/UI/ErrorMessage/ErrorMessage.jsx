import React from 'react';
import styles from './ErrorMessage.module.css'; 

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.errorMessage}>
      <h1>{message}</h1>
    </div>
  );
};

export default ErrorMessage;