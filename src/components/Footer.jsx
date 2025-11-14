import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-deep-black border-t border-purple/20">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple to-bright-violet rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-white font-bold text-xl">RiseIT</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              RiseIT Consulting is the first student-led IT consulting sandbox that bridges the gap between classroom learning and real industry practice.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/riseitconsulting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-yellow transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              <a 
                href="mailto:riseit.consulting@gmail.com" 
                className="text-gray-400 hover:text-accent-yellow transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-accent-yellow transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-accent-yellow transition-colors duration-300">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/mentoring" className="text-gray-400 hover:text-accent-yellow transition-colors duration-300">
                  Mentoring
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-gray-400 hover:text-accent-yellow transition-colors duration-300">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Email: riseit.consulting@gmail.com</span>
              </li>
              <li className="text-gray-400">
                <span className="block">Instagram: @riseitconsulting</span>
              </li>
              <li>
                <Link to="/contact" className="text-accent-yellow hover:text-yellow-300 transition-colors duration-300">
                  Contact Form →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 RiseIT Consulting. All rights reserved. | Learn. Fail. Rise.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;