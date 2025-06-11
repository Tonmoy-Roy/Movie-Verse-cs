import UseMovies from '../Hooks/UseMovies';
import DetailsMovie from './DetailsMovie';

const CategoryMovies = () => {
    const [movies] = UseMovies();
    const actions = movies.filter(items => items.category === 'Action')
    const dramas = movies.filter(items => items.category === 'Drama')
    const comedys = movies.filter(items => items.category === 'Comedy')
    const thrillers = movies.filter(items => items.category === 'Thriller')
    const romances = movies.filter(items => items.category === 'Romance')
    const documentarys = movies.filter(items => items.category === 'Documentary')
    const fictions = movies.filter(items => items.category === 'Sci-Fi')
    const fanatasy = movies.filter(items => items.category === 'Fantasy')

    return (
        <div>
            <p className='font-bold text-3xl mb-2'>Category : Action</p>
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

            <p className='font-bold text-3xl mb-2'>Category : Comedy</p>
            <div className='md:grid grid-cols-3'>
                {
                    comedys.map(movie => <DetailsMovie movie={movie}></DetailsMovie>)
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

            <p className='font-bold text-3xl mb-2'>Category : Documentary</p>
            <div className='md:grid grid-cols-3'>
                {
                    documentarys.map(movie => <DetailsMovie movie={movie}></DetailsMovie>)
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