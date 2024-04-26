import { useLoaderData } from "react-router-dom";
import Banner from "../components/banner/Banner";
import TouristsCard from "../components/touristsCard/TouristsCard";

const Home = () => {
    const tourists = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    tourists.map(tourist => <TouristsCard
                        key={tourist._id}
                        tourist={tourist}></TouristsCard>)
                }
            </div>
        </div>
    );
};

export default Home;