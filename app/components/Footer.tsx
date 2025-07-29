'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
              EduExcel Academy
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering students to achieve excellence through innovative education and comprehensive support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#programs" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Programs</Link></li>
              <li><Link href="#achievements" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Achievements</Link></li>
              <li><Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Testimonials</Link></li>
              <li><Link href="/admissions" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Admissions</Link></li>
              <li><Link href="/campus-life" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Campus Life</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/student-services" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Student Services</Link></li>
              <li><Link href="/financial-aid" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Financial Aid</Link></li>
              <li><Link href="/career-services" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Career Services</Link></li>
              <li><Link href="/library" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Library</Link></li>
              <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Help Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-map-pin-line text-gray-400"></i>
                </div>
                <span className="text-gray-400">123 Education Street, Knowledge City, KC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line text-gray-400"></i>
                </div>
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line text-gray-400"></i>
                </div>
                <span className="text-gray-400">info@eduexcel.edu</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 EduExcel Academy. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}