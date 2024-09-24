import React from 'react';
import banner from "../../assets/studyBanner.gif";
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div
            className="relative w-full h-[800px] bg-cover bg-center"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black to-blue-500 opacity-80 flex items-center">
                <div className='md:w-2/5 bg-blue-900 rounded-3xl py-10 m-5 md:m-24'>
                    <h1 className='text-red-400 font-bold text-3xl text-center'>
                        <Typewriter
                            words={['StudyPals']}
                            loop={false}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h1>
                    <p className='text-white opacity-90 py-1 text-center font-medium text-lg my-2'>
                        Your Ultimate Group Study Platform
                    </p>
                    <div className='flex justify-center'>
                        <Link to="/login">
                            <button className='text-white bg-black bg-opacity-45 text-xl p-3 rounded-lg border hover:bg-blue-900 hover:scale-110 border-red-400'>
                                Let's Study Together
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
