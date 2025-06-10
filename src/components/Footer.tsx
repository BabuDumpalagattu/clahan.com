
// import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, X, Youtube } from 'lucide-react';

import Logo from '../img/Logo.svg'; // adjust this path if needed

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center mr-3"> */}
                <img src={Logo} alt="Clahan Logo" className="w-30 h-10 mr-3" />
                {/* <span className="text-white font-bold text-xl">C</span> */}
              
              {/* <span className="text-xl font-bold">Clahan Technologies</span> */}
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering careers through practical DevOps and DevSecOps training. 
              Join thousands of successful graduates who transformed their careers.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/clahantechnologies" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <X className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/99364695/admin/dashboard/" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/clahan_technologies/" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
               <a href="https://www.youtube.com/@Clahan_Technologies" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              {/* <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Courses</a></li> */}
              <li><a href="/success-stories" className="text-gray-300 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Courses</h3>
            <ul className="space-y-3">
              <li><a href="/courses/devops" className="text-gray-300 hover:text-white transition-colors">DevSecOps & DevSecOps</a></li>
              <li><a href="/courses/python" className="text-gray-300 hover:text-white transition-colors">Python</a></li>
              <li><a href="/courses/sql" className="text-gray-300 hover:text-white transition-colors">SQL and Database</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  2nd floor, 29/2, 1st Main Rd, Old Madiwala,<br />
                  Maruti Nagar, 1st Stage, BTM Layout,<br />
                  Bengaluru, Karnataka 560068
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <p className="text-gray-300">+91 8553370865</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <p className="text-gray-300">info@clahantechnologies.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Clahan Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
