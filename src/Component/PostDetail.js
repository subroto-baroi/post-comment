import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId}=useParams();
    const [post, setPost]= useState({});
    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then (data => setPost(data))
        });

        const styleDetails ={
            border:'1px solid gray', 
            padding:'10px', 
            textAlign:'center',
            margin:'80px 100px 0px 100px',
            borderRadius:'10px',
            backgroundColor:'purple',
            color:'white'
        }   
   
    return (
        <div style={styleDetails}>
            <h2>Post and comment details of id no  :  {postId} </h2>
            <h3>User Id  :  {post.userId} </h3>
            <h4>Title  :  {post.title} </h4>
            <h5>Body  :  {post.body} </h5>
        </div>
    );
};

export default PostDetail;