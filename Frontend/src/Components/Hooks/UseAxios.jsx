import axios from 'axios';
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/',
})
const UseAxios = () => {
    return axiosInstance;
};

export default UseAxios;