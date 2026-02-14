import React from 'react';
import img1 from '../../assets/vector1.png'

const Hero = () => {
    return (
        <div className='max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-4  max-sm:m-4 '>
            <div className='sm:w-1/2 h-auto flex items-center justify-between bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white rounded-lg'>
            <img src={img1} alt="" className=" sm:h-full w-1/3" />
            <div className='items-center flex flex-col sm:p-10'>
                <h1 className='text-lg'>In-Progress</h1>
                <h1 className='font-bold text-4xl'>0</h1>
            </div>
            <img src={img1} alt="" className="scale-x-[-1] w-1/3 sm:h-full" />
                
            </div>
            <div className=' sm:w-1/2 h-auto flex items-center justify-between bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white rounded-lg'>
                 <img src={img1} alt="" className=" h-fit sm:h-full w-1/3" />
                <div className=' flex flex-col items-center sm:p-10'>
                    <h1 className='text-lg'>Resolved</h1>
                    <h1 className='font-bold text-4xl'>0</h1>
                </div>
                <img src={img1} alt="" className="scale-x-[-1] h-auto sm:h-full w-1/3" />

            </div>
        </div>
    );
};

export default Hero;