import React from 'react';
import { Globe, Smartphone, Brain, Database, Cloud, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Progressive Web Apps']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications.',
      features: ['iOS Development', 'Android Development', 'React Native Apps']
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Intelligent automation and machine learning integration.',
      features: ['ML Models', 'Chatbots', 'Predictive Analytics']
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Scalable and secure database architecture.',
      features: ['Data Modeling', 'Migration Services', 'Performance Optimization']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud infrastructure and deployment solutions.',
      features: ['AWS', 'Azure', 'Google Cloud']
    },
    {
      icon: Shield,
      title: 'IT Consulting',
      description: 'Strategic technology consulting and planning.',
      features: ['Tech Strategy', 'Digital Transformation', 'Security Audits']
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to your business needs. We combine technical expertise with 
            industry best practices to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="inline-block p-3 bg-indigo-100 rounded-lg mb-4">
                <service.icon className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          {/* <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
            Schedule a Consultation
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Services;