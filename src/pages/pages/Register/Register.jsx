import React, { useContext, useState } from 'react';
import { FaExclamationTriangle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Form, Link, useFormAction } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Register = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);
    const [showCon, setShowCon] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const { handleSignUp, SignInWitGoogle } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        // const password = form.password.value;
        // const confirmPassword = form.confirmPassword.value;
        console.log(firstName, lastName, email, password, confirmPassword)
        if(password !== confirmPassword){
            alert("You password and confirm password are not same");
            return;
        }
        // signIn user
        handleSignUp(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            if(user){
                alert("you are successfully login")
            }
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    }

    const handleGoogleSignIn = () => {
        SignInWitGoogle()
        .then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handlePassword = e => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
        if (inputPassword.length < 6) {
            setPasswordError("Password must be at least 6 character long.");
        }
        else if (!/(?=.*?[A-Z])/.test(inputPassword)) {
            setPasswordError("Password must contain at least one capital letter")
        }
        else if (!/(?=.*?[a-z])/.test(inputPassword)) {
            setPasswordError("Password must contain at least one small letter")
        }
        else if (!/(?=.*?[0-9])/.test(inputPassword)) {
            setPasswordError("Password must contain at least one number")
        }
        else if (!/(?=.*?[#?!@$%^&*-])/.test(inputPassword)) {
            setPasswordError("Password must contain al least one special character")
        }
        else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = e => {
        const  inputConfirmPassword = e.target.value;
        setConfirmPassword(inputConfirmPassword)
        
        //  validation
        if (inputConfirmPassword.length < 6) {
            setConfirmPasswordError("Password must be at least 6 character long.");
        }
        else if (!/(?=.*?[A-Z])/.test(inputConfirmPassword)) {
            setConfirmPasswordError("Password must contain at least one capital letter")
        }
        else if (!/(?=.*?[a-z])/.test(inputConfirmPassword)) {
            setConfirmPasswordError("Password must contain at least one small letter")
        }
        else if (!/(?=.*?[0-9])/.test(inputConfirmPassword)) {
            setConfirmPasswordError("Password must contain at least one number")
        }
        else if (!/(?=.*?[#?!@$%^&*-])/.test(inputConfirmPassword)) {
            setConfirmPasswordError("Password must contain al least one special character")
        }
        else {
            setConfirmPasswordError("");
        }
    }


    return (
        <div className='w-full '>
            <form onSubmit={handleSubmit} className='border rounded-xl border-gray-300 p-10 mx-auto mt-5 w-[540px]'>
                <p className='font-bold text-2xl leading-7 text-black'>Login</p>
                <div className="mt-9 relative nameContainer">
                    <input className="nameField border-2 border-gray-300 border-t-0 border-l-0 border-r-0 w-full placeholder-black font-semibold" name='firstName' id="firstName" type="text" placeholder='First Name' />
                </div>
                <div className="mt-9 relative nameContainer">
                    <input className="nameField border-2 border-gray-300 border-t-0 border-l-0 border-r-0 w-full placeholder-black font-semibold" name='lastName' id="lastName" type="text" placeholder='Last Name' />
                </div>
                <div className="mt-9 relative nameContainer">
                    <input className="nameField border-2 border-gray-300 border-t-0 border-l-0 border-r-0 w-full  placeholder-black font-semibold" name='email' id="email" type="email" placeholder='Email' />
                </div>

                {/* Password handle */}
                <div className="mt-9 relative nameContainer">
                    {
                        show ? <FaEye onClick={() => setShow(!show)} className='text-gray-500 absolute right-3 top-4' /> : <FaEyeSlash onClick={() => setShow(!show)} className='text-gray-500 absolute right-3 top-4' />
                    }
                    <input onChange={handlePassword} className="nameField border-2 border-gray-300 border-t-0 border-l-0 border-r-0 w-full  placeholder-black font-semibold" name='password' id="password" type={show ? "text" : "password"} value={password} placeholder='Password' />
                    {passwordError && <div className='flex items-center gap-2 text-red-500'> <FaExclamationTriangle /><span>{passwordError}</span> </div>}
                </div>

                {/* Confirm password handle */}
                <div className="mt-9 relative nameContainer">
                    {
                        showCon ? <FaEye onClick={() => setShowCon(!showCon)} className='text-gray-500 absolute right-3 top-4' /> : <FaEyeSlash onClick={() => setShowCon(!showCon)} className='text-gray-500 absolute right-3 top-4' />
                    }
                    <input onChange={handleConfirmPassword} className="nameField border-2 border-gray-300 border-t-0 border-l-0 border-r-0 w-full  placeholder-black font-semibold" name='confirmPassword' id="confirmPassword" type={showCon ? "text" : "password"} value={confirmPassword} placeholder='Confirm Password' />
                    {confirmPasswordError && <div className='flex items-center gap-2 text-red-500'> <FaExclamationTriangle /><span>{confirmPasswordError}</span> </div>}
                </div>

                <div className="">
                    <label className="btn btn-warning w-full rounded-none mt-9" htmlFor="submit">
                        Login
                    </label>
                    <input className="text-white" id='submit' type="submit" />
                </div>
                <div className='text-center font-semibold'>Already have an account? <Link to='/login' className='text-yellow-400 underline'>Login</Link></div>
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

export default Register;