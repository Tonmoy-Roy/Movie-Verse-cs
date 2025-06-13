import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import banner from "../../assets/Shared/declan-sun--ROm7yw7PqI-unsplash.jpg"
import action from "../../assets/Home/mateusz-waclawek-t2b2svMf8ek-unsplash.jpg"
import drama from "../../assets/Home/drama.jpg"
import crime from "../../assets/Home/crimes.jpg"
import thriller from "../../assets/Home/thriller.jpg"
import romance from "../../assets/Home/romance.jpg"
import animation from "../../assets/Home/animation.jpg"
import fiction from "../../assets/Home/fiction.jpg"
import fantasy from "../../assets/Home/fantasy.jpg"
import Movie from './Movie';
import UseMovies from '../Hooks/UseMovies';
import { Link } from 'react-router-dom';

const Movies = () => {

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
        <div>
            <Helmet><title>Movies</title></Helmet>
            <Cover image={banner} title={"ALL MOVIES"}></Cover>
            <div className="text-right">
                <Link to="/allmovies" className="text-red-700 underline">See All</Link>
            </div>
            <div className='md:grid grid-cols-3'>
                {
                    movies.slice(0, 6).map(movie => <Movie movie={movie}></Movie>)
                }
            </div>
            <p className='divider'></p>

            <Cover image={action} title={"Action"}></Cover>
            <div className="text-right">
                <Link to="/categorymovies" className="text-red-700 underline">See All</Link>
            </div>
            <div className='md:grid grid-cols-3'>
                {
                    actions.slice(0, 6).map(movie => <Movie movie={movie}></Movie>)
                }
            </div>
            <p className='divider'></p>

            <Cover image={drama} title={"dramas"}></Cover>
            <div className="text-right">
                <Link to="/categorymovies" className="text-red-700 underline">See All</Link>
            </div>
            <div className='md:grid grid-cols-3'>
                {
                    dramas.slice(0, 6).map(movie => <Movie movie={movie}></Movie>)
                }
            </div>
            <p className='divider'></p>

            <Cover image={crime} title={"Crimes"}></Cover>
            <div className="text-right">
                <Link to="/categorymovies" className="text-red-700 underline">See All</Link>
            </div>
            <div className='md:grid grid-cols-3'>
                {
                    crimes.slice(0, 6).map(movie => <Movie movie={movie}></Movie>)
                }
            </div>
            <p className='divider'></p>

            <Cover image={thriller} title={"thriller"}></Cover>
            <div className="text-right">
                <Link to="/categorymovies" className="text-red-700 underline">See All</Link>
            </div>
            <div className='md:grid grid-cols-3'>
                {
                    thrillers.slice(0, 6).map(movie => <Movie movie={movie}></Movie>)
                }
            </div>
            <p className='divider'></p>

            <Cover image={romance} title={"romance"}></Cover>
            <div className="text-right">
                <Link to="/categorymovies" className="text-red-700 underline">See All</Link>
            </div>
            <div className='md:grid grid-cols-3'>
                {
                    romances.slice(0, 6).map(movie => <Movie movie={movie}></Movie>)
                }
            </div>
            <p className='divider'></p>

            <Cover image={animation} title={"animation"}></Cover>
            <div className="text-right">
                <Link to="/categorymovies" className="text-red-700 underline">See All</Link>
            </div>
            <div className='md:grid grid-cols-3'>
                {
                    animations.slice(0, 6).map(movie => <Movie movie={movie}></Movie>)
                }
            </div>
            <p className='divider'></p>

            <Cover image={fiction} title={"fiction"}></Cover>
            <div className="text-right">
                <Link to="/categorymovies" className="text-red-700 underline">See All</Link>
            </div>
            <div className='md:grid grid-cols-3'>
                {
                    fictions.slice(0, 6).map(movie => <Movie movie={movie}></Movie>)
                }
            </div>
            <p className='divider'></p>

            <Cover image={fantasy} title={"fanatasy"}></Cover>
            <div className="text-right">
                <Link to="/categorymovies" className="text-red-700 underline">See All</Link>
            </div>
            <div className='md:grid grid-cols-3'>
                {
                    fanatasy.slice(0, 6).map(movie => <Movie movie={movie}></Movie>)
                }
            </div>
            <p className='divider'></p>
        </div>
    );
};

export default Movies;