import { Link } from "react-router-dom";

const Country = ({ card }) => {
    const { country, description, image } = card;
    return (
        <Link to="/allTourists">
            <div className="card bg-base-100 shadow-xl mx-5">
                <figure className="px-10 pt-10">
                    <img src={image} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{country}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </Link>

    );
};

export default Country;