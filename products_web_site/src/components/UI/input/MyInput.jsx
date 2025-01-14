import React from 'react'
import styles from './MyInput.module.css'

const MyInput = (props) => {
    return (
        <input className={styles.my__input} {...props}>
            {props.children}
        </input>
    )
}

export default MyInput