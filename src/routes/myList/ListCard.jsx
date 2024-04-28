import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ListCard = ({ tourist }) => {
    const { _id, name, country, location, description, averageCost, seasonality, travelTime, totalVisitorsPerYear, image } = tourist;

    const handleDelete = _id => {
        console.log(_id)
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
                fetch(`http://localhost:5000/tourists/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tourist Spot has been deleted.",
                                icon: "success"
                            });
                            // const remaining = coffees.filter(cof => cof._id !== _id);
                            // setCoffees(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="card card-side h-96 w-4/5 bg-base-100 shadow-xl mb-20 py-10 pr-5">
            <figure className="p-10"> <img className="rounded-tl " src={image} alt="" /></figure>
            <div className="  justify-between w-full">
                <div>
                    <h2 className="text-3xl font-acma">Country: {country}</h2>
                    <h2 className="text-xl font-acma mt-2">Name: {name}</h2>
                    <p className="mt-2">{description}</p>
                    <p className="mt-2">
                        <span className="font-acma mr-2">Seasonality:</span> {seasonality}
                    </p>
                    <p className="mt-2">
                        <span className="font-acma mr-2">Average Cost:</span> {averageCost} $
                    </p>
                </div>
                <div className="card-actions gap-20 mt-4">
                    <Link to={`updateTourists/${_id}`}>
                        <button className="btn bg-[#28B463] text-white font-acma">Update</button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn bg-orange-500 font-bold">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ListCard;