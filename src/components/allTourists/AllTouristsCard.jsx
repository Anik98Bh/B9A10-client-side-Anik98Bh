import { Link } from "react-router-dom";

const AllTouristsCard = ({ tourist }) => {
    const { _id, name, totalVisitorsPerYear, averageCost, seasonality, travelTime, image } = tourist;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="px-10 mt-3">
                <h2 className=" text-center text-2xl font-acma ">{name}</h2>
                <div className="flex gap-10 mt-5">
                    <p><span className="font-acma">Average Cost:</span> {averageCost}</p>
                    <p><span className="font-acma">Seasonality:</span> {seasonality}</p>
                </div>
                <div className="flex gap-10 mt-3 mb-20">
                    <p><span className="font-acma">Travel Time:</span> {travelTime}</p>
                    <p><span className="font-acma">Total Visitors Per Year:</span> {totalVisitorsPerYear}</p>
                </div>
                <div className="absolute bottom-0 left-0 ml-6 pb-3 pl-5">
                    <Link to={`/tourists/${_id}`}>
                        <button className="btn bg-[#28B463] text-white font-bold">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllTouristsCard;