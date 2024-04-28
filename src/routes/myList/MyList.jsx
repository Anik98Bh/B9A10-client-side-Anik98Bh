import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/providers/AuthProvider";
import ListCard from "./ListCard";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
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
                    tourist={tourist}></ListCard>)
            }
        </div>
    );
};

export default MyList;