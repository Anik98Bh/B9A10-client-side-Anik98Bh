import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/providers/AuthProvider";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
    }, [user]);

    return (
        <div>
            {
                item.map(p => (
                    <div>
                        <h1>hello</h1>
                    </div>
                ))
            }
        </div>
    );
};

export default MyList;