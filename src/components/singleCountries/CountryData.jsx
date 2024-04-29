import { useLoaderData } from "react-router-dom";
import SpotCountry from "./SpotCountry";

const CountryData = () => {
    const loadData = useLoaderData();
    console.log(loadData)
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                loadData?.map(tourist => <SpotCountry
                    key={tourist._id}
                    tourist={tourist}></SpotCountry>)
            }
            </div>
        </div>
    );
};

export default CountryData;