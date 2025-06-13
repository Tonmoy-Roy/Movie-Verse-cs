import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import UseAxios from '../Hooks/UseAxios';
import { useNavigate } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { Helmet } from 'react-helmet-async';



const Register = () => {
    const axiosInstance = UseAxios();
    const { createUser } = useContext(AuthContext);
    const [signuperror, setSignuperror] = useState('');
    const { updateUser } = useContext(AuthContext);
    const { signwithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();


    function signUp(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const users = { name, photo, email, password };

        createUser(email, password)
        axiosInstance.post('/userslist', users)
            .then(res => {
                console.log(res.data);
                updateUser({ displayName: name, photoURL: photo });
            })
            .catch((error) => {
                setSignuperror(true);
                console.log('Error', error.message);
            })
    }

    function handleGoogle(e) {
        e.preventDefault();
        signwithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <Helmet><title>Registration</title></Helmet>
            <p className='font-bold text-3xl text-center mb-5'>Register Your Account</p>
            <form onSubmit={signUp}>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse md:w-[50vw]">
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                {
                                    signuperror && <p className='text-red-600 font-bold'>Please enter correct information !</p>
                                }
                                <fieldset className="fieldset">
                                    <div className='mx-auto'>
                                        <button className='btn mb-2 md:w-[15vw]'><FaFacebook className='text-2xl' />Continue With Facebook</button>
                                        <button onClick={handleGoogle} className='btn mb-2 md:w-[15vw]'><FcGoogle className='text-2xl' />Continue With Google</button>
                                        <button className='btn md:w-[15vw] mb-2'><AiFillGithub className='text-2xl' />Continue With Github</button>
                                    </div>
                                    <p className='font-bold'>OR</p>
                                    <label className="label text-black">Name</label>
                                    <input name="name" type="text" className="input" placeholder="Email" required />
                                    <label className="label text-black">Photo URL</label>
                                    <input name="photo" type="text" className="input" placeholder="Photo URL" required />
                                    <label className="label text-black">Email</label>
                                    <input name="email" type="email" className="input" placeholder="Email" required />
                                    <label className="label text-black">Password</label>
                                    <input name="password" type="password" className="input" placeholder="Password" required />
                                    <button className="btn btn-primary mt-4">Sign Up</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;