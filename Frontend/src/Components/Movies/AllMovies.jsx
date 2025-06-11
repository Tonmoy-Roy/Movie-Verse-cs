import UseMovies from '../Hooks/UseMovies';
import DetailsMovie from './DetailsMovie';

const AllMovies = () => {
    const [movies] = UseMovies();
    return (
        <div>
            <p className='text-3xl uppercase'>all movies</p>
            <div className='md:grid grid-cols-3'>
                {
                    movies.map(movie => <DetailsMovie movie={movie}></DetailsMovie>)
                }
            </div>
        </div>
    );
};

export default AllMovies;