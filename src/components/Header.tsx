
// import { useState } from 'react';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center mr-3">
//               <span className="text-white font-bold text-xl">C</span>
//             </div>
//             <span className="text-xl font-bold text-gray-900">Clahan Technologies</span>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
//             <div className="relative group">
//               <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
//                 Courses <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//               <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                 <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">DevOps Fundamentals</a>
//                 <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">DevSecOps Professional</a>
//                 <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">Cloud Native DevOps</a>
//               </div>
//             </div>
//             <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
//             <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Success Stories</a>
//             <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
//           </nav>

//           {/* CTA Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
//               Login
//             </Button>
//             <Button className="bg-blue-600 hover:bg-blue-700">
//               Enroll Now
//             </Button>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
//             <nav className="px-4 py-6 space-y-4">
//               <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors">Home</a>
//               <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors">Courses</a>
//               <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors">About</a>
//               <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors">Success Stories</a>
//               <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
//               <div className="pt-4 space-y-2">
//                 <Button variant="outline" className="w-full border-blue-600 text-blue-600">
//                   Login
//                 </Button>
//                 <Button className="w-full bg-blue-600 hover:bg-blue-700">
//                   Enroll Now
//                 </Button>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;


import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '../img/logo-blue.svg'; // adjust this path if needed
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 w-full"></header>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
            <Link to="/" className="flex items-center z-50"></Link>
          <div className="flex items-center">
            <img src={Logo} alt="Clahan Logo" className="w-30 h-10 mr-3" />
            {/* <span className="text-xl font-bold text-gray-900">Clahan Technologies</span> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Courses <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/courses/devops" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">DevOps & DevSecOps</Link>
                <Link to="/courses/python" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">Python Programming</Link>
                <Link to="/courses/sql" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">SQL & Database</Link>
              </div>
            </div>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            
            <Link to="/success-stories" className="text-gray-700 hover:text-blue-600 transition-colors">Success Stories</Link>
           <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>

          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
          // className="md:hidden p-2"
            className="md:hidden p-2 z-50 relative"            
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="px-4 py-6 space-y-4">
                           <Link 
                to="/" 
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <button 
                  className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                >
                  Courses
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobileCoursesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileCoursesOpen && (                  
          <div className="md:hidden fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40 max-h-[calc(100vh-4rem)] overflow-y-auto">
                    <Link 
                      to="/courses/devops" 
                      className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      DevOps & DevSecOps
                    </Link>
                    <Link 
                      to="/courses/python" 
                      className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Python Programming
                    </Link>
                    <Link 
                      to="/courses/sql" 
                      className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      SQL & Database
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                to="/about" 
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/success-stories" 
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Success Stories
              </Link>
              <Link 
                to="/contact" 
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full border-blue-600 text-blue-600">
                  Login
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Enroll Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
