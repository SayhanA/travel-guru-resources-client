import React from 'react';
import './Error.css'
import { Link, useRouteError } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee, faFaceDizzy } from '@fortawesome/free-solid-svg-icons'

const Error = () => {

    const error = useRouteError();
    // console.log(error);
    
    return (
        <div className='relative'>
            {/* <img id='emoji' className='pl-36 w-[550px] mt-10 block mx-auto pr-40' src='images/not.png' alt="" /> */}
            <div id='emoji' className='text-[250px] mx-auto text-white bg-gray-600 w-[270px] h-[270px] flex justify-center items-center rounded-full'>
            <FontAwesomeIcon icon={faFaceDizzy} />
            

            </div>
            <div className=''>
                <div className='error-status'>
                    <h1 id='error-number' >{error.status}</h1>
                </div>
                <p className='text-6xl font-bold text-gray-500 text-center'>Page {error.statusText}</p>
                <p className='text-2xl font-bold text-center pt-3 text-blue-100'>{error.data}</p>
            </div>
            <Link to='/' className='btn btn-primary w-[200px] bg-blue-300 mx-auto  flex justify-center'>Go to Home page</Link>
        </div>
    );
};

export default Error;