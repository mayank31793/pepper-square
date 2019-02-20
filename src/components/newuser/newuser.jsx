import React,{ Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import propTypes from 'prop-types';

class newuser extends Component {
	constructor(props){
		super(props);
		this.state = {
			name:'',
			nameValid:false
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

	push(){
		axios.post('https://test-9515d.firebaseio.com/users.json',  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  })
	}

	render(){
		return(
			<div>
				{false? <Redirect to="/login" />:null}
				<p>New User</p>
				<input type="text" value={this.state.name} onChange={this.handle}/>
				<b>{this.state.name}</b>
				<button onClick={this.push}>Push Data</button>
			</div>
		);
	}
}

newuser.propTypes = {
	name:propTypes.string
}

export default newuser;