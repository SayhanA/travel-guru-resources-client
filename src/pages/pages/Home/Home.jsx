import React, { useState } from 'react';
import './Home.css';
import { Link, useLoaderData } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
    const [num, setNum] = useState(1)
    const data = useLoaderData();
    // console.log(data)

    const handleLeft = () => {
        if (num > 1) {
            const newNum = num - 1;
            setNum(newNum)
        }
        else {
            setNum(6)
        }
    }
    const handleRight = () => {
        if (num < 6) {
            const newNum = num + 1;
            setNum(newNum)
        }
        else {
            setNum(1)
        }
    }
    // console.log(num)
    return (
        <div>
            <div className={`h-screen absolute w-full top-0 img${num} overflow-hidden`}>

                <div className={`absolute top-[230px] left-[130px] ${num == 1 ? "left-[130px]" : "hidden"}`}>
                    <h1 className='text-white text-7xl uppercase font-normal mb-10'>Cox's bazar</h1>
                    <p className='text-white w-[450px] mb-10'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <Link to={`/place/${num}`} className='btn btn-warning px-7 rounded-md normal-case font-bold'>Booking <FaLongArrowAltRight className='text-2xl ml-3' /> </Link>
                </div>
                <div className={`absolute top-[230px] left-[130px] ${num == 2 ? "left-[130px]" : "hidden"}`}>
                    <h1 className='text-white text-7xl uppercase font-normal mb-10'>Sreemangal</h1>
                    <p className='text-white w-[450px] mb-10'>
                        Sreemangal is a scenic town located in the northeastern region of Bangladesh.
                        It is known for its tea plantations, lush green forests, and abundant wildlife.
                        Sreemangal is a popular tourist destination and is often referred to as the "tea capital" of Bangladesh....</p>
                    <Link to={`/place/${num}`} className='btn btn-warning px-7 rounded-md normal-case font-bold'>Booking <FaLongArrowAltRight className='text-2xl ml-3' /> </Link>
                </div>
                <div className={`absolute top-[230px] left-[130px] ${num == 3 ? "left-[130px]" : "hidden"}`}>
                    <h1 className='text-white text-7xl uppercase font-normal mb-10'>Sundarbans</h1>
                    <p className='text-white w-[450px] mb-10'>The Sundarbans is a vast mangrove forest that spans across India and Bangladesh.
                        It is home to the largest population of Bengal tigers in the world, as well as a variety of other flora and fauna.
                        The Sundarbans is a UNESCO World Heritage Site and is considered to be one of the most unique and important ecosystems on the planet. ...</p>
                    <Link to={`/place/${num}`} className='btn btn-warning px-7 rounded-md normal-case font-bold'>Booking <FaLongArrowAltRight className='text-2xl ml-3' /> </Link>
                </div>
                <div className={`absolute top-[230px] left-[130px] ${num == 4 ? "left-[130px]" : "hidden"}`}>
                    <h1 className='text-white text-7xl uppercase font-normal mb-10'>Tokyo</h1>
                    <p className='text-white w-[450px] mb-10'>
                        Tokyo is the capital city of Japan and is known for its modernity and innovation.
                        It is one of the most populous cities in the world and is a hub for technology, finance, and culture.
                        Tokyo is a vibrant city that offers a unique blend of tradition and modernity, with an abundance of sights, sounds, and experiences to discover. ...</p>
                    <Link to={`/place/${num}`} className='btn btn-warning px-7 rounded-md normal-case font-bold'>Booking <FaLongArrowAltRight className='text-2xl ml-3' /> </Link>
                </div>
                <div className={`absolute top-[230px] left-[130px] ${num == 5 ? "left-[130px]" : "hidden"}`}>
                    <h1 className='text-white text-7xl uppercase font-normal mb-10'>Bali</h1>
                    <p className='text-white w-[450px] mb-10'>
                        Bali is an Indonesian island located in the westernmost end of the Lesser Sunda Islands.
                        It is known for its beautiful beaches, lush rice terraces, and ancient temples.
                        Bali is a popular tourist destination and is often referred to as the "Island of the Gods" due to its rich culture and traditions ....</p>
                    <Link to={`/place/${num}`} className='btn btn-warning px-7 rounded-md normal-case font-bold'>Booking <FaLongArrowAltRight className='text-2xl ml-3' /> </Link>
                </div>
                <div className={`absolute top-[230px] left-[130px] ${num == 6 ? "left-[130px]" : "hidden"}`}>
                    <h1 className='text-white text-7xl uppercase font-normal mb-10'>Paris</h1>
                    <p className='text-white w-[450px] mb-10'>Paris is the capital city of France and is known for its iconic landmarks, such as the Eiffel Tower and the Louvre Museum.
                        It is also known for its haute couture fashion, fine dining, and romantic atmosphere. ...</p>
                    <Link to={`/place/${num}`} className='btn btn-warning px-7 rounded-md normal-case font-bold'>Booking <FaLongArrowAltRight className='text-2xl ml-3' /> </Link>
                </div>


                <div className=' absolute top-44 h-[450px] w-full -right-[1000px] flex gap-5'>
                    {
                        data.map(place => <div key={place.id} className={`${place.id == num ? "absolute -left-[300px]" : ''}`}>
                            <div className={`shadow-black w-[280px] h-[400px] rounded-xl)] relative ${place.id == num ? "border-4 rounded-xl border-yellow-400 absolute" : ''} `}>
                                <img className='h-full w-full overflow-hidden rounded-xl' src={place.image} alt="" />
                                <div className='h-full w-full bg-gradient-to-b from-[#00000000] to-[#000000] rounded-xl absolute top-0'>
                                    <p className='text-3xl font-bold text-white absolute bottom-0 py-8 px-5'>{place.name}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>


                <div className=' w-[150px] h-[50px] absolute left-[50%] -translate-x-[50%] top-[85%] flex justify-between'>
                    <div onClick={handleLeft} className=' w-[50px] flex justify-center items-center text-xl rounded-full bg-white '><FaChevronLeft /></div>
                    <div onClick={handleRight} className=' w-[50px] flex justify-center items-center text-xl rounded-full bg-white '><FaChevronRight /></div>
                </div>
            </div>
        </div>
    );
};

export default Home;