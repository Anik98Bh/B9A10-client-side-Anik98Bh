import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const SpotCountry = ({ tourist }) => {
    const { _id, name, country, description, location, averageCost, seasonality, image } = tourist;

    return (
        <div className="card bg-base-100 shadow-xl animate__animated animate__slideInLeft">
            <h1 className="text-center text-3xl font-extrabold py-5">{country}</h1>
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="px-10 mt-3">
                <Slide triggerOnce delay={1000}>
                    <h2 className=" text-center text-2xl font-acma ">{name}</h2>
                    <p className="mt-5">{description}</p>
                    <div className="flex gap-8 mt-5">
                        <p><span className="font-acma">Average Cost:</span> {averageCost} $</p>
                        <p><span className="font-acma">Seasonality:</span> {seasonality}</p>
                    </div>
                    <p className="mt-5 mb-20"><span className="font-acma">Location:</span> {location}</p>
                </Slide>
                <div className="absolute bottom-0 left-0 ml-6 pb-3 pl-5">
                    <Link to={`/tourists/${_id}`}>
                        <button className="btn bg-[#28B463] text-white font-bold">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SpotCountry;