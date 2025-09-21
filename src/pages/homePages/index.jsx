import React from 'react'
import HeroSection from './HeroSection'
import Products from './Products'
import Selling from './Selling'
import Review from './Review'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

const Home = () => {
    return (
        <div className='w-full'>
            <div className='flex bg-[#f2f0f1] py-[96px] px-[32px] items-center justify-center w-full lg:mt-0 sm:-mt-14 -mt-18'>
                <HeroSection />
            </div>
            <div className='py-[52px]'>
                <div>
                    <h5 className='text-center lg:text-[48px] text-[32px] font-extrabold'>NEW ARRIVALS</h5>
                </div>
            </div>
            <div className='bg-white w-full xl:px-28 px-4'>
                <Products />
            </div>
            <div className='py-[52px]'>
                <div>
                    <h5 className='text-center lg:text-[48px] text-[32px] font-extrabold'>TOP SELLING</h5>
                </div>
            </div>
            <div className='bg-white w-full xl:px-28 px-4'>
                <Selling />
            </div>
            <div className='py-[52px]'>
                <div>
                    <h5 className='text-center lg:text-[48px] text-[32px] font-extrabold'>OUR HAPPY CUSTOMERS</h5>
                </div>
            </div>
            <div className='bg-white w-full xl:px-28 px-4'>
                <Review />
            </div>
            <div className='lg:px-[150px] sm:px-[30px] px-[20px] lg:py-[52px] py-[30px] flex items-center justify-center'>
                <div className='py-[52px] w-full bg-black flex items-center justify-center rounded-xl'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 text-center px-12'>
                        <h5 className='text-start text-white lg:text-[40px] text-[28px] font-extrabold leading-none'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h5>
                        <div className='flex flex-col justify-center lg:items-end items-center gap-2'>
                            <div className='flex bg-white px-[16px] py-[12px] rounded-[62px] gap-3 items-center justify-center'>
                                <Mail color='gray' />
                                <input type="text" placeholder="Enter your email address" className='text-xs' />
                            </div>
                            <Button className="bg-white px-[26px] py-[22px] rounded-[62px] text-black hover:bg-white">Send Us For Notification</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
