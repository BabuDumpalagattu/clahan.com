import { CheckCircle, Clock, Users, Award, Star, Database, BarChart, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SQLCourse = () => {
  const modules = [
    {
      title: 'SQL Fundamentals',
      items: [
        'Introduction to Databases and RDBMS',
        'SQL Syntax and Basic Commands',
        'SELECT Statements and Data Retrieval',
        'Filtering Data with WHERE Clause',
        'Sorting and Grouping Data',
        'Working with NULL Values'
      ]
    },
    {
      title: 'Advanced SQL Concepts',
      items: [
        'JOIN Operations (INNER, LEFT, RIGHT, FULL)',
        'Subqueries and Correlated Queries',
        'Window Functions and Analytical Queries',
        'Common Table Expressions (CTEs)',
        'Stored Procedures and Functions',
        'Triggers and Views'
      ]
    },
    {
      title: 'Database Design & Performance',
      items: [
        'Database Normalization and Design Principles',
        'Indexing Strategies and Performance Tuning',
        'Query Optimization Techniques',
        'Transaction Management and ACID Properties',
        'Backup and Recovery Strategies',
        'Security and User Management'
      ]
    }
  ];

  const features = [
    'Hands-on Practice: Work with real databases and datasets',
    'Industry-Standard Tools: Learn MySQL, PostgreSQL, and SQL Server',
    'Project-Based Learning: Build complete database solutions',
    'Career Support: Resume guidance and interview preparation for SQL roles'
  ];

  const tools = [
    { name: 'MySQL', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'SQL Server', icon: Database },
    { name: 'Oracle DB', icon: Database },
    { name: 'MongoDB', icon: Database },
    { name: 'Power BI', icon: BarChart },
    { name: 'Tableau', icon: BarChart },
    { name: 'Excel', icon: BarChart },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">📊 Data-Driven Career</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete SQL & Database Course
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Master Database Management & Analytics
            </p>
            <p className="text-lg mb-8 text-purple-50 max-w-3xl mx-auto">
              Learn SQL from basics to advanced concepts. Perfect for data analysts, developers, 
              and anyone looking to work with databases professionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                Enroll Now - ₹15,000
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
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
                <Clock className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Duration</h3>
                <p className="text-gray-600">2-3 Months</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Batch Size</h3>
                <p className="text-gray-600">Max 20 Students</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Certification</h3>
                <p className="text-gray-600">Industry Recognized</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Rating</h3>
                <p className="text-gray-600">4.8/5 (150+ Reviews)</p>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our SQL Course?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-l-4 border-l-purple-600">
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
                    <CardTitle className="text-xl text-purple-900">{module.title}</CardTitle>
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

          {/* Tools & Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Tools & Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <tool.icon className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold">{tool.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Start Your Data Journey Today!</h2>
                <p className="text-xl mb-8">Master SQL and unlock opportunities in data analysis, development, and database administration</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                    Enroll Now - ₹15,000
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
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

export default SQLCourse;