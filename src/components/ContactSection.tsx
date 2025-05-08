import React from 'react';
import { PhoneIcon, SendIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! I will get back to you soon.');
  };
  return <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-12">
          <div className="w-full md:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
              <div className="flex items-center mb-6">
                <SendIcon className="w-5 h-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">mainajane4345@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center mb-8">
                <PhoneIcon className="w-5 h-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+254704273508</p>
                </div>
              </div>
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                  <InstagramIcon className="w-5 h-5 text-gray-700" />
                </a>
                <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                  <TwitterIcon className="w-5 h-5 text-gray-700" />
                </a>
                <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                  <LinkedinIcon className="w-5 h-5 text-gray-700" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;