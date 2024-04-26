import { useLoaderData } from "react-router-dom";
import AllTouristsCard from "./AllTouristsCard";

const AllTourists = () => {
    const tourists = useLoaderData();

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {
                tourists.map(tourist => <AllTouristsCard
                    key={tourist._id}
                    tourist={tourist}></AllTouristsCard>)
            }
        </div>
    );
};

export default AllTourists;