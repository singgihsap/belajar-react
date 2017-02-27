import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './components/Pages/Home';
import Product from './components/Pages/Product';

const About = () => <div>ABout</div>;
const Contact = () => <div>Contact</div>;


ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="about" component={About} />
          <Route path="product" component={Product} />
          <Route path="contact" component={Contact} />
      </Route>
  </Router>,
  document.getElementById('root')
);
