import { Slide } from "react-awesome-reveal";

const Info = () => {
    return (
        <Slide triggerOnce>
            <div className="px-20 mt-20 bg-gray-100 py-5">
                <div className="">
                    <h1 className="text-5xl font-acma text-center">World Travel & Tourism Council (WTTC) represents the Travel & <br /> Tourism sector globally</h1>
                </div>
                <div className="mt-5">
                    <p className="font-acma">For over 30 years, WTTC has conducted research on the economic impact of Travel & Tourism in 185 countries and issues such as overcrowding, taxation, policy-making, and many others to raise awareness of the importance of the Travel & Tourism sector as one of the world’s largest economic sectors.</p><br />
                    <p>As a non-profit membership-based organisation, our members and partners are the core of our organisation and include over 200 CEOs, Chairpersons, and Presidents of the world’s leading Travel & Tourism companies from all geographies and industries.  </p>
                </div>
                <button className="btn lg:ml-80 bg-[#cf5dbc] w-1/2 mt-5 text-white hover:bg-red-400">Become a Member</button>
            </div>
        </Slide>
    );
};

export default Info;