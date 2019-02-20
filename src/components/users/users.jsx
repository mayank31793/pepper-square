import React from 'react';

import './users.css';

const users = (props) => {
	return(
		<div className="users">
			<p>{props.id}</p>
			<b>{props.name}</b>
		</div>
	);
}

export default users;