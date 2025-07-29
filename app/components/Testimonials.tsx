
'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Dr. Jennifer Williams',
      role: 'Alumni, Class of 2018',
      position: 'Senior Research Scientist at MIT',
      content: 'EduExcel Academy provided me with the perfect foundation for my research career. The faculty\'s mentorship and cutting-edge facilities prepared me for success in graduate school and beyond.',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20female%20scientist%20in%20lab%20coat%20smiling%20confidently%2C%20modern%20laboratory%20background%2C%20bright%20professional%20lighting%2C%20clean%20academic%20atmosphere&width=300&height=300&seq=testimonial1&orientation=squarish'
    },
    {
      name: 'Marcus Thompson',
      role: 'Current Student',
      position: 'Computer Science Major',
      content: 'The hands-on learning approach and industry connections have been incredible. I\'ve already secured multiple internship offers and feel confident about my future career prospects.',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20male%20computer%20science%20student%20smiling%2C%20modern%20campus%20background%2C%20casual%20academic%20attire%2C%20bright%20natural%20lighting&width=300&height=300&seq=testimonial2&orientation=squarish'
    },
    {
      name: 'Lisa Chen',
      role: 'Parent',
      position: 'Mother of Current Student',
      content: 'As a parent, I couldn\'t be happier with the support and opportunities my daughter has received. The faculty truly cares about each student\'s success and personal growth.',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20mature%20Asian%20woman%20smiling%20warmly%2C%20modern%20office%20background%2C%20professional%20business%20attire%2C%20bright%20confident%20lighting&width=300&height=300&seq=testimonial3&orientation=squarish'
    },
    {
      name: 'Robert Johnson',
      role: 'Alumni, Class of 2015',
      position: 'CEO of TechStart Inc.',
      content: 'The entrepreneurship program and business incubator at EduExcel Academy were instrumental in launching my startup. The network and skills I gained here continue to benefit me today.',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20successful%20male%20entrepreneur%20smiling%2C%20modern%20startup%20office%20background%2C%20business%20casual%20attire%2C%20bright%20executive%20lighting&width=300&height=300&seq=testimonial4&orientation=squarish'
    },
    {
      name: 'Dr. Amanda Foster',
      role: 'Faculty Member',
      position: 'Professor of Environmental Science',
      content: 'Teaching at EduExcel Academy has been incredibly rewarding. The students are motivated, curious, and ready to tackle real-world challenges. It\'s a privilege to be part of their journey.',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20female%20professor%20smiling%20warmly%2C%20modern%20university%20office%20background%2C%20professional%20academic%20attire%2C%20bright%20scholarly%20lighting&width=300&height=300&seq=testimonial5&orientation=squarish'
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Alumni, Class of 2019',
      position: 'Head of Innovation at Microsoft',
      content: 'The collaborative environment and entrepreneurial mindset I developed here shaped my entire career trajectory. Every challenge became an opportunity for growth.',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20male%20tech%20executive%20smiling%20confidently%2C%20modern%20corporate%20background%2C%20professional%20business%20attire%2C%20bright%20leadership%20lighting&width=300&height=300&seq=testimonial6&orientation=squarish'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students, alumni, parents, and faculty about their experiences at EduExcel Academy.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-80 mx-4">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-blue-600 text-sm font-medium">{testimonial.role}</p>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
    </section>
  );
}