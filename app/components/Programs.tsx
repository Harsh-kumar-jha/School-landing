
'use client';

export default function Programs() {
  const programs = [
    {
      title: 'Computer Science & Engineering',
      duration: '4 Years',
      level: 'Bachelor\'s Degree',
      description: 'Comprehensive program covering software development, AI, cybersecurity, and emerging technologies.',
      image: 'https://readdy.ai/api/search-image?query=modern%20computer%20science%20classroom%20with%20students%20coding%20on%20laptops%2C%20multiple%20monitors%20displaying%20code%2C%20contemporary%20tech%20lab%20environment%2C%20bright%20professional%20lighting%2C%20clean%20minimalist%20design&width=400&height=300&seq=cs1&orientation=landscape',
      highlights: ['AI & Machine Learning', 'Software Engineering', 'Cybersecurity', 'Data Science']
    },
    {
      title: 'Business Administration',
      duration: '4 Years',
      level: 'Bachelor\'s Degree',
      description: 'Strategic business education focusing on leadership, entrepreneurship, and global market dynamics.',
      image: 'https://readdy.ai/api/search-image?query=professional%20business%20classroom%20with%20students%20in%20discussion%2C%20modern%20presentation%20setup%2C%20collaborative%20learning%20environment%2C%20clean%20corporate%20style%20interior%20design&width=400&height=300&seq=ba1&orientation=landscape',
      highlights: ['Strategic Management', 'Digital Marketing', 'Financial Analysis', 'Leadership Skills']
    },
    {
      title: 'Biomedical Sciences',
      duration: '4 Years',
      level: 'Bachelor\'s Degree',
      description: 'Advanced medical sciences program preparing students for healthcare and research careers.',
      image: 'https://readdy.ai/api/search-image?query=modern%20biomedical%20laboratory%20with%20students%20conducting%20experiments%2C%20advanced%20scientific%20equipment%2C%20bright%20clean%20research%20facility%2C%20professional%20medical%20environment&width=400&height=300&seq=bio1&orientation=landscape',
      highlights: ['Medical Research', 'Laboratory Techniques', 'Healthcare Systems', 'Biotechnology']
    },
    {
      title: 'Environmental Engineering',
      duration: '4 Years',
      level: 'Bachelor\'s Degree',
      description: 'Sustainable engineering solutions for environmental challenges and green technology development.',
      image: 'https://readdy.ai/api/search-image?query=environmental%20engineering%20lab%20with%20students%20working%20on%20sustainability%20projects%2C%20green%20technology%20equipment%2C%20modern%20eco-friendly%20laboratory%20design%2C%20natural%20lighting&width=400&height=300&seq=env1&orientation=landscape',
      highlights: ['Renewable Energy', 'Water Treatment', 'Environmental Impact', 'Green Technology']
    },
    {
      title: 'Digital Media & Design',
      duration: '4 Years',
      level: 'Bachelor\'s Degree',
      description: 'Creative program combining artistic vision with cutting-edge digital technology and design principles.',
      image: 'https://readdy.ai/api/search-image?query=creative%20digital%20design%20studio%20with%20students%20working%20on%20computers%2C%20graphic%20design%20software%2C%20modern%20artistic%20workspace%2C%20bright%20creative%20environment&width=400&height=300&seq=design1&orientation=landscape',
      highlights: ['Graphic Design', 'Web Development', 'Animation', 'User Experience']
    },
    {
      title: 'International Relations',
      duration: '4 Years',
      level: 'Bachelor\'s Degree',
      description: 'Global perspective on politics, economics, and cultural dynamics in our interconnected world.',
      image: 'https://readdy.ai/api/search-image?query=international%20relations%20classroom%20with%20world%20map%2C%20students%20from%20diverse%20backgrounds%20in%20discussion%2C%20modern%20academic%20setting%2C%20professional%20diplomatic%20atmosphere&width=400&height=300&seq=ir1&orientation=landscape',
      highlights: ['Global Politics', 'Cultural Studies', 'Economic Policy', 'Diplomatic Relations']
    },
    {
      title: 'Psychology & Behavioral Sciences',
      duration: '4 Years',
      level: 'Bachelor\'s Degree',
      description: 'Understanding human behavior and mental processes through research and clinical applications.',
      image: 'https://readdy.ai/api/search-image?query=modern%20psychology%20classroom%20with%20students%20studying%20human%20behavior%2C%20brain%20models%20and%20charts%2C%20contemporary%20academic%20setting%2C%20bright%20educational%20lighting&width=400&height=300&seq=psych1&orientation=landscape',
      highlights: ['Clinical Psychology', 'Research Methods', 'Cognitive Science', 'Therapy Techniques']
    },
    {
      title: 'Data Science & Analytics',
      duration: '4 Years',
      level: 'Bachelor\'s Degree',
      description: 'Advanced analytics and big data processing for modern business intelligence and research.',
      image: 'https://readdy.ai/api/search-image?query=data%20science%20laboratory%20with%20students%20analyzing%20data%20on%20multiple%20screens%2C%20advanced%20computing%20equipment%2C%20modern%20analytics%20workspace%2C%20bright%20tech%20lighting&width=400&height=300&seq=data1&orientation=landscape',
      highlights: ['Big Data Analytics', 'Machine Learning', 'Statistical Modeling', 'Data Visualization']
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Academic Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover world-class programs designed to prepare you for the challenges and opportunities of tomorrow.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left-slow">
            {[...programs, ...programs].map((program, index) => (
              <div key={index} className="flex-shrink-0 w-96 mx-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 cursor-pointer h-full">
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {program.duration}
                      </span>
                      <span className="text-gray-600 text-sm">{program.level}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-2">Program Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.highlights.map((highlight, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-xl active:scale-95 whitespace-nowrap cursor-pointer shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-left-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-left-slow {
          animation: scroll-left-slow 50s linear infinite;
        }
      `}</style>
    </section>
  );
}