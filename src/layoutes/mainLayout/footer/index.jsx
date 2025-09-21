import { Button } from '@/components/ui/button'
import { Facebook, Instagram } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='max-w-[880px] flex flex-col lg:gap-[35px] gap-[15px] mx-auto pb-10'>
            <div className='flex lg:flex-row flex-col lg::items-center items-start justify-between px-8 gap-10'>
                <div className='flex flex-col items-start justify-center gap-5'>
                    <h5 className='text-black lg:text-[32px] text-[25px] font-extrabold'>
                        SHOP.CO
                    </h5>
                    <p className='text-xs max-w-[150px] text-gray-700'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <div className='flex items-start justify-center gap-2'>
                        <Facebook />
                        <Instagram />
                    </div>
                </div>
                <div className='flex flex-col gap-3 lg:pt-12'>
                    <h5>HELP</h5>
                    <ul>
                        <li>Privacy statement</li>
                        <li>Terms & Conditions</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer
