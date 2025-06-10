import { CheckCircle, Clock, Users, Award, Star, Code, Cloud, Shield, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DevOpsCourse = () => {
  const tools = [
    { name: 'Git & GitHub', icon: Code },
    { name: 'Jenkins', icon: Code },
    { name: 'Docker', icon: Code },
    { name: 'Kubernetes', icon: Cloud },
    { name: 'AWS', icon: Cloud },
    { name: 'Terraform', icon: Code },
    { name: 'Ansible', icon: Code },
    { name: 'Prometheus', icon: Database },
  ];

  const modules = [
    {
      title: 'DevOps Core Modules',
      items: [
        'Linux Basics & Shell Scripting',
        'Git, GitHub & Branching Strategies',
        'Jenkins CI/CD Pipelines (Freestyle, Pipeline, Multi-Branch)',
        'Maven, Tomcat Deployment',
        'Nexus & SonarQube Integration',
        'Docker & Kubernetes (Production Level with Prometheus/Grafana)',
        'Ansible for Configuration Management',
        'Terraform for Infrastructure as Code (IaC)',
        'Real-time Jenkins + Kubernetes + Docker Integrations'
      ]
    },
    {
      title: 'AWS Multi-Cloud Training',
      items: [
        'VPC, Subnetting, Internet Gateway, NAT, NACL, Route Tables',
        'EC2, EBS, EFS, Snapshots, AMIs',
        'Auto-Scaling, Load Balancers, CloudWatch, IAM & S3',
        'RDS, DynamoDB, S3 Storage Management'
      ]
    },
    {
      title: 'DevSecOps with GitOps',
      items: [
        'Security Integration with Jenkins',
        'Static Code Analysis (SAST) using SonarQube',
        'Container Vulnerability Scanning with Trivy',
        'Secure IaC practices with Terraform',
        'GitOps using Argo CD',
        'Implementing Secure Coding Practices (OWASP Top 10)'
      ]
    }
  ];

  const features = [
    'Real-Time Training: Hands-on sessions using AWS cloud for every topic',
    'Comprehensive Curriculum: Covers DevOps, DevSecOps, GitOps, CI/CD, Infrastructure as Code, Containerization, Monitoring, and more',
    'Career-Focused Approach: Includes mock interviews, project guidance, and resume support',
    'Trusted by Professionals: Learners from HCL, Mphasis, Publicis Sapient, and more have successfully transitioned their careers through us'
  ];

  const eligibility = [
    'Working professionals aiming for DevOps/Cloud transitions',
    'Freshers with basic programming or Linux knowledge',
    'System Admins or Developers looking to automate and scale infrastructure',
    'Anyone passionate about learning Cloud + DevOps + Security'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🚀 Most Popular Course</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DevOps & DevSecOps with Multi-Cloud
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Advance Your IT Career Today!
            </p>
            <p className="text-lg mb-8 text-blue-50 max-w-3xl mx-auto">
              Industry-aligned training in DevOps and DevSecOps, tailored for modern cloud-native environments. 
              Master automation, scalability, and security in software delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                Enroll Now - ₹25,000
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
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
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Duration</h3>
                <p className="text-gray-600">3-4 Months</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Batch Size</h3>
                <p className="text-gray-600">Max 15 Students</p>
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
                <p className="text-gray-600">4.9/5 (200+ Reviews)</p>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">💡 Why Choose Our DevOps + DevSecOps Course?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-l-4 border-l-blue-600">
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
            <h2 className="text-3xl font-bold text-center mb-12">📘 Course Highlights</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {modules.map((module, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-900">✅ {module.title}</CardTitle>
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
            <h2 className="text-3xl font-bold text-center mb-12">🛠️ Tools & Technologies Covered</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <tool.icon className="h-8 w-8 text-blue-600 mr-3" />
                      <span className="font-medium">{tool.name}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">DevOps Tools:</h4>
                    <p className="text-gray-700">Git, Jenkins, Maven, SonarQube, Nexus, Docker, Kubernetes, Ansible, Terraform, Prometheus, Grafana, Argo CD</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">Cloud Platforms:</h4>
                    <p className="text-gray-700">AWS (Multi-Cloud Concepts included)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-2">Security Tools:</h4>
                    <p className="text-gray-700">Trivy, OWASP Guidelines, IAM Policies, SAST, GitOps</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Who Can Enroll */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">🎓 Who Can Enroll?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {eligibility.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-green-600">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Users className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
                <p className="text-xl mb-8">Join thousands of professionals who have successfully transitioned to DevOps roles</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                    Enroll Now - ₹25,000
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
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

export default DevOpsCourse;