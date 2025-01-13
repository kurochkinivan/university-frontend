import React from 'react'
import styles from './TagsList.module.css'

const TagsList = ({ tags }) => {
    return (
        <div style={{marginTop: '1rem'}}>
            {tags.map((tag, idx) => (<span className={styles.tag} key={idx}>{tag}</span>))}
        </div>
    )
}

export default TagsList