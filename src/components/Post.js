import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getData } from '../store/Post/postAction';

const Post = () => {
    const post = useSelector((state) => state.post);
    console.log(post.data, 'post when useSelector');

    useEffect(()=> {
        getData();
    } , []);

    return (
        <div>
            <h2>List of post</h2>
            {/* {post.loading && <p>Loading...</p>}
            {!post.loading && post.error ? <p>Error: {post.error}</p>: null} */}
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