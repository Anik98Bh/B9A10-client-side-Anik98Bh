import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/providers/AuthProvider";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.userEmail}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
            console.log(user)
    }, [user]);

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default MyList;