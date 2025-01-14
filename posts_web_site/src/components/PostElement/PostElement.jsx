import React, { useEffect, useState } from 'react';
import { FaRegUserCircle, FaEye, FaCaretDown } from 'react-icons/fa';
import ThumbUp from '../UI/Thumbs/ThumbUp';
import ThumbDown from '../UI/Thumbs/ThumbDown';
import styles from './PostElement.module.css';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import UserService from '../../API/UserService';
import Loader from '../UI/Loader/Loader';

const PostElement = ({ post }) => {
    const { postId } = useParams();
    const isSelected = post.id === Number(postId);
    const [user, setUser] = useState({})
    const [fetchUser, isLoading, error] = useFetching(async () => {
        const user = await UserService.getById(post.userId)
        setUser(user)
    })

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <article className={styles.post}>
            <div className={styles.post__content}>
                <div className={styles.post__title}>{post.id}. {post.title}</div>
                <div className={styles.post__body}>{post.body}</div>
                <div className={styles.post__tags}>
                    {post.tags.map((tag, idx) => (
                        <div key={idx} className={styles.post__tag}>{tag}</div>
                    ))}
                </div>
            </div>

            <div className={styles.post__bottom}>
                <div className={styles.reactions}>
                    <ThumbUp likes={post.reactions.likes} />
                    <ThumbDown dislikes={post.reactions.dislikes} />
                </div>
                <div className={styles.post__info}>
                    <div className={styles.post__views}>
                        <FaEye className={styles.eyeIcon} /> {post.views}
                    </div>
                    <div className={styles.post__user}>
                        <FaRegUserCircle />
                        <div>
                            {isLoading && <Loader style={{
                                width: '1rem',
                                height: '1rem',
                                borderWidth: '3px',
                                margin: 'auto',
                            }} />}
                            {error}
                            {!isLoading && !error && user.username}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.post__comments}>
                <Link to={`/posts/comments/${post.id}`} className={styles.commentsLink}>
                    Комментарии
                    <FaCaretDown />
                </Link>
                {isSelected && <Outlet />}
            </div>
        </article>
    );
};

export default PostElement;
