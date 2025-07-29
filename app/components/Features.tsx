
'use client';

export default function Features() {
  const features = [
    {
      icon: 'ri-book-open-line',
      title: 'Academic Excellence',
      description: 'Rigorous curriculum designed by industry experts with hands-on learning approach'
    },
    {
      icon: 'ri-team-line',
      title: 'Expert Faculty',
      description: 'Learn from renowned professors and industry professionals with real-world experience'
    },
    {
      icon: 'ri-computer-line',
      title: 'Modern Technology',
      description: 'Access cutting-edge labs, digital libraries, and advanced learning platforms'
    },
    {
      icon: 'ri-earth-line',
      title: 'Global Perspective',
      description: 'International exchange programs and multicultural learning environment'
    },
    {
      icon: 'ri-briefcase-line',
      title: 'Career Support',
      description: 'Comprehensive career services, internship programs, and job placement assistance'
    },
    {
      icon: 'ri-community-line',
      title: 'Vibrant Community',
      description: 'Active student organizations, clubs, and networking opportunities'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose EduExcel Academy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive educational experience that prepares students for success in their chosen fields and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 cursor-pointer">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-lg mb-6">
                <i className={`${feature.icon} text-2xl text-blue-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
