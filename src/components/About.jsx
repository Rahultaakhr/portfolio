import React from 'react';

function About() {
    return (
        <div className="py-8  text-white" id='about'>
            <div className="w-[90%] md:w-[70%] mx-auto">
                <h1 className="text-center font-bold text-3xl md:text-4xl mb-6 text-shadow-md">
                    About Me
                </h1>
                <p className="text-lg md:text-xl leading-relaxed mb-4 text-shadow-sm">
                    Hey there! I'm Rahul 👋, a full-stack developer with a passion for creating technology that makes a real difference. 
                    I specialize in React Native, MERN stack, and TypeScript, but what truly excites me is the opportunity to build things that solve problems 
                    and make people's lives a little easier.
                </p>
                <p className="text-lg md:text-xl leading-relaxed mb-4 text-shadow-sm">
                    Coding for me isn’t just about writing clean code — it’s about crafting experiences that feel intuitive, seamless, and impactful. 
                    Whether I’m building mobile apps or developing full-stack solutions, I approach every project with the same enthusiasm and drive to 
                    make it the best it can be.
                </p>
                <p className="text-lg md:text-xl leading-relaxed mb-4 text-shadow-sm">
                    When I'm not deep in code, you’ll probably find me with a cup of coffee in hand, learning something new, or brainstorming ideas for my next project. 
                    I love connecting with other passionate creators, so feel free to reach out — let’s collaborate and make something amazing together!
                </p>
            </div>
        </div>
    );
}

export default About;
