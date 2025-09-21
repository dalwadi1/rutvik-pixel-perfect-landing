import React from 'react'
import { Button } from "@/components/ui/button"

const HeroSection = () => {
    return (
        <div className='max-w-[577px] flex flex-col lg:gap-[35px] gap-[15px]'>
            <h5 className='lg:text-[64px] sm:text-[39px] text-[40px] lg:text-start sm:text-center text-start font-extrabold text-black leading-none flex lg:justify-start justify-center items-center'>FIND CLOTHES THAT MATCHES YOUR STYLE</h5>
            <p className='sm:text-center text-start text-gray-600'>
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <div className='flex lg:justify-start justify-center items-center'>
                <Button variant="outline" className="bg-black text-white text-[16px] lg:px-[54px] py-[28px] px-[50px] lg:py-[28px] rounded-4xl">Shop Now</Button>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 items-center text-center'>
                <div>
                    <h5 className='text-[24px] font-semibold'>200+</h5>
                    <p className='text-gray-700 text-xs'>International Brands</p>
                </div>
                <div>
                    <h5 className='text-[24px] font-semibold'>2000+</h5>
                    <p className='text-gray-700 text-xs'>High-Quality Products</p>
                </div>
                <div className='sm:col-span-1 col-span-2'>
                    <h5 className='text-[24px] font-semibold'>30,000+</h5>
                    <p className='text-gray-700 text-xs'>Happy Customers</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
