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
          <div className='w-full mt-[37px] flex justify-center'>
            <form className='w-[500px]'>
              <div className='w-full h-[50px]'>
                <input type='text' placeholder='Full Name' className='w-full h-full bg-white rounded-[25px] text-center placeholder:text-[#D8F1FF] placeholder:text-[18px]' />
              </div>
              <div className='w-full h-[50px] mt-[14px]'>
                <input type='number' placeholder='Phone' className='w-full  h-full bg-white rounded-[25px] text-center placeholder:text-[#97CFEF] placeholder:text-[18px]' />
              </div>
              <div className='w-full h-[50px] mt-[14px]'>
                <input type='email' placeholder='Email (Opsiyonel)' className='w-full  h-full bg-white rounded-[25px] text-center placeholder:text-[#D8F1FF] placeholder:text-[18px]' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
