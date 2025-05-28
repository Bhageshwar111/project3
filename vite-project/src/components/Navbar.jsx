// import React, { useState } from 'react'
// import { IoChevronDownOutline } from "react-icons/io5";
// import logo from '../assets/image/dribbble logo.png'
// import { HiMiniBars3BottomLeft } from "react-icons/hi2";
// import { RxCross2 } from "react-icons/rx";




// export default function Navbar() {


//     const [open, close] = useState(false)


//     const togglemenu = () => {
//         close(!open)
//     }



//     return (
//         <div>


//             <nav className='px-10 py-3.5 flex items-center justify-between relative '>


//                 <div className='flex items-center md:gap-20  gap-7'>


//                     <div className='flex md:hidden text-2xl  hover:cursor-pointer' onClick={togglemenu}>

//                         {open ? <RxCross2 /> : <HiMiniBars3BottomLeft />}

//                     </div>


//                     {
//                         open && (
//                             <div className='flex gap-7 absolute top-21 flex-col border-t-1 w-full left-0 px-10 py-10'>


//                                 <a href="#">
//                                     <div className='flex items-center gap-1 text-sm'>
//                                         <div className='font-bold text-xl hover:text-gray-500'>Explore</div>
//                                         <div><IoChevronDownOutline /></div>
//                                     </div>
//                                 </a>


//                                 <a href="#">
//                                     <div className='flex items-center gap-1 text-sm '>
//                                         <div className='font-bold text-xl hover:text-gray-500'>Hire a Designer</div>
//                                         <div><IoChevronDownOutline /></div>
//                                     </div>
//                                 </a>


//                                 <a href="#">
//                                     <div className='flex items-center text-sm hover:text-gray-500'>
//                                         <div className='font-bold text-xl '>Find Jobs</div>
//                                     </div>
//                                 </a>


//                                 <a href="#">
//                                     <div className='flex items-center text-sm hover:text-gray-500'>
//                                         <div className='font-bold text-xl '>Blog</div>
//                                     </div>
//                                 </a>


//                             </div>
//                         )
//                     }




//                     <div><img className='h-13 w-23 hover:cursor-pointer ' src={logo} alt="" /></div>

//                     <div className='hidden md:flex gap-7'>


//                         <a href="#">
//                             <div className='flex items-center gap-1 text-sm'>
//                                 <div className='font-semibold hover:text-gray-500'>Explore</div>
//                                 <div><IoChevronDownOutline /></div>
//                             </div>
//                         </a>


//                         <a href="#">
//                             <div className='flex items-center gap-1 text-sm '>
//                                 <div className='font-semibold hover:text-gray-500'>Hire a Designer</div>
//                                 <div><IoChevronDownOutline /></div>
//                             </div>
//                         </a>


//                         <a href="#">
//                             <div className='flex items-center text-sm hover:text-gray-500'>
//                                 <div className='font-semibold'>Find Jobs</div>
//                             </div>
//                         </a>


//                         <a href="#">
//                             <div className='flex items-center text-sm hover:text-gray-500'>
//                                 <div className='font-semibold'>Blog</div>
//                             </div>
//                         </a>


//                     </div>


//                 </div>


//                 <div className='flex items-center gap-7 '>
//                     <a className='hidden md:block font-semibold text-sm hover:text-gray-500' href="#">Sign up</a>
//                     <a className='font-semibold text-sm text-white bg-black h-12 w-22 rounded-3xl flex items-center justify-center hover:bg-gray-600 duration-300' href="#">Log in</a>
//                 </div>





//             </nav>



//         </div>
//     )
// }


import React, { useState } from 'react';
import { IoChevronDownOutline } from "react-icons/io5";
import logo from '../assets/image/dribbble logo.png';
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

// Sample dropdown and nav data
const navItems = [
    {
        title: "Explore",
        dropdown: ["Discover", "Trending", "New & Noteworthy"],
    },
    {
        title: "Hire a Designer",
        dropdown: ["Post a Job", "Freelancers", "Agencies"],
    },
    {
        title: "Find Jobs",
    },
    {
        title: "Blog",
    }
];

export default function Navbar() {
    const [open, close] = useState(false);
    const [dropdown, close2] = useState(null);

    const toggleMenu = () => {
        close(!open)
    };

    const handleDropdownToggle = (index) => {
        close2(dropdown === index ? null : index);
    };

    return (
        <div>
            <nav className="px-10 py-3.5 flex items-center justify-between relative">
                <div className="flex items-center md:gap-20 gap-7">
                    {/* Mobile Toggle Icon */}
                    <div className="flex md:hidden text-2xl hover:cursor-pointer" onClick={toggleMenu}>
                        {open ? <RxCross2 /> : <HiMiniBars3BottomLeft />}
                    </div>

                    {/* Mobile Menu */}
                    {open && (
                        <div className="flex gap-7 absolute top-21 flex-col border-t-1 w-full left-0 px-10 py-10 bg-white z-10">
                            {navItems.map((item, key) => (
                                <div key={key} className="relative">
                                    <a href="#" onClick={() => item.dropdown && handleDropdownToggle(index)}>
                                        <div className="flex items-center gap-1 text-sm">
                                            <div className="font-bold text-xl hover:text-gray-500">{item.title}</div>
                                            {item.dropdown && <IoChevronDownOutline />}
                                        </div>
                                    </a>


                                    {dropdown === index && item.dropdown && (
                                        <div className="ml-4 mt-2 flex flex-col text-sm">
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <a href="#" key={subIndex} className="hover:text-gray-500">
                                                    {subItem}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}


                    <div>
                        <img className="h-13 w-23 hover:cursor-pointer" src={logo} alt="Logo" />
                    </div>


                    <div className="hidden md:flex gap-7">
                        {navItems.map((item, key) => (
                            <div key={KeyboardEvent} className="relative group">
                                <a href="#" className="flex items-center gap-1 text-sm">
                                    <div className="font-semibold hover:text-gray-500">{item.title}</div>
                                    {item.dropdown && <IoChevronDownOutline />}
                                </a>


                                {item.dropdown && (
                                    <div className="absolute top-full left-0 mt-2 bg-white shadow-md p-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                                        {item.dropdown.map((subItem, subIndex) => (
                                            <a href="#" key={subIndex} className="block px-2 py-1 text-sm hover:text-gray-500">
                                                {subItem}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>


                <div className="flex items-center gap-7">
                    <a className="hidden md:block font-semibold text-sm hover:text-gray-500" href="#">Sign up</a>
                    <a className="font-semibold text-sm text-white bg-black h-12 w-22 rounded-3xl flex items-center justify-center hover:bg-gray-600 duration-300" href="#">Log in</a>
                </div>
            </nav>
        </div>
    );
}
