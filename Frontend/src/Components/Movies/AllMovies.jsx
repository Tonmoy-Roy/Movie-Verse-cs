import { Helmet } from 'react-helmet-async';
import UseMovies from '../Hooks/UseMovies';
import DetailsMovie from './DetailsMovie';

const AllMovies = () => {
    const [movies] = UseMovies();
    return (
        <div className='mt-5'>
            <Helmet><title>All Movies</title></Helmet>
            <p className='font-bold text-3xl uppercase'>all movies</p>
            <div className='md:grid grid-cols-3'>
                {
                    movies.map(movie => <DetailsMovie movie={movie}></DetailsMovie>)
                }
            </div>
        </div>
    );
};

export default AllMovies;