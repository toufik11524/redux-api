import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './userSlice';

const CurrencyInfo = () => {
    const user = useSelector((state) => state.user);
    console.log(user.data, 'user');
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchData())
    } , []);

    return (
        <div>
            <h2>List of Users</h2>
            {user.loading && <p>Loading...</p>}
            {!user.loading && user.error ? <p>Error: {user.error}</p>: null}
            {!user.loading && user.data.length ? (
                <ul>
                    {user.data.map((user) => 
                        <li key={user.id}>{user.name}</li>
                    )}
                </ul>
            ): null}
        </div>
    );
}

export default CurrencyInfo;