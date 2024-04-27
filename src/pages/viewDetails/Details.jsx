import { useLoaderData } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const Details = () => {
    const tourist = useLoaderData();
    const { name, country, location, description, averageCost, seasonality, travelTime, totalVisitorsPerYear, image } = tourist;
    return (
        <div className="animate__animated animate__zoomIn pl-5 pr-2">
            <div className=" text-center mb-5">
                <h1 className="text-4xl font-acma font-bold">{country}</h1>
            </div>
            <div className=" lg:flex gap-5">
                <div>
                    <figure><img className="lg:h-[500px] rounded-xl" src={image} alt="" /></figure>
                </div>
                <div className="lg:w-1/2 bg-emerald-100 rounded-xl p-5">
                    <Slide triggerOnce>
                        <h2 className="text-3xl font-acma mb-3 text-center underline underline-offset-8">{name}</h2>
                        <p className="px-5 mt-12">{description}</p>
                        <hr className="border-2 border-dashed my-3" />
                        <div className="lg:flex gap-40 mt-6 px-5">
                            <p><span className="font-acma mr-2">Average Cost:</span> {averageCost} $</p>
                            <p><span className="font-acma mr-2">Seasonality:</span> {seasonality}</p>
                        </div>
                        <div className="lg:flex gap-40 mt-6 px-5">
                            <p className="">
                                <span className="font-acma mr-2">Travel Time: </span> {travelTime}
                            </p>
                            <p className=""><span className="font-acma mr-2">Location: </span> {location}
                            </p>
                        </div>
                        <p className="mt-6 px-5"><span className="font-acma mr-2">Total Visitors Per Year:</span> {totalVisitorsPerYear}</p>
                    </Slide>

                    <Slide >
                        <p>I enter first...</p>
                        <p>...then comes my turn...</p>
                        <p>...and finally you see me!</p>
                    </Slide>

                </div>
            </div>
        </div>
    );
};

export default Details;