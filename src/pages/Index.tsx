import { ArrowRight, Users, Trophy, Star, CheckCircle, Play, Book, Calendar, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import TestimonialCard from '@/components/TestimonialCard';
import StatsSection from '@/components/StatsSection';
import FounderStory from '@/components/FounderStory';


const Index = () => {
  const courses = [
    
    {
      title: "DevSecOps Professional",
      description: "Advanced security integration in DevOps workflows and compliance frameworks",
      duration: "16 weeks", 
      level: "Advanced",
      price: "₹18000",
      features: ["Security Tools", "Kubernetes", "Docker", "Cloud Platforms", "Microservices","Compliance", "Advanced Projects", "Mentorship"],
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      title: "Python",
      description: "Master the fundamentals of Python programming, from syntax to advanced concepts like OOP and file handling.",
      duration: "soon",
      level: "Stay tune for updates",
      price: "soon",
      features: ["Hands-on Labs", "Real Projects", "Job Assistance", "Certificate"],
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "SQL",
      description: "Kubernetes, Docker, and modern cloud-native development practices",
      duration: "--",
      level: "Stay tune for updates", 
      price: "soon",
      features: ["DDL", "DML", "DQL", "TCL","JOINS"],
      image: "photo-1488590528505-98d2b5aba04b"
    }
  ];
    const bannerSlides = [
    {
      id: 1,
      title: "New DevOps Batch Starting Soon!",
      subtitle: "Join Our Next Cohort - Limited Seats Available",
      description: "Transform your career with our comprehensive DevOps training program. Expert instructors, hands-on projects, and job guarantee.",
      image: "photo-1649972904349-6e44c42644a7",
      ctaText: "Enroll Now",
      bgGradient: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "Python & SQL Courses Open!",
      subtitle: "Master Programming & Database Skills",
      description: "Build your foundation in programming and data management. Perfect for beginners and career switchers.",
      image: "photo-1518770660439-4636190af475",
      ctaText: "View Courses",
      bgGradient: "from-green-600 to-blue-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "DevOps Engineer at TechCorp",
      content: "The career transition program helped me land my dream job. The hands-on approach and real-world projects made all the difference.",
      rating: 5,
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      name: "Michael Chen", 
      role: "Senior DevOps at StartupXYZ",
      content: "Excellent instructor support and comprehensive curriculum. I went from zero DevOps knowledge to getting hired in just 4 months.",
      rating: 5,
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      name: "Emma Rodriguez",
      role: "Cloud Engineer at DataFlow",
      content: "The practical labs and real project experience gave me confidence in interviews. Highly recommend for career switchers.",
      rating: 5,
      image: "photo-1605810230434-7631ac76ec81"
    },
    {
      name: "David Kumar",
      role: "DevSecOps Engineer at CyberTech",
      content: "The DevSecOps course was incredibly detailed. The security integration techniques I learned are exactly what I use daily in my current role.",
      rating: 5,
      image: "photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Lisa Thompson",
      role: "Cloud Solutions Architect at CloudFirst",
      content: "From a non-tech background to landing a senior role in 6 months. The mentorship and job assistance programs are phenomenal.",
      rating: 5,
      image: "photo-1494790108755-2616b332c5e1"
    },
    {
      name: "Raj Patel",
      role: "Senior DevOps Consultant at TechConsult",
      content: "The Kubernetes and Docker modules were outstanding. I'm now leading containerization projects for Fortune 500 companies.",
      rating: 5,
      image: "photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Amanda Foster",
      role: "Site Reliability Engineer at ScaleUp",
      content: "The real-world scenarios and incident management training prepared me perfectly for my SRE role. Couldn't be happier with my career change.",
      rating: 5,
      image: "/Test_img/mypic4.jpg"
    },
    {
      name: "James Wilson",
      role: "Lead DevOps Engineer at FinTech Pro",
      content: "The CI/CD pipeline knowledge I gained here is invaluable. I've successfully automated deployment processes that save our team hours daily.",
      rating: 5,
      image: "/Test_img/muraliimage.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
              🚀 Transform Your Career in Tech
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent leading-tight">
              Master DevOps & Launch Your Tech Career
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of successful graduates who transitioned to high-paying DevOps roles. 
              Practical training designed for freshers, graduates, and career switchers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg group">
                Start Your DevOps Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg group">
                <Play className="mr-2 h-5 w-5" />
                Watch Success Stories
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Job Guarantee Program
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Industry Expert Instructors
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Hands-on Projects
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
         </section>

      {/* Banner Slider Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {bannerSlides.map((slide) => (
                  <CarouselItem key={slide.id}>
                    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${slide.bgGradient} text-white`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12">
                        <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
                          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            {slide.title}
                          </h2>
                          <h3 className="text-xl lg:text-2xl mb-4 opacity-90">
                            {slide.subtitle}
                          </h3>
                          <p className="text-lg mb-6 opacity-80 max-w-2xl">
                            {slide.description}
                          </p>
                          <Button 
                            size="lg" 
                            variant="secondary" 
                            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3"
                          >
                            {slide.ctaText}
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="w-80 h-60 lg:w-96 lg:h-72 rounded-xl overflow-hidden shadow-2xl">
                            <img
                              src={`https://images.unsplash.com/${slide.image}?auto=format&fit=crop&w=800&q=80`}
                              alt={slide.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Choose Your Learning Path</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Structured courses designed to take you from beginner to industry-ready professional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Book className="mr-2 h-5 w-5" />
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <FounderStory />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Clahan Technologies?</h2>
            <p className="text-xl text-gray-600">We understand the challenges of breaking into tech</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Job-Focused Training</h3>
              <p className="text-gray-600">Curriculum designed with hiring managers to match industry requirements</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1:1 Mentorship</h3>
              <p className="text-gray-600">Personal guidance from industry experts throughout your journey</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real Projects</h3>
              <p className="text-gray-600">Build portfolio with actual DevOps implementations and deployments</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Schedule</h3>
              <p className="text-gray-600">Weekend and evening batches for working professionals</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Success Stories</h2>
            <p className="text-xl text-gray-600">See how our graduates transformed their careers</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <TestimonialCard {...testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our next batch starting soon. Limited seats available with job guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
              Book Free Career Consultation
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg text-white border-white hover:bg-white hover:text-blue-600">
              Download Course Syllabus
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
