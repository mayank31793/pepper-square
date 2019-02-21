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
		axios.get('https://test-9515d.firebaseio.com/users.json')
			.then((res) => {
				const fetchOrders = [];
				for(let key in res.data){
					fetchOrders.push({
						...res.data[key],
						id:key
					});
				}
				this.setState({usersData:fetchOrders});
			});	
	}

	render(){
		console.log(Object.keys(this.state.usersData));
		return(
			<div className="home">
				
				{this.state.usersData.map((res,i) => <Link to={"/"+res.id}  key={i}>
					<Users name={res.name} className="users" />
				</Link>)}
			</div>
		);
	}
}

export default home;