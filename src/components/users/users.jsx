import React from 'react';

import './users.css';

const users = (props) => {
	return(
		<div className="users">
			<b>{props.name}</b>
		</div>
	);
}

export default users;