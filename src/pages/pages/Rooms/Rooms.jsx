import React, { useContext, useEffect, useState, Component } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import moment from 'moment';
import Room from '../../components/Room/Room';

import GoogleMapReact from 'google-map-react';
import Map from '../../components/Map/Map';
import SimpleMap from '../../components/Map/Map';


const Rooms = () => {
    const [roomData, setRoomData] = useState({})

    const data = useLoaderData();
    const param = useParams();
    // console.log(data)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('place'))
        setRoomData(data)
    }, [])

    const { id, name, description, image, location, rating, reviews, mapImage } = roomData;

    console.log(mapImage)

    return (
        <div className='mx-20'>
            <div className='border border-gray-300'></div>
            <div style={{ gridTemplateColumns: "60% 40%" }} className='w-full grid'>
                <div className=''>
                    <div className=' flex gap-2 font-bold text-gray-400 pt-5 pl-4'>
                        <p>{reviews} stays</p>
                        <p>{moment().format("MMM Do YY")}</p>
                        <p>4 guests</p>
                    </div>
                    <h2 className='text-2xl font-bold pt-1 pl-4'>Stay in {name}</h2>

                    <div className='mt-5'>
                        {
                            data.map(room => <Room room={room} key={room._id}></Room>)
                        }
                    </div>

                </div>
                <div className='mt-10'>
                        <Map mapImage={mapImage} />
                </div>
            </div>
        </div>
    );
};

export default Rooms;