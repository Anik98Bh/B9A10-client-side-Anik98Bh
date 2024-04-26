import { Link } from "react-router-dom";

const TouristsCard = ({ tourist }) => {
    const { _id, name, country, location, averageCost, seasonality, travelTime, image } = tourist;

    return (
        <div className="card bg-base-100 shadow-xl mb-3 hover:bg-violet-100 active:bg-violet-100 focus:outline-none focus:ring focus:ring-violet-300 animate__animated animate__zoomIn animate__delay-2s">
            <h1 className="text-center text-3xl font-extrabold py-5">{country}</h1>
            <figure className="px-4 py-2"><img className="rounded-xl" src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="flex justify-between font-semibold mb-5">
                    <p>Location: {location}</p>
                    <p>Seasonality: {seasonality}</p>
                </div>
                <div className="flex justify-between font-semibold mb-14">
                    <p>Average Cost: {averageCost}</p>
                    <p>Travel Time: {travelTime}</p>
                </div>
                <div className="absolute bottom-0 left-0 ml-6 pb-3">
                    <Link to={`/tourists/${_id}`}>
                        <button className="btn bg-[#28B463] text-white font-bold">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TouristsCard;