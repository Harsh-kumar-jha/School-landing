
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'var(--font-pacifico)' }}>
              EduExcel Academy
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Programs
            </Link>
            <Link href="#achievements" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Achievements
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Testimonials
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-xl active:scale-95 whitespace-nowrap cursor-pointer shadow-lg">
              Apply Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300 transform hover:scale-110"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-menu-line text-xl"></i>
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="#programs" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Programs
              </Link>
              <Link href="#achievements" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Achievements
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Testimonials
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Contact
              </Link>
              <div className="pt-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-xl active:scale-95 whitespace-nowrap cursor-pointer shadow-lg">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}