import axios from 'axios';

const request = axios.create({
    // baseURL: 'http://localhost:3000/todos',
    baseURL:'http://127.0.0.1:8000/todoInfo/',
})

export default request


