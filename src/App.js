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
import PostDetail from './Component/PostDetail';


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
