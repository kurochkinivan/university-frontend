import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import ErrorMessage from '../components/UI/ErrorMessage/ErrorMessage';
import { useFetching } from '../hooks/useFetching';
import PostComment from '../components/PostComment/PostComment';

const PostComments = () => {
    const { postId } = useParams();
    const [comments, setComments] = useState([]);
    const [fetchComments, isLoading, errorMessage] = useFetching(async () => {
        const fetchedComments = await PostService.getCommentsById(postId);
        setComments(fetchedComments);
    });

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div>
            {isLoading && <Loader />}
            {errorMessage && <ErrorMessage errMessage={errorMessage} />}
            {!isLoading && !errorMessage  && <PostComment comments={comments} />}
        </div>
    );
};

export default PostComments;
