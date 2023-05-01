import React, { useContext, useState } from 'react';
import './Place.css'
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Place = () => {
    const [userLocation, setUserLocation] = useState(null);
    const data = useLoaderData();
    const param = useParams();
    // console.log(data)

    const { handlePlaceData } = useContext(AuthContext);

    useState(() => {
        fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=XXXXXXXXXXXX&longitude=XXXXXXXXXXXX&localityLanguage=en')
            .then(res => res.json())
            .then(data => setUserLocation(data))
    }, [])

    const district = userLocation?.locality.split(' ')[0];
    const city = userLocation?.principalSubdivision.split(' ')[0];
    const country = userLocation?.countryName;

    // console.log(param.id)
    const { id, name, description, image, location, rating, reviews } = data;

    return (
        <div className={`border border-red-600 w-full h-[760px] absolute top-0 img${param.id} flex`}>
            <div className=' w-[50%]'>
                <div className={`absolute top-[230px] left-[130px] ${param.id == 1 ? "left-[130px]" : "hidden"}`}>
                    <h1 className='text-white text-7xl uppercase font-normal mb-10'>Cox's bazar</h1>
                    <p className='text-white w-[550px] mb-10'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and itCox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it. Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it.Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    {/* <Link to={`/place/${num}`} className='btn btn-warning px-7 rounded-md normal-case font-bold'>Booking <FaLongArrowAltRight className='text-2xl ml-3' /> </Link> */}
                </div>
                <div className={`absolute top-[230px] left-[130px] ${param.id == 2 ? "left-[130px]" : "hidden"}`}>
                    <h1 className='text-white text-7xl uppercase font-normal mb-10'>Sreemangal</h1>
                    <p className='text-white w-[550px] mb-10'>
                        Sreemangal is a scenic town located in the northeastern region of Bangladesh.
                        It is known for its tea plantations, lush green forests, and abundant wildlife.
                        Sreemangal is a popular tourist destination and is often referred to as the "tea capital" of Bangladesh.Sreemangal is a scenic town located in the northeastern region of Bangladesh.
                        It is known for its tea plantations, lush green forests, and abundant wildlife.
                        Sreemangal is a popular tourist destination and is often referred to as the "tea capital" of Bangladesh....</p>
                    {/* <Link to={`/place/${num}`} className='btn btn-warning px-7 rounded-md normal-case font-bold'>Booking <FaLongArrowAltRight className='text-2xl ml-3' /> </Link> */}
                </div>
                <div className={`absolute top-[230px] left-[130px] ${param.id == 3 ? "left-[130px]" : "hidden"}`}>
                    <h1 className='text-white text-7xl uppercase font-normal mb-10'>Sundarbans</h1>
                    <p className='text-white w-[550px] mb-10'>The Sundarbans is a vast mangrove forest that spans across India and Bangladesh.
                        It is home to the largest population of Bengal tigers in the world, as well as a variety of other flora and fauna.
                        The Sundarbans is a UNESCO World Heritage Site and is considered to be one of the most unique and important ecosystems on the planet.It is home to the largest population of Bengal tigers in the world, as well as a variety of other flora and fauna.
                        The Sundarbans is a UNESCO World Heritage Site and is considered to be one of the most unique and important ecosystems on the planet. ...</p>
                    {/* <Link to={`/place/${num}`} className='btn btn-warning px-7 rounded-md normal-case font-bold'>Booking <FaLongArrowAltRight className='text-2xl ml-3' /> </Link> */}
                </div>
                <div className={`absolute top-[230px] left-[130px] ${param.id == 4 ? "left-[130px]" : "hidden"}`}>
                    <h1 className='text-white text-7xl uppercase font-normal mb-10'>Tokyo</h1>
                    <p className='text-white w-[550px] mb-10'>
                        Tokyo is the capital city of Japan and is known for its modernity and innovation.
                        It is one of the most populous cities in the world and is a hub for technology, finance, and culture.
                        Tokyo is a vibrant city that offers a unique blend of tradition and modernity, with an abundance of sights, sounds, and experiences to discover.Tokyo is the capital city of Japan and is known for its modernity and innovation.
                        It is one of the most populous cities in the world and is a hub for technology, finance, and culture.
                        Tokyo is a vibrant city that offers a unique blend of tradition and modernity, with an abundance of sights, sounds, and experiences to discover. ...</p>
                    {/* <Link to={`/place/${num}`} className='btn btn-warning px-7 rounded-md normal-case font-bold'>Booking <FaLongArrowAltRight className='text-2xl ml-3' /> </Link> */}
                </div>
                <div className={`absolute top-[230px] left-[130px] ${param.id == 5 ? "left-[130px]" : "hidden"}`}>
                    <h1 className='text-white text-7xl uppercase font-normal mb-10'>Bali</h1>
                    <p className='text-white w-[550px] mb-10'>
                        Bali is an Indonesian island located in the westernmost end of the Lesser Sunda Islands.
                        It is known for its beautiful beaches, lush rice terraces, and ancient temples.
                        Bali is a popular tourist destination and is often referred to as the "Island of the Gods" due to its rich culture and traditions.Bali is an Indonesian island located in the westernmost end of the Lesser Sunda Islands.
                        It is known for its beautiful beaches, lush rice terraces, and ancient temples.
                        Bali is a popular tourist destination and is often referred to as the "Island of the Gods" due to its rich culture and traditions ....</p>
                    {/* <Link to={`/place/${num}`} className='btn btn-warning px-7 rounded-md normal-case font-bold'>Booking <FaLongArrowAltRight className='text-2xl ml-3' /> </Link> */}
                </div>
                <div className={`absolute top-[230px] left-[130px] ${param.id == 6 ? "left-[130px]" : "hidden"}`}>
                    <h1 className='text-white text-7xl uppercase font-normal mb-10'>Paris</h1>
                    <p className='text-white w-[550px] mb-10'>Paris is the capital city of France and is known for its iconic landmarks, such as the Eiffel Tower and the Louvre Museum.
                        It is also known for its haute couture fashion, fine dining, and romantic atmosphere.Paris is the capital city of France and is known for its iconic landmarks, such as the Eiffel Tower and the Louvre Museum.
                        It is also known for its haute couture fashion, fine dining, and romantic atmosphere.Paris is the capital city of France and is known for its iconic landmarks, such as the Eiffel Tower and the Louvre Museum.
                        It is also known for its haute couture fashion, fine dining, and romantic atmosphere.Paris is the capital city of France and is known for its iconic landmarks, such as the Eiffel Tower and the Louvre Museum.
                        It is also known for its haute couture fashion, fine dining, and romantic atmosphere. ...</p>
                    {/* <Link to={`/place/${num}`} className='btn btn-warning px-7 rounded-md normal-case font-bold'>Booking <FaLongArrowAltRight className='text-2xl ml-3' /> </Link> */}
                </div>
            </div>
            <div className=''>
                <div className='p-6 w-[470px] h-[420px] border absolute top-[50%] -translate-y-[50%] right-[150px] bg-white rounded-lg'>
                    <div className='pb-3'>
                        <p className='pb-2'>Origin</p>
                        <p className='border py-4 px-5 rounded-md text-black font-bold bg-[#F2F2F2]'>{country}, {city}, {district}</p>
                    </div>
                    <div className='pb-3'>
                        <p className='pb-2'>Destination</p>
                        <p className='border py-4 px-5 rounded-md text-black font-bold bg-[#F2F2F2]'>{name}</p>
                    </div>

                    <div className='flex gap-5'>
                        <div className='w-[50%]'>
                            <p className='pb-2'>From</p>
                            <input className='bg-[#F2F2F2] w-[100%] border-0 p-5 rounded-md' type="date" name="" id="" />
                        </div>
                        <div className='w-[50%]'>
                            <p className='pb-2'>To</p>
                            <input className='bg-[#F2F2F2] w-[100%] border-0 p-5 rounded-md' type="date" name="" id="" />
                        </div>
                    </div>

                    <Link to={`/rooms/${name}`} onClick={() => handlePlaceData(data)} className='text-black font-bold btn btn-warning normal-case rounded-md w-full mt-5'>Start Booking</Link>
                </div>
            </div>
        </div>
    );
};

export default Place;