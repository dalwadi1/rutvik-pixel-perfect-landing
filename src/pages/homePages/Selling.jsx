import { IndianRupee, Star } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"

const Selling = () => {
    const [viewMore, setViewMore] = useState(false)
    const products = [
        {
            id: 1,
            name: 'Gradient Graphic shirt',
            rating: '4.5/ 5',
            price: 30,
            img: '/assets/imag2.jpg'
        },
        {
            id: 2,
            name: 'Gradient Graphic shirt',
            rating: '4.5/ 5',
            price: 30,
            img: '/assets/imag2.jpg'
        },
        {
            id: 3,
            name: 'Gradient Graphic shirt',
            rating: '4.5/ 5',
            price: 30,
            img: '/assets/imag2.jpg'
        },
        {
            id: 4,
            name: 'Gradient Graphic shirt',
            rating: '4.5/ 5',
            price: 30,
            img: '/assets/imag2.jpg'
        },
    ]
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]'>
                {
                    products?.map((e, i) => (
                        <div key={e?.id} className='flex flex-col items-center justify-center'>
                            <div className=''>
                                <img src={e?.img} alt="" className='rounded-3xl max-w-[295px] max-h-[298px]' />
                            </div>
                            <div className='flex flex-col items-start gap-2'>
                                <h4 className='text-[20px] font-bold'>
                                    {e?.name}
                                </h4>
                                <div className='flex gap-2'>
                                    <Star color='yellow' />
                                    <Star color='yellow' />
                                    <Star color='yellow' />
                                    <Star color='yellow' />
                                    <p>
                                        {e?.rating}
                                    </p>
                                </div>
                                <p className='font-bold text-[24px] flex items-center'>
                                    <IndianRupee size={18} /> {e?.price}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Selling
