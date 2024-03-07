import React from 'react';
import Package1 from './Package1';
import PackageLable from '@/assets/png/package_label.png';
import PackageLable2 from '@/assets/png/package2.png';
import PackageLable3 from '@/assets/png/premiumpacakge.png';
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
                        price={'3.690'} 
                        labelName={'Economy Package'}
                        innerHeight={'h-[597px]'}
                        outHeight={'h-[736px]'}
                        btnContainerHeight={'h-[800px]'}
                        priceTextColor={'text-[#3DA4FF]'}
                        PremiumCheck={false}/>
                    {/* END */}
                    {/* START */}
                    <Package1 data={[
                        { content: "20 Teeth Emax Layered Zirconium Crowns" },
                        { content: "Consultation & Treatment Planning" },
                        { content: "X-Ray" },
                        { content: "CT Scan (If necessary)" },
                        { content: "Detartrage" },
                        { content: "3 Teeth White Composite Fillings (if needed)" },
                        { content: "3 Root Canal Treatments (if needed" },
                        { content: "Gingivectomy Laser (if needed)" },
                        { content: "Translator & Patient Care Service" },
                        { content: "A 8-Night Stay at the City Center (Taksim Square)" },
                        { content: "Free accommodation for Accompanier" },
                        { content: "Transfers (Airport-Hotel-Clinic)" }
                    ]}
                        image={PackageLable2}
                        price={'3.990'} 
                        labelName={'Comfort Package'}
                        innerHeight={'h-[697px]'}
                        outHeight={'h-[836px]'}
                        btnContainerHeight={'h-[900px]'}
                        priceTextColor={'text-[#2171CA]'}
                        PremiumCheck={false}/>
                    {/* END */}
                    {/* START */}
                    <Package1 data={[
                        { content: "20 Teeth Emax Layered Zirconium Crowns" },
                        { content: "Consultation & Treatment Planning" },
                        { content: "X-Ray" },
                        { content: "CT Scan (If necessary)" },
                        { content: "Detartrage" },
                        { content: "3 Teeth White Composite Fillings (if needed)" },
                        { content: "3 Root Canal Treatments (if needed" },
                        { content: "Gingivectomy Laser (if needed)" },
                        { content: "Translator & Patient Care Service" },
                        { content: "Return (two ways) Flight Ticket (only for the patient)" },
                        { content: "A 8-Night Stay at the City Center (Taksim Square)" },
                        { content: "Free accommodation for Accompanier" },
                        { content: "Transfers (Airport-Hotel-Clinic)" }
                    ]}
                        image={PackageLable3}
                        price={'4.790'} 
                        labelName={'Premium PACKAGE'}
                        innerHeight={'h-[787px]'}
                        outHeight={'h-[936px]'}
                        btnContainerHeight={'h-[1000px]'}
                        priceTextColor={'text-[#2171CA]'}
                        PremiumCheck={true}/>
                    {/* END */}
                </div>
            </div>
        </div>
    );
}

export default HollywoodSmile;
