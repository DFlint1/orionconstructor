import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from './App';  //this has to stay here to render App.js
import Archives from './pages/Archives'; //placing these in Alphabetical for fun
import Featured from './pages/Featured';
import Settings from './pages/Settings';

const app = document.getElementById('root'); //app or App?

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
		<IndexRoute component={Featured}></IndexRoute>
		<Route path="archives(/:article)" name="archives" component={Archives}></Route>
      	<Route path="projects" name="settings" component={Settings}></Route>
      	</Route>
	</Router>,
  app);

// import './index.css';