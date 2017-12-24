import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CountPage from './routes/CountPage';
import Users from './routes/Users';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/count" component={CountPage} />
        <Route path="/users" component={Users} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
