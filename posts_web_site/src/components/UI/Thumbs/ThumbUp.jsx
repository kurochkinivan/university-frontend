import React from 'react'
import { FaThumbsUp } from 'react-icons/fa'
import styles from './Thumbs.module.css'

const ThumbUp = ({ likes }) => {
    return (
        <button className={styles.likeButton}>
            <FaThumbsUp /> {likes}
        </button>
    )
}

export default ThumbUp