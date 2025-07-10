import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import UseMovies from '../Hooks/UseMovies';
import DetailsMovie from './DetailsMovie';
import { IoIosSearch } from "react-icons/io";

const AllMovies = () => {
    const [movies, loadingMovies] = UseMovies();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);


    useEffect(() => {
        if (!loadingMovies) {
            setFilteredMovies(movies);
        }
    }, [movies, loadingMovies]);


    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const term = searchTerm.toLowerCase();
            const results = movies.filter(movie =>
                movie.name.toLowerCase().includes(term)
            );
            setFilteredMovies(results);
        }
    };

    return (
        <div className='mt-5'>
            <Helmet><title>All Movies</title></Helmet>

            <div className="flex items-center justify-between flex-wrap">
                {/* Centered Title */}
                <div className="w-full md:w-auto text-center flex-1">
                    <p className="font-bold text-3xl uppercase mt-10">All Movies</p>
                </div>

                {/* Search Input aligned right */}
                <div className="ml-auto mt-4 md:mt-0">
                    <div className="relative">
                        <input
                            name="search"
                            type="text"
                            className="input w-full max-w-xs pl-10 pr-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-pink-300"
                            placeholder="Search Movie..."
                            onKeyDown={handleSearch}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            value={searchTerm}
                        />
                        <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-xl" />
                    </div>
                </div>
            </div>


            <div className='md:grid grid-cols-3 mt-4 gap-4'>
                {loadingMovies ? (
                    <div className="col-span-3 text-center mt-10">
                        <span className="loading loading-spinner loading-lg text-red-500"></span>
                    </div>
                ) : filteredMovies.length > 0 ? (
                    filteredMovies.map(movie => (
                        <DetailsMovie key={movie._id} movie={movie} />
                    ))
                ) : (
                    <p className="col-span-3 text-center mt-10 text-red-600">No movies found.</p>
                )}
            </div>


        </div>
    );
};

export default AllMovies;
