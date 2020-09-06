import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CommentDtl = () => {
    const {commentId}=useParams();
    const [comment, setComment]=useState({})
    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/comments?postId=${commentId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    },[]);
    return (
        <div>
            <h1>Comment details :{commentId} </h1>
            <h2>Name :{comment.name} </h2>
            <h3>Email :{comment.email} </h3>
            <h4>Body :{comment.body}</h4>
        </div>
    );
};

export default CommentDtl;