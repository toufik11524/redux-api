import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './postSlice';
import axios from 'axios';

const Post = () => {
    const post = useSelector((state) => state.post);
    console.log(post.data, 'user');
    const dispatch = useDispatch();

    async function getAPI () {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        dispatch(fetchData(response.data));
    }

    useEffect(()=> {
        getAPI();
    } , []);

    return (
        <div>
            <h2>List of post</h2>
            {post.loading && <p>Loading...</p>}
            {!post.loading && post.error ? <p>Error: {post.error}</p>: null}
            {!post.loading && post.data.length ? (
                <ul>
                    {post.data.map((user) => 
                        <li key={user.id}>{user.title}</li>
                    )}
                </ul>
            ): null}
        </div>
    );
}

export default Post;