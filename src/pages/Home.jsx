import { useLoaderData } from "react-router-dom";
import Banner from "../components/banner/Banner";
import TouristsCard from "../components/touristsCard/TouristsCard";
import { useState } from "react";
import Info from "../components/info/Info";
import AskQuestion from "../components/askQuestion/AskQuestion";

const Home = () => {
    const tourists = useLoaderData();
    const [dataLength,setDataLength]=useState(6);

    return (
        <div>
            <Banner></Banner>
            <div className="mt-16 mb-5">
                <h1 className="text-5xl font-acma text-center">Tourists Spots</h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    tourists.slice(0,dataLength).map(tourist => <TouristsCard
                        key={tourist._id}
                        tourist={tourist}></TouristsCard>)
                }
            </div>
            <Info></Info>
            <AskQuestion></AskQuestion>
        </div>
    );
};

export default Home;