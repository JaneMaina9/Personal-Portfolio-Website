import React, { useState } from 'react';
const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const tabs = {
    skills: <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">UI/UX Design</h4>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-blue-600 h-2 rounded-full w-[90%]"></div>
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-2">Frontend Development</h4>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-blue-600 h-2 rounded-full w-[85%]"></div>
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-2">Web Design</h4>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-blue-600 h-2 rounded-full w-[95%]"></div>
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-2">Responsive Design</h4>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-blue-600 h-2 rounded-full w-[80%]"></div>
          </div>
        </div>
      </div>,
    experience: <div className="space-y-6">
        <div className="border-l-2 border-blue-600 pl-4">
          <h4 className="font-bold">UI/UX Designer</h4>
          <p className="text-gray-600"> KIBOKO DAO |2023 - Present</p>
          <p className="mt-2">
            Led design initiatives for enterprise applications, improving user
            satisfaction by 35% and decreasing onboarding time by 25%.
          </p>
        </div>
        <div className="border-l-2 border-blue-600 pl-4">
          <h4 className="font-bold">Frontend Developer</h4>
          <p className="text-gray-600">2024 - Present</p>
          <p className="mt-2">
            Developed responsive web applications using React and collaborated
            with design teams to implement perfect interfaces.
          </p>
        </div>
        <div className="border-l-2 border-blue-600 pl-4">
          <h4 className="font-bold">Web Designer</h4>
          <p className="text-gray-600">Creative Agency | 2023 - 2024</p>
          <p className="mt-2">
            Created visually appealing websites for clients across various
            industries, focusing on user-centered design principles.
          </p>
        </div>
      </div>,
    education: <div className="space-y-6">
        <div className="border-l-2 border-blue-600 pl-4">
          <h4 className="font-bold">Certificate in Arts and Design </h4>
          <p className="text-gray-600">University of Nairobi |2021 - 2022 </p>
          <p className="mt-2">
            Focused on user research methodologies and interaction design
            principles.
          </p>
        </div>
        <div className="border-l-2 border-blue-600 pl-4">
          <h4 className="font-bold">Sofware Engineering</h4>
          <p className="text-gray-600"> University | 2020 - 2024</p>
          <p className="mt-2">
            Specialized in web development and software engineering with honors.
          </p>
        </div>
        <div className="border-l-2 border-blue-600 pl-4">
          <h4 className="font-bold">Certifications</h4>
          <p className="mt-2">
            Google UX Design Professional Certificate, Adobe Certified Expert,
            Frontend Web Developer Certification
          </p>
        </div>
      </div>
  };
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-8">
          <div className="w-full md:w-1/3">
            <img
              src="/images/jane.jpeg"
              alt="Jane Maina"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-2/3">
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                I'm Jane Maina, a creative and detail driven Frontend developer with over 3 years of experience crafting seamless,
                functional, and visually striking web experiences.
                With a deep understanding of design systems, responsive layouts, and modern frontend frameworks, I bridge the gap
                between design and development to build digital products that truly resonate with users.
                My work blends creative storytelling with scalable code ensuring every interface is both beautiful and built to perform.
                Whether collaborating on startups or launching independent projects, I focus on innovation, accessibility, and user satisfaction at every stage.
                My approach centers around understanding user needs and business goals to deliver exceptional digital experiences.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                With expertise spanning UI/UX design, frontend development, and web design, I bring a holistic perspective to every project.
                I'm passionate about creating accessible, responsive, and performance-optimized websites and applications.
              </p>
            </div>
            </div>
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex space-x-8">
                {Object.keys(tabs).map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`py-4 font-medium text-sm capitalize border-b-2 transition-colors ${activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                    {tab}
                  </button>)}
              </nav>
            </div>
            <div className="py-4">{tabs[activeTab as keyof typeof tabs]}</div>
          </div>
        </div>
    </section>
  )
};
export default AboutSection;