import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './pages/home/home';
import UserPage from './pages/users/users';
import Layout from '../src/layouts/index'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/users" exact component={UserPage} />
        </Switch>
      </Layout>
      
    </Router>
  );
}

export default RouterConfig;
