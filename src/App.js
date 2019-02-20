import React, { Component } from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';

import './App.css';
import Home from './components/home/home';
import Newuser from './components/newuser/newuser';
import User from './components/user/user';
import Login from './components/login/login';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}

	render() { 
		return (
			<div>
				<div className="header">
					<NavLink to="/" exact activeClassName="active" className="headerLinks">Home</NavLink>
					<NavLink to="/newuser" activeClassName="active" className="headerLinks">New User</NavLink>
					<NavLink to="/login" activeClassName="active" className="headerLinks">Login</NavLink>
				</div>
				<Switch>
					<Route path="/newuser" exact component={Newuser} />
					<Route path="/login" exact component={Login} />				
					<Route path="/" exact component={Home} />
					<Route path="/:id" exact component={User} />
				</Switch>
			</div>
		);
	}
}

export default App;