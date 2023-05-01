import React from 'react';
import { FaStar } from 'react-icons/fa';


const Room = ({ room }) => {
    // console.log(room)
    const { bathrooms, bedrooms, beds, cost, description, flexibility, guestsAllowed, image, location, ratedPerson, rating, services, title, _id } = room;

    return (
        <div style={{ gridTemplateColumns: "40% 60%" }} className='grid gap-5 h-[200px] overflow-hidden rounded-lg p-3'>
            <div className='rounded-lg overflow-hidden'><img className='rounded-lg h-full w-full' src={image} alt="" /></div>
            <div className='my-1 flex flex-col gap-2'>
                <h2 className='text-black font-bold text-lg mb-1'>{title}</h2>
                <div className='flex gap-2'>
                    <p>{guestsAllowed} guests</p>
                    <p>{bathrooms} bathrooms</p>
                    <p>{bedrooms} bedrooms</p>
                    <p>{beds}</p>
                </div>
                <div className='flex gap-3'>
                    <p>{services[0]}</p>
                    <p>{services[1]}</p>
                    <p>{services[2]}</p>
                </div>
                <p>{flexibility}</p>
                <div className='flex gap-5'>
                    <p className='flex justify-center items-center gap-1'> <FaStar className='text-yellow-300' /> {rating}({ratedPerson})</p>
                    <p><span className='font-bold'>{cost}</span>/night</p>

                </div>
            </div>
        </div>
    );
};

export default Room;