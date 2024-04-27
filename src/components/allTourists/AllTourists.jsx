import { useLoaderData } from "react-router-dom";
import AllTouristsCard from "./AllTouristsCard";
import { FaArrowDown19, FaArrowDown91 } from "react-icons/fa6";
import { useState } from "react";

const AllTourists = () => {
    const tourists = useLoaderData();
    const [allTourists,setAllTourists]=useState([...tourists]);

    const lowToHigh=()=>{
        const sorted=[...tourists].sort((a,b)=>a.averageCost-b.averageCost);
        setAllTourists(sorted);
    }
    const highToLow=()=>{
        const sorted=[...tourists].sort((a,b)=>b.averageCost-a.averageCost);
        setAllTourists(sorted);
    }

    return (
        <div>
            <div className="flex justify-end me-12">
                <details className="dropdown">
                    <summary className="m-1 btn">Sort by</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={lowToHigh}><a>Price: <FaArrowDown19></FaArrowDown19></a></li>
                        <li onClick={highToLow}><a>Price: <FaArrowDown91></FaArrowDown91></a></li>
                    </ul>
                </details>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    allTourists.map(tourist => <AllTouristsCard
                        key={tourist._id}
                        tourist={tourist}></AllTouristsCard>)
                }
            </div>
        </div>
    );
};

export default AllTourists;