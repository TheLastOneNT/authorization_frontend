import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8001' : 'https://inv.linkingapimid.com',
    headers: {'Content-Type': 'application/json',},
});

export default api;

