import axios from 'axios';

const instance = axios.create({
  baseTimeout: 30000,
});

export { instance as http };
