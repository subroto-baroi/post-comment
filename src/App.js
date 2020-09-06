import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home';
import NoMatch from './Component/NoMatch';
import Post from './Component/Post';
import PostDetail from './Component/PostDetail';
import CommentDtl from './Component/CommentDtl';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>        
        <Route path="/post/:postId">
            <PostDetail/>
        </Route>
       
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>     
      
    </Router>
  );
}

export default App;
