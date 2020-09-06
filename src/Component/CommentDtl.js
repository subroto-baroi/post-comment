import React from 'react';


const CommentDtl = (props) => {
    const {id, name, email,body}=props.comment;
    
    return (
        <div style={{borderBottom:'1px solid orange'}}>            
            <h3>Id No : {id} </h3>
            <h4>Name : {name} </h4>
            <h5>Email : {email} </h5>
            <h6>Body : {body}</h6> 

        </div>
    );
};

export default CommentDtl;