import { useContext } from "react";
import { AuthContext } from "../../components/providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";


const Login = () => {
    const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(result => {
                console.log(result.user)

                navigate(location?.state ? location.state : "/")
                if(result.user){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Login has been successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }

            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/")
                if(result.user){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Login has been successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/")
                if(result.user){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Login has been successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="bg-green-50 py-3 rounded-xl animate__animated animate__zoomIn">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary text-white">Login</button>
                </div>
                <div className="mt-4">
                    <p className="mt-6 text-xl font-bold text-center">----------------- OR ---------------</p>
                    <div className="flex justify-evenly mt-4">
                        <button onClick={handleGoogleLogin} className="btn btn-secondary text-white"><FaGoogle className="text-xl"></FaGoogle> Continue with Google</button>
                        <button onClick={handleGithubLogin} className="btn btn-primary text-white"><FaGithub className="text-2xl"></FaGithub> Continue with Github</button>
                    </div>
                </div>
            </form>
            <p className="text-center mt-5">New to here? Please <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
        </div>
    );
};

export default Login;