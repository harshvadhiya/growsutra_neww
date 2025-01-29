import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Grow Sutra</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're a team of passionate technologists dedicated to helping businesses thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="inline-block p-4 bg-indigo-100 rounded-full mb-4">
              <Target className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To deliver innovative technology solutions that empower businesses to achieve their full potential.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="inline-block p-4 bg-indigo-100 rounded-full mb-4">
              <Lightbulb className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading force in digital transformation, setting new standards in technology excellence.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="inline-block p-4 bg-indigo-100 rounded-full mb-4">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Innovation, integrity, and client success drive everything we do.
            </p>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
              <p className="text-gray-600 mb-6">
                Founded in 2015, Grow Sutra has evolved from a small web development agency to a comprehensive IT solutions provider. 
                We've successfully delivered over 200 projects across various industries, building long-lasting partnerships with our clients.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <span className="w-16 font-semibold">2015</span>
                  <span>Company founded</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-16 font-semibold">2018</span>
                  <span>Expanded to mobile development</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-16 font-semibold">2020</span>
                  <span>Launched AI solutions division</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-16 font-semibold">2023</span>
                  <span>Global expansion & 200+ projects milestone</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;