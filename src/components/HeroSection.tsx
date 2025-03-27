import React from 'react';
const HeroSection = () => {
  return <section id="home" className="relative w-full min-h-screen flex items-center">
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-cover bg-center bg-no-repeat z-0" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80')",
      backgroundAttachment: 'fixed'
    }}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
            Hi, I'm <span className="text-blue-600">Jane Maina</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            A UI/UX Designer, Frontend Developer, and Web Designer
          </p>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({
          behavior: 'smooth'
        })} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </section>;
};
export default HeroSection;