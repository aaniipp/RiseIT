import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-dark-violet/95 backdrop-blur-sm fixed w-full z-50 border-b border-purple/20">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple to-bright-violet rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-white font-bold text-xl">RiseIT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-accent-yellow transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-accent-yellow transition-colors duration-300">
              About Us
            </Link>
            <Link to="/programs" className="text-white hover:text-accent-yellow transition-colors duration-300">
              Programs
            </Link>
            <Link to="/mentoring" className="text-white hover:text-accent-yellow transition-colors duration-300">
              Mentoring
            </Link>
            <Link to="/risetalk" className="text-white hover:text-accent-yellow transition-colors duration-300">
              RiseTalk
            </Link>
            <Link to="/partnership" className="text-white hover:text-accent-yellow transition-colors duration-300">
              Partnership
            </Link>
            <Link to="/join" className="text-white hover:text-accent-yellow transition-colors duration-300">
              Join Us
            </Link>
            <Link to="/contact" className="text-white hover:text-accent-yellow transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-accent-yellow focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-dark-violet/95 backdrop-blur-sm border-t border-purple/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-white hover:text-accent-yellow transition-colors duration-300">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-white hover:text-accent-yellow transition-colors duration-300">
                About Us
              </Link>
              <Link to="/programs" className="block px-3 py-2 text-white hover:text-accent-yellow transition-colors duration-300">
                Programs
              </Link>
              <Link to="/mentoring" className="block px-3 py-2 text-white hover:text-accent-yellow transition-colors duration-300">
                Mentoring
              </Link>
              <Link to="/risetalk" className="block px-3 py-2 text-white hover:text-accent-yellow transition-colors duration-300">
                RiseTalk
              </Link>
              <Link to="/partnership" className="block px-3 py-2 text-white hover:text-accent-yellow transition-colors duration-300">
                Partnership
              </Link>
              <Link to="/join" className="block px-3 py-2 text-white hover:text-accent-yellow transition-colors duration-300">
                Join Us
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-white hover:text-accent-yellow transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;