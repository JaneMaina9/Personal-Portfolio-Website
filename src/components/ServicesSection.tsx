import React from 'react';
import { MonitorIcon, PenToolIcon, LayoutIcon, CodeIcon } from 'lucide-react';
const ServicesSection = () => {
  const services = [{
    icon: <PenToolIcon className="w-12 h-12 text-blue-600 mb-4" />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user experiences through research, wireframing, prototyping, and usability testing.'
  }, {
    icon: <CodeIcon className="w-12 h-12 text-blue-600 mb-4" />,
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and performant web applications using modern frameworks and best practices.'
  }, {
    icon: <LayoutIcon className="w-12 h-12 text-blue-600 mb-4" />,
    title: 'Web Design',
    description: 'Designing visually appealing websites that align with brand identity while ensuring optimal user experience.'
  }, {
    icon: <MonitorIcon className="w-12 h-12 text-blue-600 mb-4" />,
    title: 'Responsive Design',
    description: 'Creating websites that provide optimal viewing experience across a wide range of devices.'
  }];
  return <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I offer a range of services to help businesses create impactful
            digital experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>)}
        </div>
        <div className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Recent Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="E-commerce Website" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-bold">E-commerce Website</h4>
                <p className="text-gray-600 text-sm mt-1">
                  UI/UX Design, Frontend Development
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Mobile Banking App" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-bold">Mobile Banking App</h4>
                <p className="text-gray-600 text-sm mt-1">UI/UX Design</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="Corporate Website" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-bold">Corporate Website</h4>
                <p className="text-gray-600 text-sm mt-1">
                  Web Design, Frontend Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;