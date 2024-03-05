import React, { useState, useEffect } from 'react';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import Hero from '@/components/Hero/Hero';
import ContactUs from '@/components/ContactUs/ContactUs';
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
            <div className='w-[1440px] border-2 border-[red]'>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
