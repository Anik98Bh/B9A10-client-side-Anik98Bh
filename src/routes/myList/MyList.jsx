import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/providers/AuthProvider";
import ListCard from "./ListCard";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch(`https://b9a10-server-side-anik98-bh.vercel.app/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItem(data)
            })
    }, [user]);

    return (
        <div>
            {
                item.map(tourist => <ListCard
                    key={tourist._id}
                    item={item}
                    setItem={setItem}
                    tourist={tourist}></ListCard>)
            }
        </div>
    );
};

export default MyList;