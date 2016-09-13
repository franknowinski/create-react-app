import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import PortfolioPage from './components/portfolio/PortfolioPage';

import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="portfolio" component={requireAuth(PortfolioPage)} />
  </Route>
)
