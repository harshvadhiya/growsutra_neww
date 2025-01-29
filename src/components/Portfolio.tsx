import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A full-featured e-commerce solution with real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Healthcare App',
      category: 'Mobile Development',
      description: 'Patient management system with telemedicine capabilities.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      tech: ['React Native', 'Firebase', 'WebRTC']
    },
    {
      title: 'AI-Powered Analytics',
      category: 'AI Solutions',
      description: 'Predictive analytics platform for business intelligence.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'TensorFlow', 'AWS']
    }
  ];

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses achieve their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <span className="text-indigo-300 text-sm font-medium mb-2">{project.category}</span>
                <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, tIndex) => (
                    <span key={tIndex} className="bg-white/20 text-white text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="flex items-center text-white hover:text-indigo-300 transition-colors duration-200">
                  View Case Study
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;