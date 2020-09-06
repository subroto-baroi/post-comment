import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});  
const Post = (props) => {  

  const { id } = props.post;
  
  const postStyle = {    
    margin: "0px 10px 20px 200px",
    backgroundColor:'#1DA1F2',
    borderRadius: "10px",
    padding: "20px",     
     width:'750px'
  };
  const classes = useStyles(); 
  return (
    <div style={postStyle}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom>
          
             Post id no:{id}
          </Typography>
          <Typography variant="h5" component="h4">
            Click the button to see the Details of the users post and comment.          
          </Typography>          
          
          </CardContent>
          <CardActions>
              <Link to={`/post/${id}`}><Button align="center" variant="contained" color="primary">Detail of id : {id}</Button></Link>
            
          </CardActions>
      </Card>
      
    </div>
  );
};

export default Post;
