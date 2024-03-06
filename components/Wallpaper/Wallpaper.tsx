import React from 'react';
import Image from 'next/image';
import Clinic from '@/assets/png/clinic view.png';
import BackgroundImg from '@/assets/png/Path 22.png'
const Wallpaper = () => {
    return (
        <div className='w-full h-[300px] relative'>
            <div className='w-full h-full relative'>
                <div className='w-full h-full absolute z-0'>
                    <Image src={Clinic} alt='dentfix' fill />
                </div>
                <div className='w-full h-[full] absolute z-10'>
                    <div className='w-[450px] h-[300px] relative'>
                        <div className='w-full h-full absolute z-0'>
                            <div className='w-full h-full relative'>
                                <Image src={BackgroundImg} alt='dentfix' fill />
                            </div>
                        </div>
                        <div className='w-full h-full absolute z-0'>
                            <div className='w-full h-full relative'>
                                <div className='w-[292px] h-full flex items-center justify-end'>
                                    <div className='w-[260px] h-[143px] text-[40px] text-[#114B9B]'>
                                        <div><span className='font-bold'>hygienic</span> &</div>
                                        <div className='font-bold'>The latest</div>
                                        <div className='font-bold'>technology</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wallpaper;
