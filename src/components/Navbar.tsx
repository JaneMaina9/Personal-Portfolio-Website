import React, { useEffect, useState } from 'react';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Jane</div>
        <div className="space-x-8 hidden md:flex">
          {['home', 'about', 'services', 'portfolio', 'contact'].map(item => <button key={item} onClick={() => scrollToSection(item)} className="text-gray-800 hover:text-gray-600 transition-colors capitalize">
              {item}
            </button>)}
        </div>
        <div className="md:hidden">
          {/* Mobile menu button - simplified for now */}
          <button className="text-gray-800">Menu</button>
        </div>
      </div>
    </nav>;
};
export default Navbar;