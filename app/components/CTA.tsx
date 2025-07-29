
'use client';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful students who have transformed their lives through education. 
            Your future starts here at EduExcel Academy.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl active:scale-95 whitespace-nowrap cursor-pointer shadow-lg">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 hover:shadow-2xl active:scale-95 whitespace-nowrap cursor-pointer shadow-lg">
              Request Information
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-full mx-auto mb-4">
                <i className="ri-calendar-line text-2xl text-white"></i>
              </div>
              <h3 className="text-white font-semibold mb-2">Application Deadline</h3>
              <p className="text-blue-100">March 15, 2025</p>
            </div>
            
            <div className="text-center hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-full mx-auto mb-4">
                <i className="ri-phone-line text-2xl text-white"></i>
              </div>
              <h3 className="text-white font-semibold mb-2">Need Help?</h3>
              <p className="text-blue-100">Call: (555) 123-4567</p>
            </div>
            
            <div className="text-center hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-full mx-auto mb-4">
                <i className="ri-map-pin-line text-2xl text-white"></i>
              </div>
              <h3 className="text-white font-semibold mb-2">Campus Tours</h3>
              <p className="text-blue-100">Available daily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}