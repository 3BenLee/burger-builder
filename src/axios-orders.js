import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e4bd4.firebaseio.com/'
});

export default instance;