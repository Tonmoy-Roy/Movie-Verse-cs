
const Movie = ({ movie = {} }) => {
    return (
        <div className="card shadow-sm">
            <figure>
                <img
                    src={movie.image}
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