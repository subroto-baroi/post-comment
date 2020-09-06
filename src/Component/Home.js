import React, { useState, useEffect } from 'react';
import Post from './Post';
import { Button } from '@material-ui/core';


const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);
    return (
        <div>
            <h1 style={{textAlign: 'center',color: '#D23888'}}>Total Posts :{posts.length} </h1>
            {
                posts.map(post => <Post post={post}></Post> )
            }
            
        </div>
    );
};

export default Home;