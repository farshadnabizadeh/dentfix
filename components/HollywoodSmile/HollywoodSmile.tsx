import React from 'react';
import Package1 from './Package1';
import PackageLable from '@/assets/png/package_label.png';
const HollywoodSmile = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-[1447px] h-[2034px]'>
                <div className='w-full text-center text-[#114B9B] text-[34px] font-bold'>
                    Hollywood Smile Packages with Zirconium
                </div>
                <div className='w-full grid grid-cols-3 gap-[100px]'>
                    {/* START */}
                    <Package1 data={[
                        { content: "20 Teeth Emax Layered Zirconium Crowns" },
                        { content: "Consultation & Treatment Planning" },
                        { content: "X-Ray" },
                        { content: "CT Scan (If necessary)" },
                        { content: "Detartrage" },
                        { content: "Translator & Patient Care Services" },
                        { content: "A 7-Night Stay at the City Center (Taksim Square)" },
                        { content: "Free Accommodation for Accompanier" },
                        { content: "Transfers (Airport-Hotel-Clinic)" }
                    ]} 
                    image={PackageLable}
                    price={'3.690'}/>
                    {/* END */}
                    {/* START */}
                    <Package1 />
                    {/* END */}
                    {/* START */}
                    <Package1 />
                    {/* END */}
                </div>
            </div>
        </div>
    );
}

export default HollywoodSmile;
