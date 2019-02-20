import React,{ Component } from 'react';
import axios from '../../axios-users';

class user extends Component {
	constructor(props){
		super(props);
		this.state = {
			userData:[]
		}
	}	

	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/users/'+this.props.match.params.id)
			.then((res) => this.setState({userData:res.data}))
	}

	render(){
		console.log(this.state.userData);
		return(
			<div>
				<p>{this.state.userData.name}</p>
				<p>{this.state.userData.email}</p>
			</div>
		);
	}
}

export default user;