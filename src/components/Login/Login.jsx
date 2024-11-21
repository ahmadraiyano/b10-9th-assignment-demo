import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const [errorText, setErrorText] = useState("");
    const [seePassword, setSeePassword] = useState(false);

    const navigate = useNavigate();

    const {signInUser, signInWithGoogle} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        setErrorText("");

        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            e.target.reset();
            navigate("/");
        })
        .catch(error => {
            console.log("Error", error.message)
            setErrorText(error.message);
        })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
            navigate("/");
        })
        .catch(error => console.log("Error", error.message))
    }
    return (
        <div className="hero bg-base-200 h-[720px] md:min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Login</h1>
                </div>
                <div className="card bg-base-100 w-[500px] max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type={seePassword? "text" : "password"} placeholder="password" className="input input-bordered" required />
                            <button onClick={() => setSeePassword(!seePassword)} className='btn btn-xs absolute right-4 top-12'>{seePassword? "See" : <><del>See</del></>}</button>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {
                        errorText && <p className='text-center my-2 text-red-500'>Invalid email or password</p>
                    }
                    <p className='text-center mb-4'>Don't have an account? please <Link className='text-blue-500' to="/register">Register</Link></p>
                    <p className='text-center mb-4'>
                        <button onClick={handleGoogleSignIn} className='btn'>Login with google</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;