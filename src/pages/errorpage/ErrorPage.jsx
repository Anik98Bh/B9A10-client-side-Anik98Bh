import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen"  style={{backgroundImage: 'url(https://i.postimg.cc/ht8q77VR/404.gif)'}}>
           <Link to="/" className="btn btn-primary mt-96 -mb-40">Go Back to Home</Link>
        </div>
    );
};

export default ErrorPage;