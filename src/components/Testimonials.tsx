import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      content: 'Grow Sutra transformed our business with their innovative solutions. Their team\'s expertise and dedication to quality is unmatched.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO, Innovation Labs',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      content: 'Working with Grow Sutra was a game-changer for our startup. They delivered our mobile app ahead of schedule and exceeded expectations.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager, E-Shop Global',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
      content: 'The AI solution provided by Grow Sutra helped us increase our efficiency by 40%. Their technical expertise is truly impressive.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-4 gap-8 items-center">
            <div className="text-center md:border-r border-gray-200">
              <h4 className="text-4xl font-bold text-indigo-600 mb-2">200+</h4>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center md:border-r border-gray-200">
              <h4 className="text-4xl font-bold text-indigo-600 mb-2">50+</h4>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="text-center md:border-r border-gray-200">
              <h4 className="text-4xl font-bold text-indigo-600 mb-2">95%</h4>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold text-indigo-600 mb-2">15+</h4>
              <p className="text-gray-600">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;