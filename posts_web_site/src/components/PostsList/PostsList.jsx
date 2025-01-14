import React from 'react'
import styles from './PostsList.module.css'
import PostElement from '../PostElement/PostElement'

const PostsList = ({ posts, pagesArray, onPageChange }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Посты</h1>
            <div className={styles.posts__list}>
                {posts.map((post, idx) => (
                    <PostElement key={idx} post={post}/>
                ))}
            </div>
            <div className={styles.pages}>
                {pagesArray.map((p, idx) => (
                    <button key={idx} className={styles.page} onClick={() => onPageChange(p)}>
                        {p}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default PostsList