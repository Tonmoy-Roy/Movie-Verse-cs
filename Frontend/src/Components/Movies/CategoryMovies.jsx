import { Helmet } from 'react-helmet-async';
import UseMovies from '../Hooks/UseMovies';
import DetailsMovie from './DetailsMovie';

const CategoryMovies = () => {
    const [movies] = UseMovies();
    const actions = movies.filter(items => items.category === 'Action')
    const dramas = movies.filter(items => items.category === 'Drama')
    const crimes = movies.filter(items => items.category === 'Crime')
    const thrillers = movies.filter(items => items.category === 'Thriller')
    const romances = movies.filter(items => items.category === 'Romance')
    const animations = movies.filter(items => items.category === 'Animation')
    const fictions = movies.filter(items => items.category === 'Sci-Fi')
    const fanatasy = movies.filter(items => items.category === 'Fantasy')

    return (
        <div className='mt-5'>
            <Helmet><title>Category Movies</title></Helmet>
            <p className='font-bold text-3xl mb-2 mt-10'>Category : Action</p>
            <div className='md:grid grid-cols-3'>
                {
                    actions.map(movie => <DetailsMovie movie={movie}></DetailsMovie>)
                }
            </div>
            <p className='divider'></p>

            <p className='font-bold text-3xl mb-2'>Category : Drama</p>
            <div className='md:grid grid-cols-3'>
                {
                    dramas.map(movie => <DetailsMovie movie={movie}></DetailsMovie>)
                }
            </div>
            <p className='divider'></p>

            <p className='font-bold text-3xl mb-2'>Category : Crimes</p>
            <div className='md:grid grid-cols-3'>
                {
                    crimes.map(movie => <DetailsMovie movie={movie}></DetailsMovie>)
                }
            </div>
            <p className='divider'></p>

            <p className='font-bold text-3xl mb-2'>Category : Thriller</p>
            <div className='md:grid grid-cols-3'>
                {
                    thrillers.map(movie => <DetailsMovie movie={movie}></DetailsMovie>)
                }
            </div>
            <p className='divider'></p>

            <p className='font-bold text-3xl mb-2'>Category : Romance</p>
            <div className='md:grid grid-cols-3'>
                {
                    romances.map(movie => <DetailsMovie movie={movie}></DetailsMovie>)
                }
            </div>
            <p className='divider'></p>

            <p className='font-bold text-3xl mb-2'>Category : Animation</p>
            <div className='md:grid grid-cols-3'>
                {
                    animations.map(movie => <DetailsMovie movie={movie}></DetailsMovie>)
                }
            </div>
            <p className='divider'></p>

            <p className='font-bold text-3xl mb-2'>Category : Sci-Fi</p>
            <div className='md:grid grid-cols-3'>
                {
                    fictions.map(movie => <DetailsMovie movie={movie}></DetailsMovie>)
                }
            </div>
            <p className='divider'></p>

            <p className='font-bold text-3xl mb-2'>Category : Fantasy</p>
            <div className='md:grid grid-cols-3'>
                {
                    fanatasy.map(movie => <DetailsMovie movie={movie}></DetailsMovie>)
                }
            </div>
            <p className='divider'></p>
        </div>
    );
};

export default CategoryMovies;