import React from 'react'
import { GoChevronDown } from "react-icons/go";
import { FaBarsStaggered } from "react-icons/fa6";
import image from "../assets/image/Amazon background.jpg"



export default function Body() {

    const bodybar = [
        { href: "", name: "Discover" },
        { href: "", name: "Animation" },
        { href: "", name: "Branding" },
        { href: "", name: "Illustration" },
        { href: "", name: "Mobile" },
        { href: "", name: "Print" },
        { href: "", name: "Product Design" },
        { href: "", name: "Typography" },
        { href: "", name: "Web Design" }
    ]



    const bodybox = [
        { image1:image, image2:  image , name: "Robin Holesinsky" },
        { image1: image, image2: image, name: "Afterglow" },
        { image1: "", image2: "", name: "" },
        { image1: "", image2: "", name: "" },
        { image1: "", image2: "", name: "" },
        { image1: "", image2: "", name: "" },
    ]





    return (
        <div className='p-20 flex flex-col'>
            <div className='flex justify-between'>
                <div className='flex w-28 rounded-[10px] py-2 px-3 border-1 border-gray-200 justify-between items-center '>Popular <GoChevronDown /></div>

                <div className='flex gap-4'>
                    {
                        bodybar.map((item, key) => (
                            <a key={key} className='bg-gray-200 px-3 rounded-full font-semibold hover:text-gray-500 py-2 ' href={item.href}>{item.name}</a>
                        ))
                    }
                </div>

                <div className='flex items-center border-1 px-4 rounded-full border-gray-300 gap-2'>
                    <FaBarsStaggered className='text-sm ' />
                    <div className='font-light'>Filters</div>
                </div>
            </div>


            <div className='py-10 flex  gap-7'>
                
                    {bodybox.map((item, key) => (
                        <div key={key} className='flex flex-col gap-2'>
                            <img className='h-60 w-75 rounded-xl hover:cursor-pointer' src={item.image1} alt="" />
                            <div className='flex gap-1 items-center hover:cursor-pointer'>
                                <img className='h-7 w-7 rounded-full' src={item.image2} alt="" />
                                <div>{item.name}</div>
                            </div>
                        </div>
                    ))}
                
            </div>
        </div>

    )
}
