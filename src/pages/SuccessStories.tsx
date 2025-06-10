import { ArrowRight, Users, Award, TrendingUp, Building, BookOpen, Monitor, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';




const SuccessStories = () => {
  const corporateClients = [
    { name: "Oracle", logo: "/img/oracle.png" },
    { name: "Wipro", logo: "/img/wipro.png" },
    { name: "Comcast", logo: "/img/comcast.png" },
    { name: "Shell", logo: "/img/shell.png" },
    { name: "IOPEX", logo: "/img/IOPEX.png" },
    { name: "Gainsight", logo: "/img/gain.png" },
    { name: "CRIS", logo: "/img/irctc.png" },
    { name: "KickDrum", logo: "/img/kickdrum.png" },
    { name: "PublisSapient", logo: "/img/ps.png" },
    { name: "ACL Digital", logo: "/img/acl.png" },
    { name: "Citibank", logo: "/img/citibank.png" },
    { name: "FSS (Powering Payments)", logo: "/img/fss.png" },
    { name: "Capgemini", logo: "/img/cap.png" }
  ];

  const stats = [
    {
      number: "42",
      label: "Online Training Batches",
      icon: Monitor,
      description: "Successfully delivered comprehensive online training programs"
    },
    {
      number: "1",
      label: "Offline Training Batch",
      icon: MapPin,
      description: "In-person training for hands-on learning experience"
    },
    {
      number: "13+",
      label: "Corporate Clients",
      icon: Building,
      description: "Leading enterprises trust our training solutions"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      icon: Award,
      description: "Exceptional quality and results across all projects"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-100 text-green-700 hover:bg-green-200">
              🏆 Proven Excellence • Trusted by Industry Leaders
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent leading-tight">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how Clahan Technologies has transformed businesses through innovative cloud solutions, 
              comprehensive training programs, and exceptional DevOps implementations across industry-leading organizations.
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">Measurable results that showcase our commitment to excellence</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{stat.label}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
        <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Cloud Service Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic partnerships with leading cloud providers to deliver cutting-edge solutions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
<div className="flex items-center mb-6">
  <div className="w-20 h-16 rounded-lg overflow-hidden mr-4 bg-white shadow-sm">
    <img 
      src="/img/civo.png" 
      alt="CIVO logo" 
      className="w-full h-full object-contain"
    />
  </div>
  <div>
    <h3 className="text-3xl font-bold text-gray-900">CIVO</h3>
    <p className="text-gray-600">Cloud Service Provider Partner</p>
  </div>
</div>
</div>


                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Partnered with CIVO, the cloud native service provider that offers simple, fast, and affordable 
                    Kubernetes hosting. CIVO provides developer-friendly cloud infrastructure with lightning-fast 
                    provisioning and transparent pricing.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Kubernetes-native cloud platform</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Developer-friendly infrastructure</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Fast provisioning & deployment</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Transparent, affordable pricing</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-700">Kubernetes</Badge>
                    <Badge className="bg-green-100 text-green-700">Cloud Native</Badge>
                    <Badge className="bg-purple-100 text-purple-700">Developer Tools</Badge>
                    <Badge className="bg-orange-100 text-orange-700">Fast Deployment</Badge>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                
                  <div className="w-32 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-4">
                     <img 
                         src="/img/civo.png" 
                         alt="CIVO logo"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                  <h4 className="text-2xl font-bold text-gray-900 mb-2">CIVO</h4>
                  <p className="text-gray-600 mb-4">The cloud native service provider</p>
                  <Badge className="bg-green-100 text-green-700">Strategic Partner</Badge>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2 font-semibold">Partnership Benefits:</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Enhanced Kubernetes solutions</li>
                      <li>• Cost-effective cloud infrastructure</li>
                      <li>• Faster time-to-market</li>
                      <li>• Simplified cloud operations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>


      {/* Client Success Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Featured Client Success</h2>
                  <p className="text-gray-600">Azure DevOps Excellence</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">SalesKen.ai</h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We delivered exceptional Azure DevOps services to SalesKen.ai, transforming their development 
                    and deployment processes with cutting-edge DevOps practices and cloud optimization strategies.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Streamlined CI/CD pipelines</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Enhanced deployment efficiency</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Improved system reliability</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Cost optimization achieved</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-center">
                    {/* <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">SK</span>
                    </div> */}
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
  <img 
    src="/img/sals.png"  // ⬅️ Replace with your logo path
    alt="SK Logo" 
    className="w-full h-full object-cover"
  />
</div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">SalesKen.ai</h4>
                    <p className="text-gray-600 mb-4">AI-Powered Sales Platform</p>
                    <Badge className="bg-green-100 text-green-700">Azure DevOps Success</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Training Clients */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Corporate Training Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by industry leaders for comprehensive DevOps, DevSecOps, and cloud training programs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {corporateClients.map((client, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-shadow group">
                <div className="text-center">
                  <div className="w-full h-20 bg-gray-100 rounded-lg mb-3 overflow-hidden">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{client.name}</h3>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-6 bg-gradient-to-r from-blue-50 to-green-50 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Training Excellence</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Our comprehensive corporate training programs have empowered teams across these leading organizations 
                with cutting-edge DevOps, DevSecOps, and cloud technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge className="bg-blue-100 text-blue-700">DevOps Training</Badge>
                <Badge className="bg-green-100 text-green-700">DevSecOps</Badge>
                <Badge className="bg-purple-100 text-purple-700">Cloud Platforms</Badge>
                <Badge className="bg-orange-100 text-orange-700">SRE Practices</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your business with our proven expertise in cloud solutions and professional training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg text-white border-white hover:bg-white hover:text-blue-600">
              Book Training Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStories;


