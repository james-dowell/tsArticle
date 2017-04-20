import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/Home';
import Article from './Article/Article';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <div className="constrain">
      <Route exact path="/" component={Home}/>
      <Route path='/article/:articleId' component={Article}/>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));