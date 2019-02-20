import axios from 'axios';

const instance = axios.create({
	baseURL:'https://test-9515d.firebaseio.com/'
});

export default instance;
