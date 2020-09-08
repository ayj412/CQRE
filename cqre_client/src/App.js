import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { hashHistory } from 'react-router';

import './static/css/style.css';
import './static/css/common.css';

import Header from './components/common/Header';
import Main from './components/Main/Main';
import Search from './components/Search/Search';
import Post from './components/Post/Post';
import Mypage from './components/Mypage/Mypage';
import Write from './components/Write/Write';
import { CookiesProvider } from 'react-cookie';





function App() {

  
  return (

    <Router>
    <CookiesProvider>
    <Header />
    <Switch>
      
      <Route path="/" exact component={Main}>
        {/* <Main /> */}
      </Route>
      <Route path="/search" exact component={Search}>
        {/* <Search /> */}
      </Route>
      <Route path="/post" exact component={Post}>
        {/* <Post /> */}
      </Route>
      <Route path="/post/:postId" exact component={Post}>
        {/* <Post /> */}
      </Route>
      <Route path="/mypage" exact component={Mypage}>
        {/* <Mypage /> */}
      </Route>
      <Route path="/write" exact component={Write}>
        {/* <Write /> */}
      </Route>
    </Switch>
    </CookiesProvider>
    </Router>
    
  );
}

export default App;
