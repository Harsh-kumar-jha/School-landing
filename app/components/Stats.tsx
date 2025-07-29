
'use client';

import { useState, useEffect, useRef } from 'react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      number: 25000,
      display: '25,000+',
      label: 'Students Enrolled',
      icon: 'ri-user-line'
    },
    {
      number: 98,
      display: '98%',
      label: 'Graduation Rate',
      icon: 'ri-graduation-cap-line'
    },
    {
      number: 50,
      display: '50+',
      label: 'Countries Represented',
      icon: 'ri-earth-line'
    },
    {
      number: 95,
      display: '95%',
      label: 'Job Placement Rate',
      icon: 'ri-briefcase-line'
    },
    {
      number: 200,
      display: '200+',
      label: 'Research Publications',
      icon: 'ri-book-open-line'
    },
    {
      number: 15,
      display: '15:1',
      label: 'Student-Faculty Ratio',
      icon: 'ri-team-line'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { 
        threshold: 0.1, // Reduced threshold for better mobile compatibility
        rootMargin: '0px 0px -10% 0px' // Trigger when element is 10% from bottom of viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Repeating animation cycle when section is visible
  useEffect(() => {
    if (!isVisible) return;

    const startAnimationCycle = () => {
      // Start animation immediately
      setAnimationKey(prev => prev + 1);
      
      // Set up repeating cycle: animate for 2s, pause for 10s, then restart
      const intervalId = setInterval(() => {
        setAnimationKey(prev => prev + 1);
      }, 12000); // 12 seconds total cycle (2s animation + 10s pause)

      return intervalId;
    };

    const intervalId = startAnimationCycle();

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isVisible]);

  const CountUpNumber = ({ endValue, display }: { endValue: number; display: string }) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
      if (!isVisible || animationKey === 0) return;

      // Reset to 0 and start animation
      setCurrentValue(0);
      
      const duration = 2000; // 2 seconds
      const startTime = Date.now();
      const startValue = 0;

      const updateValue = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        const value = Math.floor(startValue + (endValue - startValue) * easedProgress);
        
        setCurrentValue(value);

        if (progress < 1) {
          requestAnimationFrame(updateValue);
        }
      };

      requestAnimationFrame(updateValue);
    }, [animationKey, endValue, isVisible]);

    const formatNumber = (num: number) => {
      if (display.includes('%')) return `${num}%`;
      if (display.includes(':')) return `${num}:1`;
      if (display.includes('+')) return `${num.toLocaleString()}+`;
      return num.toLocaleString();
    };

    return (
      <div className="text-4xl font-bold text-white mb-2">
        {formatNumber(currentValue)}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Numbers That Matter
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our track record speaks for itself - join a community of achievers and innovators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 rounded-full mx-auto mb-4">
                <i className={`${stat.icon} text-2xl text-blue-900`}></i>
              </div>
              <CountUpNumber endValue={stat.number} display={stat.display} key={animationKey} />
              <div className="text-blue-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}