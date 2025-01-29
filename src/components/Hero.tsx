import React from 'react';
import { ArrowRight, Code, Smartphone, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your Digital Vision Into Reality
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We craft innovative web and mobile solutions that drive business growth. 
              From custom development to AI integration, we're your partner in digital success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="flex items-center justify-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
                View Portfolio
              </button> */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Code className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600">Custom solutions for your unique needs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Smartphone className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Mobile Apps</h3>
              <p className="text-gray-600">Native and cross-platform excellence</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Brain className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI Solutions</h3>
              <p className="text-gray-600">Intelligent automation systems</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-6 rounded-xl shadow-lg text-white">
              <h3 className="text-xl font-semibold mb-2">10+</h3>
              <p>Successful Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;