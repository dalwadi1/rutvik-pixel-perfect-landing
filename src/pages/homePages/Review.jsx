import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const Review = () => {
    return (
        <div className='flex items-center justify-center'>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2500,
                    }),
                ]}
                className="lg:max-w-[750px] sm:max-w-[520px] max-w-[250px]"
            >
                <CarouselContent>
                    <CarouselItem>
                        <div className='text-center text-[16px] p-2 rounded-tl-4xl rounded-br-4xl  bg-[#f2f0f1]'>
                            <p className='p-3 text-xs'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi enim tempora similique recusandae beatae? Et facilis, a officiis ipsam impedit voluptate quasi magnam! Aspernatur porro molestias ipsum magnam nobis numquam, distinctio illo.
                            </p>
                            <h5 className='font-bold'>
                                ABC
                            </h5>
                            <p className='text-xs text-gray-700'>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='text-center text-[16px] p-2 rounded-tl-4xl rounded-br-4xl  bg-[#f2f0f1]'>
                            <p className='p-3 text-xs'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi enim tempora similique recusandae beatae? Et facilis, a officiis ipsam impedit voluptate quasi magnam! Aspernatur porro molestias ipsum magnam nobis numquam, distinctio illo.
                            </p>
                            <h5 className='font-bold'>
                                ABC
                            </h5>
                            <p className='text-xs text-gray-700'>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='text-center text-[16px] p-2 rounded-tl-4xl rounded-br-4xl  bg-[#f2f0f1]'>
                            <p className='p-3 text-xs'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi enim tempora similique recusandae beatae? Et facilis, a officiis ipsam impedit voluptate quasi magnam! Aspernatur porro molestias ipsum magnam nobis numquam, distinctio illo.
                            </p>
                            <h5 className='font-bold'>
                                ABC
                            </h5>
                            <p className='text-xs text-gray-700'>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default Review
