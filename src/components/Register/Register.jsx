import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {

    const [errorText, setErrorText] = useState("");
    const [seePassword, setSeePassword] = useState(false);

    const navigate = useNavigate();

    const {createUser} = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const picture = e.target.picture.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password, name, picture);

        setErrorText("");

        if(password.length < 6){
            setErrorText("Password should be at least 6 characters");
            return;
        }

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

        if(!regex.test(password)){
            setErrorText("At least one uppercase and one lowercase character required");
            return;
        }

        createUser(email, password)
        .then(result => {
            console.log(result.user)
            e.target.reset();
            navigate("/");
        })
        .catch(error => {
            console.log("Error", error.message)
            setErrorText(error.message);
        })
    }

    return (
        <div className="hero bg-base-200 h-[720px] md:min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Register</h1>
                </div>
                <div className="card bg-base-100 w-[500px] max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture URL</span>
                            </label>
                            <input name="picture" type="text" placeholder="Picture URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type={seePassword? "text" : "password"} placeholder="Password" className="input input-bordered" required />
                            <span onClick={() => setSeePassword(!seePassword)} className='btn btn-xs absolute right-4 top-12'>{seePassword? "See" : <><del>See</del></>}</span>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    {
                        errorText && <p className='text-center my-2 text-red-500'>{errorText}</p>
                    }
                    <p className='text-center mb-4'>Have an account? please <Link className='text-blue-500' to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;