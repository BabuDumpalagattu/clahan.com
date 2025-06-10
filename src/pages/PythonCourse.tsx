import { CheckCircle, Clock, Users, Award, Star, Code, Brain, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PythonCourse = () => {
  const modules = [
    {
      title: 'Python Fundamentals',
      items: [
        'Python Installation and Environment Setup',
        'Variables, Data Types, and Operators',
        'Control Structures (if-else, loops)',
        'Functions and Modules',
        'File Handling and Exception Handling',
        'Object-Oriented Programming Concepts'
      ]
    },
    {
      title: 'Advanced Python & Libraries',
      items: [
        'Data Structures (Lists, Dictionaries, Sets)',
        'NumPy for Numerical Computing',
        'Pandas for Data Manipulation',
        'Matplotlib & Seaborn for Data Visualization',
        'Web Scraping with BeautifulSoup',
        'API Development with Flask/FastAPI'
      ]
    },
    {
      title: 'Specialized Applications',
      items: [
        'Database Connectivity (SQLite, MySQL)',
        'Introduction to Machine Learning with Scikit-learn',
        'Web Development with Django/Flask',
        'Automation and Scripting',
        'Testing with Pytest',
        'Deployment and Best Practices'
      ]
    }
  ];

  const features = [
    'Project-Based Learning: Build real-world applications and portfolios',
    'Industry-Relevant Skills: Learn frameworks and libraries used in top companies',
    'Comprehensive Coverage: From basics to advanced concepts and specializations',
    'Career Guidance: Interview preparation and job placement assistance'
  ];

  const tools = [
    { name: 'Python', icon: Code },
    { name: 'NumPy', icon: Brain },
    { name: 'Pandas', icon: Brain },
    { name: 'Django', icon: Code },
    { name: 'Flask', icon: Code },
    { name: 'Scikit-learn', icon: Brain },
    { name: 'Matplotlib', icon: Brain },
    { name: 'PyCharm', icon: Code },
  ];

  const careerPaths = [
    { title: 'Backend Developer', description: 'Build scalable web applications and APIs', icon: Code },
    { title: 'Data Analyst', description: 'Analyze data and create insights for business decisions', icon: Brain },
    { title: 'Data Scientist', description: 'Build predictive models and machine learning solutions', icon: Brain },
    { title: 'Automation Engineer', description: 'Create scripts and tools for process automation', icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-900 via-green-800 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🐍 Most Versatile Language</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete Python Programming Course
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              From Beginner to Professional Developer
            </p>
            <p className="text-lg mb-8 text-green-50 max-w-3xl mx-auto">
              Master Python programming and unlock opportunities in web development, data science, 
              automation, and machine learning. Perfect for beginners and professionals alike.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100">
                Enroll Now - ₹18,000
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-900">
                Download Syllabus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Duration</h3>
                <p className="text-gray-600">3-4 Months</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Batch Size</h3>
                <p className="text-gray-600">Max 18 Students</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Certification</h3>
                <p className="text-gray-600">Industry Recognized</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Rating</h3>
                <p className="text-gray-600">4.9/5 (300+ Reviews)</p>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Python Course?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-l-4 border-l-green-600">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Course Modules */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Course Curriculum</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {modules.map((module, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-900">{module.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {module.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Career Paths */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Career Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {careerPaths.map((path, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <path.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">{path.title}</h3>
                    <p className="text-sm text-gray-600">{path.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Tools & Libraries</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <tool.icon className="h-12 w-12 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold">{tool.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Begin Your Python Journey!</h2>
                <p className="text-xl mb-8">Join thousands of students who have launched successful careers with Python</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100">
                    Enroll Now - ₹18,000
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-900">
                    Talk to Counselor
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PythonCourse;