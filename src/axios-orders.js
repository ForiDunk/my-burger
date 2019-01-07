import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fori-my-burger.firebaseio.com'
});

export default instance;