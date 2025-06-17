import axios from 'axios';
export const axiosInstance = axios.create({
    baseURL: 'https://movieverse-tan.vercel.app/',
})
const UseAxios = () => {
    return axiosInstance;
};

export default UseAxios;