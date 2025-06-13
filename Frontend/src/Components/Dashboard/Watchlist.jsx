import UseBookmark from "../Hooks/UseBookmark";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import UseAxios from "../Hooks/UseAxios";

const Watchlist = () => {

    const [bookmark, refetch] = UseBookmark();
    const axiosInstance = UseAxios();

    function handleDel(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/bookmarklist/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your food has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div>
            <div className="flex text-2xl justify-around">
                <p className="mr-5">Total Bookmark : {bookmark.length}</p>
            </div>
            <p className="divider"></p>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                             <th className="mr-5">Index</th>
                             <th className="mr-5"></th>
                            <th className="mr-5">Movies Name</th>
                            <th className="mr-5">Ratings</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookmark.map((items, index) => <tr>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="rounded-2xl w-16 h-16 md:w-24 md:h-20"> {/* Fixed units */}
                                                <img
                                                    className="w-full h-full object-cover"
                                                    src={items.image}
                                                    alt={items.name || "Product image"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="">
                                    {items.name}
                                    <br />
                                </td>
                                <td>{items.ratings}/10</td>
                                <th>
                                    <button onClick={() => handleDel(items._id)} className="btn btn-ghost text-2xl"><RiDeleteBin6Line /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Watchlist;