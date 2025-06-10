
// import { Quote, Linkedin, Twitter } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import founderImage from '../img/muraliimage.png';

// const FounderStory = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 text-gray-900">Meet Our Founder</h2>
//             <p className="text-xl text-gray-600">A journey from struggle to success</p>
//           </div>
          
//           <Card className="overflow-hidden">
//             <CardContent className="p-0">
//               <div className="grid md:grid-cols-2 gap-0">
//                 <div className="relative h-64 md:h-auto">
//                   <img 
//                     src={founderImage}
//                     alt="Founder"
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
//                 </div>
                
//                 <div className="p-8 md:p-12 flex flex-col justify-center">
//                   <div className="mb-6">
//                     <Quote className="h-12 w-12 text-blue-600 mb-4" />
//                     <blockquote className="text-lg text-gray-700 leading-relaxed italic mb-6">
//                       "I started my career struggling to break into tech without formal computer science education. 
//                       After years of self-learning and overcoming countless rejections, I finally landed my dream 
//                       DevOps role. Now, I'm passionate about helping others avoid the same struggles I faced."
//                     </blockquote>
//                   </div>
                  
//                   <div className="mb-6">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">Murali Mohan Mabbu</h3>
//                     <p className="text-gray-600 mb-4">CEO & Founder</p>
//                     <p className="text-gray-700 leading-relaxed">
//                       Former Senior DevOps Engineer . Over 10 years of experience 
//                       in enterprise DevOps implementations. Certified in AWS, Azure, and Kubernetes.
//                     </p>
//                   </div>
                  
//                   {/* <div className="flex items-center space-x-4">
//                     <Button variant="outline" size="sm" className="flex items-center" >
//                       <Linkedin className="h-4 w-4 mr-2" />
//                       Connect on LinkedIn
//                     </Button>
//                     <Button variant="outline" size="sm" className="flex items-center">
//                       <Twitter className="h-4 w-4 mr-2" />
//                       Follow on Twitter
//                     </Button>
//                   </div> */}
//                   <div className="flex items-center space-x-4">
//   <a
//     href="https://www.linkedin.com/in/murali-mohan-mabbu-b7348299/"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <Button variant="outline" size="sm" className="flex items-center">
//       <Linkedin className="h-4 w-4 mr-2" />
//       Connect on LinkedIn
//     </Button>
//   </a>

//   <Button variant="outline" size="sm" className="flex items-center">
//     <Twitter className="h-4 w-4 mr-2" />
//     Follow on Twitter
//   </Button>
// </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FounderStory;

import { Quote, Linkedin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import founderImage from '../img/muraliimage.png';

const FounderStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Meet Our Founder</h2>
            <p className="text-xl text-gray-600">A journey from struggle to success</p>
          </div>
          
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto order-1 md:order-1">
                  <img 
                    src={founderImage}
                    alt="Founder"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
                </div>
                
                <div className="p-6 md:p-12 flex flex-col justify-center order-2 md:order-2">
                  <div className="mb-6">
                    <Quote className="h-8 w-8 md:h-12 md:w-12 text-blue-600 mb-4" />
                    <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed italic mb-6">
                      "I started my career struggling to break into tech without formal computer science education. 
                      After years of self-learning and overcoming countless rejections, I finally landed my dream 
                      DevOps role. Now, I'm passionate about helping others avoid the same struggles I faced."
                    </blockquote>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Murali Mohan Mabbu</h3>
                    <p className="text-gray-600 mb-4">CEO & Founder</p>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      Former Senior DevOps Engineer . Over 10 years of experience 
                      in enterprise DevOps implementations. Certified in AWS, Azure, and Kubernetes.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                    <a
                      href="https://www.linkedin.com/in/murali-mohan-mabbu-b7348299/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button variant="outline" size="sm" className="flex items-center justify-center w-full sm:w-auto">
                        <Linkedin className="h-4 w-4 mr-2" />
                        Connect on LinkedIn
                      </Button>
                    </a>

                    <Button variant="outline" size="sm" className="flex items-center justify-center w-full sm:w-auto">
                      <X className="h-4 w-4 mr-2" />
                      Follow on X
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;

