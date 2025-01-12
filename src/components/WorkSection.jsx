import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
function WorkSection() {
    const projects = [
        {
            id: 1,
            title: 'Modern E-Commerce Web Application',
            description: 'A feature-rich e-commerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Firebase authentication for secure user management. The application provides a seamless shopping experience.',
            link: 'https://e-commerce-sage-omega.vercel.app',
            image: project1, // Replace with your project image
            date: 'April 2024',
        },
        {
            id: 2,
            title: 'Instagram Clone',
            description: 'A fully functional Instagram clone built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Firebase Authentication and Cloud Storage. This project replicates the core features of Instagram, providing an engaging social media experience.',
            link: 'https://insta-clone-mu-lemon.vercel.app/',
            image: project2, // Replace with your project image
            date: 'June 2024',
        },
        {
            id: 3,
            title: 'To-Do List Application',
            description: 'A clean and minimalistic to-do list application built using React.js and local storage to help users organize their daily tasks efficiently.',
            link: 'https://todo-react-app-khaki.vercel.app/',
            image:project3, // Replace with your project image
            date: 'March 2024',
        },
    ];

    return (
        <div className=' py-16' id='work'>
            <div className="w-[90%] md:w-[70%]  mx-auto text-white my-12">
                <h1 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-16">
                    My Works
                </h1>

                {/* Timeline Container */}
                <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {projects.map((project) => (
                        <div className=' group relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 overflow-hidden shadow-lg transition-transform transform hover:scale-105' key={project.id}>
                            <img src={project.image} alt=""
                                className=' w-auto h-40 rounded-lg mb-4 transition-transform transform group-hover:scale-110 '
                            />
                            <h2 className=' text-xl font-semibold text-yellow-300 mb-2 '>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className=' absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-40 transition-opacity'></div>

                            <a href={`${project.link}`} target='_blank'
                                className=' absolute bottom-4 right-4 font-bold text-purple-400 group-hover:text-yellow-400 transition-colors text-sm'
                            > View → </a>
                        </div>

                    ))}

                </div>
            </div>
        </div>
    );
}

export default WorkSection;
