import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App/App.jsx';

require('./components/common/colors.scss');
require('./components/common/constants.scss');

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/*<IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/> */}
    </Route>
  </Router>
), document.getElementById('app'))
