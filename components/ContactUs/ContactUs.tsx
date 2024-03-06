import React from 'react';

const ContactUs = () => {
  return (
    <>
      <div className='w-full flex justify-center'>
        <div className='w-[575px] h-[489px] bg-[#114B9B] rounded-[20px]'>
          <div className='w-full flex justify-center items-center mt-[47px]'>
            <div className='w-[70px] h-[2px] bg-[#BEE6FF] mx-2'></div>
            <div className=' text-[#30A1E8] text-[30px] '>Contact Us</div>
            <div className='w-[70px] h-[2px] bg-[#BEE6FF] mx-2'></div>
          </div>
          <div className='w-full text-center text-white text-[34px] font-bold mt-[8px]'>
            Get A Free Appointment
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
