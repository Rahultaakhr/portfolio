import React from 'react'

function Footer() {
    return (
        <footer>
            <div className=' text-center text-white font-semibold opacity-100 py-2'>
                <ul className='  flex gap-6 items-center justify-center text-xl md:text-4xl py-2 font-bold'>
                    <li className=' bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-pink-500 to-pink-700'><a href="https://www.instagram.com/lifelike.code" target='_blank'><i className="fa-brands fa-instagram"></i></a></li>
                    <li className=' bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700'><a href="https://www.x.com/rahultaakhr" target='_blank'><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li className=' bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900'><a href="https://www.linkedin.com/in/rahul-taak-hr" target='_blank'><i className="fa-brands fa-linkedin"></i></a></li>
                </ul>
                <p>Design By Rahul  &#169; 2025</p>
            </div>
        </footer>
    )
}

export default Footer