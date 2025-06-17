import { useEffect } from 'react';
import { useState } from 'react';

const UseMovies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => { 
        fetch('https://movieverse-tan.vercel.app/movielist/')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])
    return [movies];
};

export default UseMovies;