
const DetailsMovie = ({movie={}}) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src={movie.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {movie.name}
                </h2>
                <p className='text-left'>Category : {movie.category}</p>
                <p className='text-left'>Ratings : {movie.ratings}</p>
                <p className='text-left'>{movie.details}</p>
                <p className='text-left'>Released : {movie.published_date}</p>
            </div>
        </div>
    );
};

export default DetailsMovie;