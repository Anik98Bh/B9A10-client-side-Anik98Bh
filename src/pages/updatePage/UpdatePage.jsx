import { useContext } from "react";
import { Slide } from "react-awesome-reveal";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../components/providers/AuthProvider";

const UpdatePage = () => {
    // const { user, } = useContext(AuthContext);
    const tourist = useLoaderData()
    const { _id, name,country, description, location, averageCost, seasonality,totalVisitorsPerYear, travelTime, image } = tourist;

    const handleUpdateTourists = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const image = form.image.value;
        const updatedTourists = { name, country, location, description, averageCost, seasonality, travelTime, totalVisitorsPerYear, image };

        console.log(updatedTourists);

        fetch(`https://b9a10-server-side-anik98-bh.vercel.app/tourists/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTourists),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success!',
                        text: ' Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="bg-[#F4F3F0] mt-8 py-5 animate__animated animate__fadeInUp">
            <Link to="/" className="flex items-center gap-2">
                <FaArrowLeft></FaArrowLeft><span className="text-2xl font-acma">Back to home</span>
            </Link>
            <div className="px-20">
                <h1 className="text-5xl font-acma text-center">Update Tourists</h1>
                <p className="text-center mt-4">Tourism is a social, cultural and economic phenomenon which entails the movement of people to countries <br />or places outside their usual environment for personal or business/professional purposes.</p>
                <Slide triggerOnce>
                    <form onSubmit={handleUpdateTourists} className="mt-6">
                        <div className="flex gap-9 mb-3">
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={name} placeholder="Enter tourists spot name" className="input input-bordered w-full" />
                            </div>
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">Country</span>
                                </label>
                                <select name="country" defaultValue={country} className="select select-bordered w-full">
                                    <option disabled selected>Select Country</option>
                                    <option> Bangladesh</option>
                                    <option> Thailand</option>
                                    <option> Indonesia</option>
                                    <option> Malaysia</option>
                                    <option> Vietnam</option>
                                    <option> Cambodia</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-9 mb-3">
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">Location</span>
                                </label>
                                <input type="text" name="location" defaultValue={location} placeholder="Enter location " className="input input-bordered w-full" />
                            </div>
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">Description</span>
                                </label>
                                <input type="text" name="description" defaultValue={description} placeholder="Enter description" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="flex gap-9 mb-3">
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">Average Cost</span>
                                </label>
                                <input type="text" name="averageCost" defaultValue={averageCost} placeholder="Enter average_cost" className="input input-bordered w-full" />
                            </div>
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">Seasonality</span>
                                </label>
                                <input type="text" name="seasonality" defaultValue={seasonality} placeholder="Enter seasonality summer/winter" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="flex gap-9 mb-3">
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">Travel Time</span>
                                </label>
                                <input type="text" name="travelTime" defaultValue={travelTime} placeholder="Enter travel_time days" className="input input-bordered w-full" />
                            </div>
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">Total Visitors Per Year</span>
                                </label>
                                <input type="text" name="totalVisitorsPerYear" defaultValue={totalVisitorsPerYear} placeholder="Enter total visitors" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Image</span>
                                </label>
                                <input type="text" name="image" defaultValue={image} placeholder="Enter image URL" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <button
                            className="btn btn-block bg-[#9aecbc] text-[#331A15] font-acma ">Update</button>
                    </form>
                </Slide>
            </div>
        </div>
    );
};

export default UpdatePage;