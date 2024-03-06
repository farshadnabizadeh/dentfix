import React, { useState, useEffect } from 'react';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import Hero from '@/components/Hero/Hero';
import Brands from '@/components/Brand/Brands';
import ContactUs from '@/components/ContactUs/ContactUs';
import Wallpaper from '@/components/Wallpaper/Wallpaper';
import Shape from '@/assets/png/shape.png';
import Image from 'next/image';
import Features from '@/components/Features/Features';
import Slider from '@/components/Slider/Slider';
const Index = () => {
  const [isClient, setIsClient] = useState(false);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Optionally, render a placeholder or loader here
    return null; // Or <div>Loading...</div>
  }

  return (
    <main className='w-full min-h-screen bg-white overflow-x-hidden relative'>
      <section className='w-full top-0 absolute z-0'>
        <Hero />
      </section>
      <section className='w-full absolute z-10 top-[850px] '>
        <div className='w-full flex justify-center'>
          <div className='w-full flex justify-center'>
            <div className='w-[1440px] flex justify-center'>
              <div className='w-[50%] relative'>
                <div className='w-full'>
                  <Brands />
                </div>
                <div className='w-full absolute bottom-0'>
                  <div className='w-full'>
                    <Wallpaper />
                  </div>
                </div>
              </div>
              <div className='w-[50%]'>
                <ContactUs />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <div className='w-[1440px]'>
            <div className='w-[1380px] h-[350px] bg-[#D5EFFF] rounded-[25px] mt-[70px]'>
              <Features />
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <div className='w-[1440px]'>
            <div className='w-[1380px] h-full'>
              <div className='w-full text-center text-white text-[34px] font-bold mt-[70px]'>Before & After</div>
              <div className='w-full'>
                <Slider />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full h-[1285px] absolute top-[1300px] z-0'>
        <div className='w-full h-full relative'>
          <Image src={Shape} alt="dentfix" fill />
        </div>
      </section>
    </main>
  );
};

export default Index;
