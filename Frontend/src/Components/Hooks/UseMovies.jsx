import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const UseMovies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('movieverse.json')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])
    return [movies];
};

export default UseMovies;