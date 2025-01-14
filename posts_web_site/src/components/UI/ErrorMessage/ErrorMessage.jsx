import React from 'react'
import styles from './ErrorMessage.module.css'

const ErrorMessage = ({errMessage}) => {
  return (
    <div className={styles.error__message}>
        {errMessage}
    </div>
  )
}

export default ErrorMessage