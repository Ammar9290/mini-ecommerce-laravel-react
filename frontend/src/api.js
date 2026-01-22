import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api', // Direct backend URL since proxy might be finicky in some dev envs
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export default api;
