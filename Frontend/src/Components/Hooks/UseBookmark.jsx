import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { axiosInstance } from './UseAxios';
import { useQuery } from '@tanstack/react-query';

const UseBookmark = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: bookmark = [] } = useQuery({
        queryKey: ['bookmark', user?.email],
        queryFn: async () => {
            const res = await axiosInstance.get(`/bookmark?email=${user.email}`); 
            return res.data; // specific email jacche se hisebe bookmark items dekhacche.
        }
    });
    return [bookmark, refetch];
};

export default UseBookmark;