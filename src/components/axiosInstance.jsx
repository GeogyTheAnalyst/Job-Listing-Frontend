import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000' // Adjust this to your Flask backend URL
});

export default axiosInstance;
