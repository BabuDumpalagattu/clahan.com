
import { ArrowRight, Cloud, Brain, Code, Shield, Users, CheckCircle, Award, Target, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const services = [
    {
      title: "Multi-Cloud Services",
      icon: Cloud,
      description: "Optimizing IT infrastructure (on-premise, public cloud, or hybrid) for performance, security, and cost efficiency.",
      features: [
        "GitOps and DevSecOps expertise",
        "Automated deployments",
        "Kubernetes for scalable environments",
        "Cost optimization strategies"
      ]
    },
    {
      title: "Machine Learning & AI (MLOps)",
      icon: Brain,
      description: "Providing and managing infrastructure for optimized GPU inference and scalable deployment pipelines.",
      features: [
        "GPU-optimized infrastructure",
        "Scalable ML pipelines",
        "AI model deployment",
        "Streamlined ML workflows"
      ]
    },
    {
      title: "Product Engineering",
      icon: Code,
      description: "Building scalable, high-performance applications tailored to meet complex and demanding environments.",
      features: [
        "Scalable application development",
        "Agile engineering practices",
        "Cost optimization",
        "Vision to reality transformation"
      ]
    },
    {
      title: "24x7 Operational Support",
      icon: Shield,
      description: "Proactive support ensuring minimal downtime and business continuity.",
      features: [
        "Round-the-clock monitoring",
        "Proactive maintenance",
        "Critical system management",
        "Multi-infrastructure support"
      ]
    },
    {
      title: "Corporate Training",
      icon: Users,
      description: "Comprehensive training programs for organizations to upskill their teams in modern technologies.",
      features: [
        "DevOps & DevSecOps training",
        "Cloud platform certifications",
        "Custom corporate programs",
        "Hands-on practical workshops"
      ]
    }
  ];

  const coreValues = [
    {
      title: "Transparency",
      description: "Clear communication and accountability at every step",
      icon: CheckCircle
    },
    {
      title: "Collaboration",
      description: "Engaging with clients and leveraging diverse expertise to craft innovative solutions",
      icon: Users
    },
    {
      title: "Team Spirit",
      description: "A culture of respect and shared purpose driving exceptional results",
      icon: Award
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
              🚀 Innovation • Excellence • Cost-effectiveness
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent leading-tight">
              About Clahan Technologies
            </h1>
             <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A premier IT services and consulting firm specializing in multi-cloud environments, DevOps, DevSecOps, SRE, MLOps, and comprehensive cloud solutions that drive digital transformation and operational excellence. Clahan Technologies stands out as a premier provider of IT Services and Consulting, dedicated to delivering exceptional solutions to our valued customers.
              We are one of the fastest-growing cloud solutions companies in Bengaluru and we offer cutting-edge courses such as DevOps, DevSecOps, Azure DevOps, SRE (Site Reliability Engineering), AWS DevOps, GCP DevOps, Data Science, Python, SQL, Power BI, and Amazon Web Services (AWS). Clahan has excelled in placing students at top companies based on their chosen courses, making us a reliable choice for professional development.
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 text-center leading-relaxed">
                To empower enterprises with scalable, secure, and efficient cloud solutions tailored to their unique needs.
              </p>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-600 text-center leading-relaxed">
                To be the leading multi-cloud partner for businesses worldwide, driving innovation through cloud technologies.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT services designed to drive digital transformation and maximize ROI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow h-full">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Expertise</h2>
            <p className="text-xl text-gray-600">Technologies and platforms we specialize in</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {['AWS', 'Azure', 'GCP', 'CIVO','RedHat', 'VMware', 'Python', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'Ansible', 'GitOps'].map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how Clahan Technologies can help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg text-white border-white hover:bg-white hover:text-blue-600">
              View Our Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
