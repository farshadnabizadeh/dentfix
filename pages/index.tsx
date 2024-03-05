import React, { useState, useEffect } from 'react';
import useWindowDimensions from '@/hooks/useWindowDimensions';

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
    <main className='w-full min-h-screen bg-white'>
      width: {width} ~ height: {height}
    </main>
  );
};

export default Index;
