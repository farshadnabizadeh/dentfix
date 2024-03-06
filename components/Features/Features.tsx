import React from 'react';

const Features = () => {
    return (
        <div className='w-full h-full flex '>
            <div className='w-full h-full flex-1 flex justify-center pr-[28px]'>
                <div className='w-full pl-10'>
                    <div className='text-[70px] text-[rgba(41,131,255,0.3)] font-bold'>01</div>
                    <div>
                        <span className='text-[#114B9B] text-[30px] font-bold'>Online</span>
                        <span className='text-[#30A1E8] text-[30px] font-bold ml-2'>Consultation</span>
                    </div>
                    <div>
                        <span className='text-[#535353] text-[12px]'>
                            For your online consultation we will ask you to provide your medical records and to submit photos of your teeth taken at specific angles. Alongside, we will discuss your smile goals and address any concerns you may have.
                        </span>
                    </div>
                </div>
            </div>
            <div className='w-full h-full flex-1 flex justify-center pr-[28px]'>
                <div className='w-full'>
                    <div className='text-[70px] text-[rgba(41,131,255,0.7)] font-bold'>02</div>
                    <div className='w-full'>
                        <div className='text-[#114B9B] text-[30px] font-bold'>Pre-Diagnosis &</div>
                        <div className='text-[#30A1E8] text-[30px] font-bold'>Treatment Planning</div>
                    </div>
                    <div>
                        <span className='text-[#535353] text-[12px]'>
                            Once our dental team has carefully reviewed your photos and the collected information, they will make an initial recommendation and develop a customized treatment plan. We will provide you with detailed information on alternative treatments, the duration and fees.
                        </span>
                    </div>
                </div>
            </div>
            <div className='w-full h-full flex-1 flex justify-center pr-[28px]'>
                <div className='w-full'>
                    <div className='text-[70px] text-[rgba(41,131,255,1)] font-bold'>03</div>
                    <div className='w-full'>
                        <div className='text-[#114B9B] text-[30px] font-bold'>Scheduling</div>
                        <div className='text-[#30A1E8] text-[30px] font-bold'>Your Appointment</div>
                    </div>
                    <div>
                        <span className='text-[#535353] text-[12px]'>
                        Upon deciding to proceed with the treatment we will be scheduling your appointment date, based on your preference and making all the necessary travel arrangements {'(arrival & return dates)'} on behalf of you
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
