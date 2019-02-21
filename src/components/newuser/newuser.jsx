import React,{ Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import propTypes from 'prop-types';

class newuser extends Component {
	constructor(props){
		super(props);
		this.state = {
			name:'',
			nameValid:false,
			usersData:[]		
		}
		this.handle = this.handle.bind(this);
	}	

	handle(event){
		var regex = /[A-Za-z ]+/;
		if(regex.test(event.target.value) == false){
			console.log('Not Valid');
		}
		this.setState({name:event.target.value});
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
		return(
			<div>
				{false? <Redirect to="/login" />:null}
				<p>New User</p>
				<input type="text" value={this.state.name} onChange={this.handle}/>
				<b>{this.state.name}</b>
				{this.state.usersData.map((x) => <div><p>{x.name}</p></div>)}
				
			</div>
		);
	}
}

newuser.propTypes = {
	name:propTypes.string
}

export default newuser;