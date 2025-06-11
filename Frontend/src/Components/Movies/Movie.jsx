import React from 'react';
import banner3 from "../../../src/assets/Home/jakob-owens-CiUR8zISX60-unsplash.jpg"

const Movie = ({ movie = {} }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={banner3}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {movie.name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='text-left'>Ratings : {movie.ratings}</p>
            </div>
        </div>
    );
};

export default Movie;