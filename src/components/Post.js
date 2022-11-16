import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getData } from '../store/Post/postAction';

const Post = () => {
    const post = useSelector((state) => state.post);
    const commonMessage = useSelector((state) => state.common);
    console.log(commonMessage, 'commonData');

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
                    {post.data.map((item) => 
                        <li key={item.id}>{item.title}</li>
                    )}
                </ul>
            ): null}
        </div>
    );
}

export default Post;