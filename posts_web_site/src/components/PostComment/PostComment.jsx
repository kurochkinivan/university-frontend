import React from 'react'
import styles from './PostComment.module.css'
import { FaRegUserCircle } from "react-icons/fa";
import ThumbUp from '../UI/Thumbs/ThumbUp';


const PostComment = ({ comments }) => {
    if (comments.length === 0) {
        return <div className={styles.noComments}>Комментариев нет</div>
    }

    return (
        <div className={styles.post__comments}>
            {comments.map(comment => (
                <div key={comment.id} className={styles.post__comment}>
                    <div className={styles.comment__author}>
                        <FaRegUserCircle /> {comment.user.username}
                    </div>
                    <div className={styles.comment__content}>
                        <div className={styles.comment__body}>{comment.body}</div>
                        <ThumbUp likes={comment.likes}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostComment
