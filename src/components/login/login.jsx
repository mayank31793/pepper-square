import React,{ Component } from 'react';
import axios from '../../axios-users';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

class user extends Component {
	constructor(props){
		super(props);
		this.state = {
			isLoggedIn:false,
			userID:'',
			name:'',
			email:'',
			picture:'',
			gname:'',
			gpicture:''
		}
	}	

	responseFacebook = response => {
		console.log(response)
		this.setState({isLoggedIn:true,name:response.name,picture:response.picture.data.url})
	}

	componentClicked = () => {
		console.log('clicked');
	}

	responseGoogle = response => {
		console.log(response);
		this.setState({googleName:response.profileObj.givenName,gpicture:response.profileObj.imageUrl})
	}

	render(){	

		let fbContent;

		if(this.state.isLoggedIn){
			fbContent = null;
		}
		else{
			fbContent=(
				<FacebookLogin
				    appId="394732927768812"
				    autoLoad={true}
				    fields="name,email,picture"
				    onClick={this.componentClicked}
				    callback={this.responseFacebook} />	
			);	    		
		}

		return(
			<div>
				{fbContent}
				<p>{this.state.name}</p>
				<img src={this.state.picture} />
				<p>{this.state.googleName}</p>
				<img src={this.state.gpicture} />
				<GoogleLogin
					clientId="341529182538-lut1n6vudrk7tc3hcglaff8q9n8na08j.apps.googleusercontent.com"
					buttonText="Login"
					onSuccess={this.responseGoogle}
					onFailure={this.responseGoogle}
				/>	
			</div>
		);
	}
}

export default user;

