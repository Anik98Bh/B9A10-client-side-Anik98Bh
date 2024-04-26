import 'animate.css';
import { AuthContext } from "../../components/providers/AuthProvider";
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, profileUpdate } = useContext(AuthContext);
    const [success, setSuccess] = useState('')
    const [registerError, setRegisterError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        setSuccess('');
        setRegisterError('');

       

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should be at least 1 UpperCase characters');
            return;
        }

            createUser(email, password)
                .then(result => {
                    console.log(result.user);
                    navigate(location?.state ? location.state : "/")
                    // setSuccess('User Created Successfully');
                    if(setSuccess){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Register has been successfully",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
    
                    if (result.user) {
                        profileUpdate({ displayName: name, photoURL: photo });
                    }

                })
                .catch(error => {
                    console.error(error);
                    setRegisterError('Please Give Correct Information', error.message);
                })

    }

    return (
        <div className="bg-red-50 py-3 rounded-xl animate__animated animate__zoomIn">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
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
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="password"
                        className="input input-bordered" required />
                    <span className="absolute top-12 left-3/4 ml-36 text-xl" onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </span>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            {
                registerError && <p className="text-red-700 font-bold text-center mt-2">{registerError}</p>
            }
            {
                success && <p className="text-green-700 font-bold text-center mt-2">{success}</p>
            }
            <p className="text-center mt-5">Already Have an Account ? Please <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
        </div>
    );
};

export default Register;