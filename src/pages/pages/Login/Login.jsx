import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaExclamationTriangle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const { handleLogin, SignInWitGoogle } = useContext(AuthContext);
    // console.log(handleLogin)
    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || '/'


    const handleSubmit = (e) => {   
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        // const password = form.password.value;
        // console.log(email, password)
        setError('')
        // firebase login
        handleLogin(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(from)
            if(user){
                setError("you are successfully login")             
            }
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    }
    
    // control form
    const handledPassword = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
        
        // password validation
        if(inputPassword.length < 6){
            setPasswordError("Password must be at least 6 character long.");
        }
        else if(!/(?=.*?[A-Z])/.test(inputPassword)){
            setPasswordError("Password must contain at least one capital letter")
        }
        else if(!/(?=.*?[a-z])/.test(inputPassword)){
            setPasswordError("Password must contain at least one small letter")
        }
        else if(!/(?=.*?[0-9])/.test(inputPassword)){
            setPasswordError("Password must contain at least one number")
        }
        else if(!/(?=.*?[#?!@$%^&*-])/.test(inputPassword)){
            setPasswordError("Password must contain al least one special character")
        }
        else{
            setPasswordError("");
        }
    }
    
    const handleGoogleSignIn = () => {
        SignInWitGoogle()
        .then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user)
            navigate(from)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    return (
        <div className='w-full h-[680x]'>
            <form onSubmit={handleSubmit} className='border rounded-xl border-gray-300 p-10 mx-auto mt-5 w-[540px] h-[450px]'>
                <p className='font-bold text-2xl leading-7 text-black'>Login</p>

                <div className="mt-9 relative nameContainer">
                    <input className="nameField border-2 border-gray-300 border-t-0 border-l-0 border-r-0 w-full placeholder-black font-semibold" name='email' id="email" type="email" placeholder='User Email' required />
                </div>

                <div className="mt-9 relative nameContainer">
                    {
                        show ? <FaEye onClick={() => setShow(!show)} className='text-gray-500 absolute right-3 top-4' /> :<FaEyeSlash onClick={() => setShow(!show)} className='text-gray-500 absolute right-3 top-4' />
                    }
                    <input onChange={handledPassword} className="nameField border-2 border-gray-300 border-t-0 border-l-0 border-r-0 w-full  placeholder-black font-semibold" name='password' id="password" type={show ? "text" : "password"} value={password} placeholder='User Password' required />
                    {passwordError && <div className='flex items-center gap-2 text-red-500'> <FaExclamationTriangle /><span>{passwordError}</span> </div>}
                </div>

                <div className='mt-5 flex justify-between'>
                    <div className=" relative nameContainer flex gap-3 items-center text-black font-semibold">
                        <input className="border-black border-[3px]" id="username" type="checkbox" placeholder='userName' />
                        Remember Me
                    </div>
                    <Link className='text-yellow-400 font-medium underline'>Forgot Password</Link>
                </div>

                <div className="">
                    <label className="btn btn-warning w-full rounded-none mt-9" htmlFor="login">
                        Login
                    </label>
                    <input className="text-white" id='login' type="submit" />
                </div>
                <div className='text-center font-semibold'>Don't have an account? <Link to='/register' className='text-yellow-400 underline'>Create an account</Link></div>
                {error && <p className='text-red-500 text-center'>{error}</p>}
            </form>

            <div className='w-[540px] mx-auto p-4'>
                <div className='p-5 w-full flex gap-5 justify-center items-center'>
                    <div className=' border-2 border-gray-300 w-[40%] h-0'></div>
                    <span className='text-black font-bold'>OR</span>
                    <div className=' border-2 border-gray-300 w-[40%] h-0'></div>
                </div>
                <div className='mx-5'>
                    <div className='relative border border-gray-300 h-[51px] flex justify-center items-center rounded-full'>
                        <img className='w-[37px] absolute left-2' src="https://cdn.iconscout.com/icon/free/png-256/free-facebook-2038471-1718509.png" alt="" />
                        <p className='text-center font-semibold'>Continue with Facebook</p>
                    </div>
                    <div onClick={handleGoogleSignIn} className='mt-3 relative border border-gray-300 h-[51px] flex justify-center items-center rounded-full'>
                        <img className='w-[37px] absolute left-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
                        <p className='text-center font-semibold'>Continue with Google</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;