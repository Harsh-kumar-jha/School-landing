
'use client';

export default function Achievements() {
  const achievements = [
    {
      icon: 'ri-trophy-line',
      title: 'National Excellence Award',
      description: 'Recognized as the top educational institution for innovation and student success',
      year: '2024'
    },
    {
      icon: 'ri-medal-line',
      title: 'Research Excellence',
      description: 'Over 200 published research papers in leading international journals',
      year: '2023'
    },
    {
      icon: 'ri-star-line',
      title: 'Global University Ranking',
      description: 'Ranked in top 50 universities worldwide for academic excellence',
      year: '2024'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Innovation Hub Status',
      description: 'Designated as official technology and innovation center by government',
      year: '2023'
    }
  ];

  const studentSuccess = [
    {
      name: 'Sarah Johnson',
      achievement: 'Google Software Engineer',
      description: 'Landed dream job at Google after completing Computer Science program',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20female%20computer%20science%20graduate%20smiling%20confidently%2C%20modern%20office%20background%2C%20clean%20business%20attire%2C%20bright%20professional%20lighting&width=300&height=300&seq=student1&orientation=squarish'
    },
    {
      name: 'Michael Chen',
      achievement: 'Startup Founder',
      description: 'Founded successful tech startup valued at $10M within 2 years of graduation',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20male%20entrepreneur%20smiling%2C%20modern%20startup%20office%20background%2C%20casual%20business%20attire%2C%20bright%20confident%20lighting&width=300&height=300&seq=student2&orientation=squarish'
    },
    {
      name: 'Emily Rodriguez',
      achievement: 'Medical Research Breakthrough',
      description: 'Published groundbreaking research on cancer treatment in Nature journal',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20female%20medical%20researcher%20smiling%2C%20laboratory%20background%2C%20white%20lab%20coat%2C%20bright%20professional%20lighting&width=300&height=300&seq=student3&orientation=squarish'
    },
    {
      name: 'David Kim',
      achievement: 'Environmental Innovation',
      description: 'Developed award-winning sustainable energy solution for rural communities',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20male%20environmental%20engineer%20smiling%2C%20green%20technology%20background%2C%20professional%20attire%2C%20bright%20natural%20lighting&width=300&height=300&seq=student4&orientation=squarish'
    },
    {
      name: 'Jessica Williams',
      achievement: 'NASA Aerospace Engineer',
      description: 'Selected for Mars mission project team after aerospace engineering graduation',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20female%20aerospace%20engineer%20smiling%20confidently%2C%20NASA%20facility%20background%2C%20engineering%20attire%2C%20bright%20professional%20lighting&width=300&height=300&seq=student5&orientation=squarish'
    },
    {
      name: 'Alex Thompson',
      achievement: 'Financial Analyst at Goldman Sachs',
      description: 'Secured top position at investment bank with exceptional academic performance',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20male%20finance%20graduate%20smiling%2C%20modern%20financial%20district%20background%2C%20business%20suit%2C%20bright%20confident%20lighting&width=300&height=300&seq=student6&orientation=squarish'
    },
    {
      name: 'Maria Garcia',
      achievement: 'Biotech Research Director',
      description: 'Leads breakthrough drug discovery team at major pharmaceutical company',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20female%20biotech%20researcher%20smiling%2C%20modern%20laboratory%20background%2C%20professional%20lab%20attire%2C%20bright%20scientific%20lighting&width=300&height=300&seq=student7&orientation=squarish'
    },
    {
      name: 'James Park',
      achievement: 'AI/ML Engineer at Tesla',
      description: 'Develops autonomous driving algorithms after completing AI specialization program',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20male%20AI%20engineer%20smiling%2C%20modern%20tech%20office%20background%2C%20casual%20tech%20attire%2C%20bright%20innovative%20lighting&width=300&height=300&seq=student8&orientation=squarish'
    },
    {
      name: 'Rachel Foster',
      achievement: 'United Nations Policy Advisor',
      description: 'Shapes international climate policy after International Relations degree',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20female%20policy%20advisor%20smiling%2C%20UN%20headquarters%20background%2C%20diplomatic%20attire%2C%20bright%20professional%20lighting&width=300&height=300&seq=student9&orientation=squarish'
    },
    {
      name: 'Carlos Mendez',
      achievement: 'Netflix Content Director',
      description: 'Leads creative content development after Digital Media program graduation',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20male%20creative%20director%20smiling%2C%20modern%20media%20studio%20background%2C%20creative%20professional%20attire%2C%20bright%20artistic%20lighting&width=300&height=300&seq=student10&orientation=squarish'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence has earned us recognition from prestigious organizations worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className={`${achievement.icon} text-2xl text-blue-600`}></i>
              </div>
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                {achievement.year}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Student Success Stories
          </h3>
          
          <div className="relative overflow-hidden mb-8">
            <div className="flex animate-scroll-right">
              {[...studentSuccess, ...studentSuccess].map((student, index) => (
                <div key={index} className="flex-shrink-0 w-72 mx-4">
                  <div className="bg-white rounded-lg p-6 shadow-lg text-center h-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-2 cursor-pointer">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                      <img 
                        src={student.image} 
                        alt={student.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{student.name}</h4>
                    <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {student.achievement}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{student.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
