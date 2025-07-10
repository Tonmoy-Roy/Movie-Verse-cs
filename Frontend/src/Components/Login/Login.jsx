import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import loginimg from "../../assets/Animation - 1750139305140.json"
import Lottie from 'lottie-react';

const Login = () => {
    const { signinUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error1, setError1] = useState('');

    function login(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signinUser(email, password)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                setError1(true);
                console.log('Error', error.message);
            })

    }
    return (
        <div>
            <Helmet><title>Login</title></Helmet>

            <p className='font-bold text-3xl text-center mb-5 mt-10'>Login Now</p>
            <div className='md:flex'>
                <div>
                    <Lottie animationData={loginimg}></Lottie>
                </div>
                <form onSubmit={login}>
                    <div className="hero bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse md:w-[20vw]">
                            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                <div className="card-body md:h-[50vh]">
                                    <fieldset className="fieldset">
                                        {
                                            error1 && <p className='text-red-600'>Please enter correct Email & Password !</p>
                                        }
                                        <label className="label">Email</label>
                                        <input name="email" type="email" className="input" placeholder="Email" required />
                                        <label className="label">Password</label>
                                        <input name="password" type="password" className="input" placeholder="Password" required />
                                        <p>Don't have an account ? please
                                            <Link className='text-red-600' to="/register"> register</Link></p>
                                        <button className="btn btn-primary mt-4">Login</button>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;