import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
    const moviedata = useLoaderData();
    console.log(moviedata);
    return (
        <div>
            <div className="hero bg-base-200 mb-24">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={moviedata.image}
                        className="max-w-sm rounded-lg shadow-2xl mr-5"
                    />
                    <div className="card-body order-4 border-red-600 md:w-[20vw]">
                        <h2 className="card-title text-3xl md:w-[20vw] mb-3">
                            {moviedata.name}
                        </h2>
                        <p className='text-left text-xl'>Category : {moviedata.category}</p>
                        <p className='text-left text-xl'>Released : {moviedata.published_date}</p>
                        <p></p>
                        <div className="flex justify-between mb-5">
                            <div>
                                <p className='text-left text-xl'>Ratings : {moviedata.ratings}/10</p>
                            </div>
                            <div className="rating">
                                <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="3 star" defaultChecked />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            </div>
                        </div>
                        <p className="mb-5 text-left">{moviedata.details}</p>
                        <button className="btn btn-neutral">Add to Watchlist</button>
                        <button className="btn btn-success mb-24">Download</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;