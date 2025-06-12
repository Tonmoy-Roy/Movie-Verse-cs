import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
    const moviedata = useLoaderData();
    console.log(moviedata);
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={moviedata.image}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="card-body">
                    <h2 className="card-title">
                        {moviedata.name}
                    </h2>
                    <p className='text-left'>Category : {moviedata.category}</p>
                    <div className="flex justify-between">
                        <div>
                            <p className='text-left'>Ratings : {moviedata.ratings}</p>
                        </div>
                        <div className="rating">
                            <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                            <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="3 star" defaultChecked />
                            <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                        </div>
                    </div>
                    <button className="btn btn-neutral">Add to Watchlist</button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;