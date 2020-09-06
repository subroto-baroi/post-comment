import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentDtl from './CommentDtl';

const PostDetail = () => {    
    const {postId}=useParams();
    const [post, setPost]= useState({});
    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then (data => setPost(data))
        },[]);

        const [comment, setComment]=useState([])
         useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
        },[]);
        console.log(comment);

        const styleDetails ={
            border:'1px solid gray', 
            padding:'10px', 
            textAlign:'center',
            margin:'80px 100px 50px 100px',
            borderRadius:'10px',
            backgroundColor:'#5CC8AB',
            color:'white'
        }   
   
    return (
        <div style={styleDetails}>
            <h2> The post details of id no  :  {postId} </h2>
            <hr/>
            <h3>User Id  :  {post.userId} </h3>
            <h4>Title  :  {post.title} </h4>
            <h5>Body  :  {post.body} </h5> 

            <hr/>
            <h3 style={{color: '#218838'}}>The post comments details</h3>
            <hr/>
            {
                comment.map(cmt => <CommentDtl comment={cmt}></CommentDtl>)
            }
        </div>
        
    );
};

export default PostDetail;