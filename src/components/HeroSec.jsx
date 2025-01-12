import React from 'react';
import Lottie from 'react-lottie-player';
import Animation from "../assets/Animation2.json";

function HeroSec() {
    return (
        <div className="relative xl:max-w-[1280px] p-2 py-6 container mx-auto flex flex-col md:flex-row justify-between items-center">
            {/* Dark Overlay */}
            {/* <div className="absolute w-full inset-0 bg-black bg-opacity-40 -z-10"></div> */}

            {/* Left Section */}
            <div className="flex w-full flex-col items-start space-y-6 md:w-1/2">
                {/* Name */}
                <h1 className="animate-typing overflow-hidden whitespace-nowrap text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg animate-text-glow">
                    Hi, I'm <span className="text-white drop-shadow-md">Rahul</span> 👋
                </h1>

                {/* Title */}
                <p className="text-lg font-semibold text-gray-100 tracking-wide drop-shadow-md">
                    🚀 <span className="text-blue-300">Full-Stack Developer</span> | <span className="text-pink-400">React Native Enthusiast</span>
                </p>

                {/* Description */}
                <p className="text-gray-300 max-w-md text-base leading-relaxed drop-shadow-sm">
                    I love turning ideas into reality through clean code and innovative solutions.
                    With expertise in <span className="text-blue-300 font-bold">React Native</span>, <span className="text-purple-300 font-bold">MERN stack</span>, and
                    <span className="text-pink-400 font-bold">TypeScript</span>, I build seamless experiences that solve real-world problems.
                </p>

                {/* Button */}
                <button className="mt-4 px-8 py-3 text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-purple-500/50 hover:scale-105 transform transition-all duration-300">
                    <a href="public\resume.pdf" download={"Rahul_resume.pdf"}> View Resume <span className="inline-block ml-2">➡️</span></a>
                </button>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2">
                <Lottie
                    animationData={Animation}
                    play
                    loop
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
        </div>
    );
}

export default HeroSec;
