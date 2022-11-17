import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getData } from '../store/Post/postAction';

const Post = () => {
    const post = useSelector((state) => state.post);
    const commonMessage = useSelector((state) => state.common);
    console.log(post);

    useEffect(()=> {
        getData();
    } , []);

    return (
        <div>
            <h2>List of post</h2>
            {commonMessage.loading && <p>Loading...</p>}
            {!commonMessage.loading && commonMessage.error ? <p>Error: {commonMessage.error}</p>: null}
            {!post.loading && post.data.length ? (
                <ul>
                    {post.data.map(({id: postNumber, title: info, body: detail}) => 
                        <li key={postNumber}>{info}</li>
                    )}
                </ul>
            ): null}
        </div>
    );
}

export default Post;