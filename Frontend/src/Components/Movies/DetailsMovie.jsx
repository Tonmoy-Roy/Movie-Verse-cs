import { Link } from "react-router-dom";

const DetailsMovie = ({ movie = {} }) => {
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
                <div className="flex justify-between">
                    <div>
                        <p className='text-left'>Ratings : {movie.ratings}</p>
                    </div>
                    <div className="rating mb-5">
                        <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="3 star" defaultChecked />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                    </div>
                </div>
                <Link to={`/moviedetails/${movie._id}`}><button className="btn btn-neutral">View Details</button></Link>
            </div>
        </div>
    );
};

export default DetailsMovie;