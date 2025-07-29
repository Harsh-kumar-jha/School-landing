
'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://readdy.ai/api/search-image?query=modern%20university%20campus%20with%20students%20walking%20on%20beautiful%20pathways%2C%20contemporary%20architecture%20buildings%2C%20bright%20natural%20lighting%2C%20professional%20educational%20atmosphere%2C%20clean%20minimalist%20design%2C%20vibrant%20green%20spaces%20and%20modern%20facilities%20creating%20inspiring%20learning%20environment&width=1920&height=1080&seq=hero1&orientation=landscape")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Shaping Future 
              <span className="block text-yellow-400">Leaders</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              Discover excellence in education with our innovative programs, world-class faculty, and supportive community. Join thousands of successful graduates who started their journey here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl active:scale-95 whitespace-nowrap cursor-pointer shadow-lg">
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 hover:shadow-2xl active:scale-95 whitespace-nowrap cursor-pointer shadow-lg">
                Schedule Tour
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-lg mb-4">
                  <i className="ri-graduation-cap-line text-xl text-blue-900"></i>
                </div>
                <h3 className="text-white font-semibold mb-2">Excellence in Education</h3>
                <p className="text-gray-200 text-sm">Top-rated programs with 98% graduation rate</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-lg mb-4">
                  <i className="ri-global-line text-xl text-blue-900"></i>
                </div>
                <h3 className="text-white font-semibold mb-2">Global Network</h3>
                <p className="text-gray-200 text-sm">Connect with students from 50+ countries</p>
              </div>
            </div>
            
            <div className="space-y-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-lg mb-4">
                  <i className="ri-lightbulb-line text-xl text-blue-900"></i>
                </div>
                <h3 className="text-white font-semibold mb-2">Innovation Hub</h3>
                <p className="text-gray-200 text-sm">State-of-the-art facilities and technology</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-lg mb-4">
                  <i className="ri-award-line text-xl text-blue-900"></i>
                </div>
                <h3 className="text-white font-semibold mb-2">Award Winning</h3>
                <p className="text-gray-200 text-sm">Recognized for academic excellence globally</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}