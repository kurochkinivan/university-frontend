import React from 'react'
import { FaThumbsDown } from 'react-icons/fa'
import styles from './Thumbs.module.css'

const ThumbDown = ({ dislikes }) => {
    return (
        <button className={styles.dislikeButton}>
            <FaThumbsDown /> {dislikes}
        </button>
    )
}

export default ThumbDown