import React, { useState, useEffect } from 'react';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import Hero from '@/components/Hero/Hero';
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
    <main className='w-full min-h-screen bg-white overflow-x-hidden'>
      <Hero />
    </main>
  );
};

export default Index;
