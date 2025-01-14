import React, { useEffect, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';
import PostService from '../API/PostService';
import PostsList from '../components/PostsList/PostsList';
import ErrorMessage from '../components/UI/ErrorMessage/ErrorMessage';
import { getPagesArray, getPagesCount } from '../utils/pages';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)

    let pagesArray = getPagesArray(totalPages)

    const [fetchPosts, isLoading, errorMessage] = useFetching(async () => {
        const posts = await PostService.getAll(limit, (page - 1) * limit);
        setPosts(posts.posts);
        const totalCount = posts.total
        setTotalPages(getPagesCount(totalCount, limit))
    });

    const onPageChange = (page) => {
        setPage(page)
        console.log(page);
        
    }

    useEffect(() => {
        fetchPosts();
    }, [page]);

    return (
        <div>
            {isLoading && <Loader />}
            {errorMessage && <ErrorMessage errMessage={errorMessage} />}
            {!isLoading && posts.length !== 0 && <PostsList posts={posts} pagesArray={pagesArray} onPageChange={onPageChange} />}

        </div>
    );
}

export default Posts;
