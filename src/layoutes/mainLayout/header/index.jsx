import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { CircleUser, Menu, Search, ShoppingCart } from 'lucide-react'

const Header = () => {
    const [openManu, setOpenManu] = useState(false)
    return (
        <div className='bg-white py-[24px] xl:px-38 px-4 sticky top-0 shadow-lg z-50'>
            <div className='flex items-center justify-between'>
                <h5 className='text-black lg:text-[32px] text-[25px] font-extrabold'>
                    SHOP.CO
                </h5>
                <div className='lg:flex hidden items-center justify-between gap-10'>
                    <ul className='flex items-center gap-4'>
                        <Select>
                            <SelectTrigger className="w-[100px]">
                                <SelectValue placeholder="Shop" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Shop 1">Shop 1</SelectItem>
                                <SelectItem value="Shop 2">Shop 2</SelectItem>
                                <SelectItem value="Shop 3">Shop 3</SelectItem>
                            </SelectContent>
                        </Select>
                        <li className='text-black text-[16px]'>On Sale</li>
                        <li className='text-black text-[16px]'>New Arrivals</li>
                        <li className='text-black text-[16px]'>Brands</li>
                    </ul>
                    <div className='bg-[#f0f0f0] px-[16px] py-[12px]  rounded-4xl flex items-center justify-center gap-3'>
                        <Search color='gray' size={20} />
                        <input type="text" placeholder="Search for products..." />
                    </div>
                </div>
                <div className='flex items-center justify-center gap-6'>
                    <div>
                        <ul className='flex items-center justify-center gap-4'>
                            <li><ShoppingCart color='black' size={24} /></li>
                            <li><CircleUser color='black' size={24} /></li>
                        </ul>
                    </div>
                    <div className='lg:hidden'>
                        <Sheet open={openManu} onOpenChange={setOpenManu}>
                            <SheetTrigger asChild>
                                <button className="cursor-pointer rounded-sm relative mt-2">
                                    <Menu />
                                </button>
                            </SheetTrigger>

                            <SheetContent
                                side="right"
                                className="w-full h-full bg-[#f0f0f0] p-[15px] flex flex-col"
                                hideCloseButton
                            >
                                <div className="flex items-center justify-end mb-4 border-b pb-2">
                                    <button
                                        onClick={() => setOpenManu(false)}
                                    >
                                        ✕
                                    </button>
                                </div>
                                <ul className='flex flex-col items-start gap-4'>
                                    <li className='text-black text-[16px]'>Shop</li>
                                    <li className='text-black text-[16px]'>On Sale</li>
                                    <li className='text-black text-[16px]'>New Arrivals</li>
                                    <li className='text-black text-[16px]'>Brands</li>
                                </ul>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
