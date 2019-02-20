import React,{ Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './home.css';
import Users from '../users/users';
import User from '../user/user';

class home extends Component{
	constructor(props){
		super(props);
		this.state = {
			usersData:[],
			test:{}
		}
	}	

	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then((res) => this.setState({usersData:res.data}))

		axios.get('https://test-9515d.firebaseio.com/users.json')
			.then((res) => this.setState({test:res.data}))	
	}

	render(){
		console.log(Object.keys(this.state.test));
		// console.log(this.props.match);
		return(
			<div className="home">
				{this.state.usersData.map((res,i) => <Link to={"/"+res.id}  key={i}>
					<Users id={res.id} name={res.name} className="users" />
				</Link>)}
				{Object.keys(this.state.test).map((res) => {
					axios.get('https://test-9515d.firebaseio.com/users/'+res+'.json')
						.then((res) => <p>{res.username}</p>)
					// this.state.test[res].username
				})}
				
			</div>
		);
	}
}

export default home;