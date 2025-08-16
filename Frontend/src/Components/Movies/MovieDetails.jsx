import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import UseAxios from "../Hooks/UseAxios";
import UseBookmark from "../Hooks/UseBookmark";

const MovieDetails = () => {
    const moviedata = useLoaderData();
    console.log(moviedata);
    const { user } = useContext(AuthContext);
    const axiosInstance = UseAxios();
    const [, refetch] = UseBookmark();

    function handleCart(moviedata) {
        if (!user || !user.email) {
            toast.error('Please login first !');
            return;
        }
        const bookmarkItem = {
            email: user.email,
            image: moviedata.image,
            name: moviedata.name,
            category: moviedata.category,
            published_date: moviedata.published_date,
            ratings: moviedata.ratings,
        }
        axiosInstance.post('/bookmarklist', bookmarkItem)
            .then(res => {
                console.log(res.data);
                toast.success(`${moviedata.name} Added to watchlist.`);
                refetch();
            })
            .catch(error => {
                console.log('ERROR', error.message);
            })
    }

    function handleTrailer() {
        if (!user || !user.email) {
            toast.error('Please login first !');
            return;
        }

    }

    function handleDownload() {
        if (!user || !user.email) {
            toast.error('Please login first !');
            return;
        }
    }

    return (
        <div>
            <div className="hero mb-24">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={moviedata.image}
                        className=" rounded-lg shadow-2xl mr-5 mt-4"
                    />
                    <div className="card-body order-4 border-red-600 md:w-[20vw]">
                        <h2 className="card-title text-3xl md:w-[20vw] mb-3">
                            {moviedata.name}
                        </h2>
                        <p className='text-left text-xl'>Category : {moviedata.category}</p>
                        <p className='text-left text-xl'>Released : {moviedata.published_date}</p>
                        <p></p>
                        <div className="md:flex justify-between mb-5">
                            <div>
                                <p className='text-left text-xl'>Ratings : {moviedata.ratings}/10</p>
                            </div>
                            <div className="rating ">
                                <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="3 star" defaultChecked />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            </div>
                        </div>
                        <p className="mb-5 text-left">{moviedata.details}</p>
                        <button className="btn btn-error" onClick={() => handleTrailer()}>Trailer</button>
                        <button className="btn btn-info" onClick={() => handleCart(moviedata)}>Add to Watchlist</button>
                        <button className="btn btn-success mb-24" onClick={() => handleDownload()}>Download</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;