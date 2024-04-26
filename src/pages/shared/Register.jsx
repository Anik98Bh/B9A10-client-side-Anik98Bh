import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="bg-red-50 py-3 rounded-xl animate__animated animate__zoomIn">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <form className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="photoURL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            
            <p className="text-center mt-5">Already Have an Account ? Please <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
        </div>
    );
};

export default Register;