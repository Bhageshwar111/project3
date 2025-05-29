import React from 'react'
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";



export default function Head() {

    const headbar = [
        {href:"#", name:"landing page"},
        {href:"#", name:"e-commerce"},
        {href:"#", name:"mobile app"},
        {href:"#", name:"logo desing"},
        {href:"#", name:"dashboard"},
        {href:"#", name:"icons"}
    ]
    return (
        <div className='flex items-center flex-col justify-center mt-20 gap-10'>
            <div className='flex items-center flex-col '>
                <div className='text-6xl'>Discover the world’s</div>
                <div className='text-6xl'>top designers</div>
                <div className='mt-5 text-xl'>Explore work from the most talented and accomplished designers</div>
                <div className='text-xl '>ready to take on your next project</div>
            </div>
            <div className='flex items-center justify-between bg-gray-200 w-180 h-13 rounded-full px-7 text-black hover:bg-white hover:border-2 hover:border-gray-200'>
                <input className='h-13 w-135 focus:border-none focus:outline-none' type="text" placeholder='What are you look for? ' />
                <div className='h-13 flex items-center gap-1 hover:cursor-pointer hover:text-gray-600'>
                    <h1 className='text-sm font-semibold'>Shots</h1>
                    <GoChevronDown className='mt-1' />
                </div>
                <div>
                    <CiSearch className='bg-pink-500 hover:bg-pink-400 text-white text-4xl p-2 rounded-full hover:cursor-pointer' />
                </div>
            </div>

            <div className='flex gap-5'>
                <div className='text-gray-400'>Trending Searches</div>
                {headbar.map((item,key) => (

                    <a key={key} className='bg-gray-200 px-4 py-1 text-sm rounded-full hover:bg-white hover:border-2 hover:border-gray-200' href={item.href}>{item.name}</a>

                ))}
            </div>
        </div>
    )
}
