import React from 'react';
import Lottie from 'react-lottie-player';
import Html from "../assets/html.json";
import Css from "../assets/css.json";
import JavaScript from "../assets/javascript.json";
import ReactJs from "../assets/reactjs.json";
import Nodejs from "../assets/nodejs.json";
import Mongodb from "../assets/mongob.json";
import Github from "../assets/github.json";
import ReactNative from "../assets/reactNative.json";
import Tailwind from "../assets/tailwind-css.png";
import Express from "../assets/express.png";
import Typescript from "../assets/typescript.png";



function SkillsSection() {
    return (
        <div className=" py-16" id='skills' >
            <div className="w-[90%] md:w-[70%] mx-auto text-white">
                {/* Title */}
                <h1 className="text-center text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
                    My Skills
                </h1>

                {/* Main content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Skill 1 */}
                    <div className="flex items-center justify-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold mb-4">HTML</h3>
                            {/* <div className="w-24 h-24 md:w-28 md:h-28 mx-auto"> */}
                            <Lottie animationData={Html} play loop
                                style={{ width: '100%', height: 'auto' }}
                            />
                            {/* </div> */}
                        </div>
                    </div>

                    {/* Add more skills with different color gradients */}
                    <div className="flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold mb-4">CSS</h3>
                            {/* You can add your CSS animation here */}
                            <Lottie animationData={Css} play loop
                                style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </div>

                    <div className="flex items-center justify-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold mb-4">JavaScript</h3>
                            {/* Add your JS animation here */}
                            <Lottie animationData={JavaScript} play loop
                            //  style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold mb-4">Typescript</h3>
                            {/* Add your JS animation here */}
                          <img src={Typescript} alt="" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold mb-4">React JS</h3>
                            {/* Add your JS animation here */}
                            <Lottie animationData={ReactJs} play loop
                            //  style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold mb-4">Tailwind CSS</h3>
                            {/* Add your JS animation here */}
                            <img src={Tailwind} />
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-gradient-to-r from-green-300 via-green-400 to-green-500 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold mb-4">Node JS</h3>
                            {/* Add your JS animation here */}
                            <Lottie animationData={Nodejs} play loop
                            //  style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold mb-4">Express JS</h3>
                            {/* Add your JS animation here */}
                           <img src={Express} alt="" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-gradient-to-br from-green-300 via-green-400 to-green-500  p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold mb-4">MongoDB</h3>
                            {/* Add your JS animation here */}
                            <Lottie animationData={Mongodb} play loop
                            //  style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold mb-4">React Native</h3>
                            {/* Add your JS animation here */}
                            <Lottie animationData={ReactNative} play loop
                            //  style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold mb-4">Github</h3>
                            {/* Add your JS animation here */}
                            <Lottie animationData={Github} play loop
                            //  style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>


                    {/* More skills can be added here */}
                </div>
            </div>
        </div>
    );
}

export default SkillsSection;
