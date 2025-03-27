import React from 'react';
const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xl font-bold">Jane</p>
            <p className="text-gray-400 text-sm">
              UI/UX Designer & Frontend Developer
            </p>
          </div>
          <div className="text-gray-400 text-sm">
            <p>&copy; {year} Jane Maina. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;