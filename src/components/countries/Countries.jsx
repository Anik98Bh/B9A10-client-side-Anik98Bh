import { useEffect, useState } from "react";
import Country from "../../components/countries/Country";

const Countries = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch('https://b9a10-server-side-anik98-bh.vercel.app/countries')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItem(data)
            })
    }, [])

    return (
        <div className="mt-20">
            <div>
                <h1 className="text-5xl font-acma font-bold text-center">Southeast Asia</h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5">
                {
                    item.map(card => <Country key={card._id}
                        card={card}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;