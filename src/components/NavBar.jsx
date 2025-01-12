import React, { useState } from 'react'

function NavBar() {
    const [navActive, setNavActive] = useState(false)
    return (
        <>
            <div className=' h-14 w-full px-3 sticky top-0 sm:top-2 rounded-md overflow-hidden z-10  xl:max-w-[1280px] container m-auto flex items-center justify-between'>
                <div className=' text-white text-2xl font-semibold '>
                    <h2 className=''><a href="/">Rahul Taak</a></h2>
                </div>
                <div>
                    <ul className=' sm:flex gap-5 text-white text-xl font-semibold hidden scroll-smooth  '>
                        <li className=' hover:scale-110 hover:-translate-y-1 duration-300 '><a href="#home">Home</a></li>
                        <li className=' hover:scale-110 hover:-translate-y-1 duration-300'><a href="#skills">Skills</a></li>
                        <li className=' hover:scale-110 hover:-translate-y-1 duration-300'><a href="#work">Work</a></li>
                        <li className=' hover:scale-110 hover:-translate-y-1 duration-300'><a href="#about">About Me</a></li>
                    </ul>
                  
                </div>
                <div className=' absolute inset-0 bg-gradient-to-tr from-purple-600 via-blue-600 to-pink-600 -z-10'></div>
            </div>
        
        </>
    )
}

export default NavBar