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
          <h4 className="font-bold">Senior UI/UX Designer</h4>
          <p className="text-gray-600">TechCorp Inc. | 2020 - Present</p>
          <p className="mt-2">
            Led design initiatives for enterprise applications, improving user
            satisfaction by 35% and decreasing onboarding time by 25%.
          </p>
        </div>
        <div className="border-l-2 border-blue-600 pl-4">
          <h4 className="font-bold">Frontend Developer</h4>
          <p className="text-gray-600">WebSolutions | 2018 - 2020</p>
          <p className="mt-2">
            Developed responsive web applications using React and collaborated
            with design teams to implement pixel-perfect interfaces.
          </p>
        </div>
        <div className="border-l-2 border-blue-600 pl-4">
          <h4 className="font-bold">Web Designer</h4>
          <p className="text-gray-600">Creative Agency | 2016 - 2018</p>
          <p className="mt-2">
            Created visually appealing websites for clients across various
            industries, focusing on user-centered design principles.
          </p>
        </div>
      </div>,
    education: <div className="space-y-6">
        <div className="border-l-2 border-blue-600 pl-4">
          <h4 className="font-bold">Master's in Human-Computer Interaction</h4>
          <p className="text-gray-600">University of Design | 2015 - 2016</p>
          <p className="mt-2">
            Focused on user research methodologies and interaction design
            principles.
          </p>
        </div>
        <div className="border-l-2 border-blue-600 pl-4">
          <h4 className="font-bold">Bachelor's in Computer Science</h4>
          <p className="text-gray-600">Tech University | 2011 - 2015</p>
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
  return <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm a passionate UI/UX designer, frontend developer, and web
            designer with over 5 years of experience creating beautiful,
            functional, and user-centered digital experiences.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-8">
          <div className="w-full md:w-1/3">
            <img src="/public/jane.jpeg" alt="Jane Maina" className="rounded-lg shadow-md w-full h-auto object-cover" />
          </div>
          <div className="w-full md:w-2/3">
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                I combine my technical skills with creative design thinking to
                build digital solutions that are not only visually appealing but
                also highly functional and intuitive. My approach centers around
                understanding user needs and business goals to deliver
                exceptional digital experiences.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                With expertise spanning UI/UX design, frontend development, and
                web design, I bring a holistic perspective to every project. I'm
                passionate about creating accessible, responsive, and
                performance-optimized websites and applications.
              </p>
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
      </div>
    </section>;
};
export default AboutSection;