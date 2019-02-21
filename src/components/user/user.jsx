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
		axios.get('https://test-9515d.firebaseio.com/users/'+this.props.match.params.id+'.json')
			.then((res) => this.setState({userData:res.data}))
			// .then((res) => console.log(res.data))				
	}

	render(){
		// console.log(this.state.userData);
		console.log(this.props.match.params.id);
		return(
			<div>
				<p>{this.state.userData.name}</p>
				<p>{this.state.userData.email}</p>
			</div>
		);
	}
}

export default user;