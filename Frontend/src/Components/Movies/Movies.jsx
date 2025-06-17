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
import { motion } from "framer-motion";


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
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Cover image={banner} title={"ALL MOVIES"} />
                <div className="text-right">
                    <Link to="/allmovies" className="text-red-700 underline">See All</Link>
                </div>
                <div className='md:grid grid-cols-3 gap-4'>
                    {
                        movies.slice(0, 6).map(movie => (
                            <motion.div
                                key={movie.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Movie movie={movie} />
                            </motion.div>
                        ))
                    }
                </div>
            </motion.div>

            <p className='divider'></p>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Cover image={action} title={"Action"}></Cover>
                <div className="text-right">
                    <Link to="/categorymovies" className="text-red-700 underline">See All</Link>
                </div>
                <div className='md:grid grid-cols-3'>
                    {
                        actions.slice(0, 6).map(movie => (<motion.div
                            key={movie.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            viewport={{ once: true }}
                        > <Movie movie={movie}></Movie>
                        </motion.div>
                        ))

                    }
                </div>
            </motion.div>

            <p className='divider'></p>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Cover image={drama} title={"dramas"}></Cover>
                <div className="text-right">
                    <Link to="/categorymovies" className="text-red-700 underline">See All</Link>
                </div>
                <div className='md:grid grid-cols-3'>
                    {
                        dramas.slice(0, 6).map(movie => (<motion.div
                            key={movie.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            viewport={{ once: true }}
                        > <Movie movie={movie}></Movie>
                        </motion.div>
                        ))

                    }
                </div>
            </motion.div>

            <p className='divider'></p>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Cover image={crime} title={"Crimes"}></Cover>
                <div className="text-right">
                    <Link to="/categorymovies" className="text-red-700 underline">See All</Link>
                </div>
                <div className='md:grid grid-cols-3'>
                    {
                        crimes.slice(0, 6).map(movie => (<motion.div
                            key={movie.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            viewport={{ once: true }}
                        > <Movie movie={movie}></Movie>
                        </motion.div>
                        ))

                    }
                </div>
            </motion.div>

            <p className='divider'></p>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Cover image={thriller} title={"thriller"}></Cover>
                <div className="text-right">
                    <Link to="/categorymovies" className="text-red-700 underline">See All</Link>
                </div>
                <div className='md:grid grid-cols-3'>
                    {
                        thrillers.slice(0, 6).map(movie => (<motion.div
                            key={movie.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            viewport={{ once: true }}
                        > <Movie movie={movie}></Movie>
                        </motion.div>
                        ))

                    }
                </div>
            </motion.div>

            <p className='divider'></p>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Cover image={romance} title={"romance"}></Cover>
                <div className="text-right">
                    <Link to="/categorymovies" className="text-red-700 underline">See All</Link>
                </div>
                <div className='md:grid grid-cols-3'>
                    {
                        romances.slice(0, 6).map(movie => (<motion.div
                            key={movie.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            viewport={{ once: true }}
                        > <Movie movie={movie}></Movie>
                        </motion.div>
                        ))

                    }
                </div>
            </motion.div>

            <p className='divider'></p>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Cover image={animation} title={"animation"}></Cover>
                <div className="text-right">
                    <Link to="/categorymovies" className="text-red-700 underline">See All</Link>
                </div>
                <div className='md:grid grid-cols-3'>
                    {
                        animations.slice(0, 6).map(movie => (<motion.div
                            key={movie.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            viewport={{ once: true }}
                        > <Movie movie={movie}></Movie>
                        </motion.div>
                        ))

                    }
                </div>
            </motion.div>

            <p className='divider'></p>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Cover image={fiction} title={"fiction"}></Cover>
                <div className="text-right">
                    <Link to="/categorymovies" className="text-red-700 underline">See All</Link>
                </div>
                <div className='md:grid grid-cols-3'>
                    {
                        fictions.slice(0, 6).map(movie => (<motion.div
                            key={movie.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            viewport={{ once: true }}
                        > <Movie movie={movie}></Movie>
                        </motion.div>
                        ))

                    }
                </div>
            </motion.div>

            <p className='divider'></p>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Cover image={fantasy} title={"fanatasy"}></Cover>
                <div className="text-right">
                    <Link to="/categorymovies" className="text-red-700 underline">See All</Link>
                </div>
                <div className='md:grid grid-cols-3'>
                    {
                        fanatasy.slice(0, 6).map(movie => (<motion.div
                            key={movie.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            viewport={{ once: true }}
                        > <Movie movie={movie}></Movie>
                        </motion.div>
                        ))

                    }
                </div>
            </motion.div>
            <p className='divider'></p>
        </div>
    );
};

export default Movies;