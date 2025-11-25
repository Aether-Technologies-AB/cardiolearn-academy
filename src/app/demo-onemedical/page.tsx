import React from 'react';
import { OneMedicalFormDemo } from '@/components/forms/OneMedicalForm';

const OneMedicalDemoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header Section */}
      <div className="bg-white shadow-onemedical">
        <div className="container-onemedical py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">CardioLearn Academy</h1>
              <p className="text-gray-600 mt-1">One Medical Inspired Design System</p>
            </div>
            <div className="flex space-x-4">
              <button className="btn-onemedical-secondary">
                Sign In
              </button>
              <button className="btn-onemedical-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container-onemedical py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Exceptional cardiovascular education
            <span className="text-gradient block mt-2">just got more accessible</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Experience the future of medical education with our comprehensive cardiovascular training programs. 
            Built with the same attention to design and user experience that One Medical brings to healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-onemedical-primary px-8 py-4 text-lg">
              Start Learning Today
            </button>
            <button className="btn-onemedical-outline px-8 py-4 text-lg">
              Browse Courses
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container-onemedical py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Why healthcare professionals choose CardioLearn
          </h3>
          <p className="text-lg text-gray-600">
            Professional development that fits your schedule and learning style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Expert-led content',
              description: 'Learn from leading cardiologists and cardiovascular specialists',
              icon: '👨‍⚕️',
            },
            {
              title: 'Flexible scheduling',
              description: 'Access courses 24/7, learn at your own pace, on your own time',
              icon: '⏰',
            },
            {
              title: 'Practical application',
              description: 'Real-world case studies and hands-on learning opportunities',
              icon: '🩺',
            },
          ].map((feature, index) => (
            <div key={index} className="card-onemedical">
              <div className="card-onemedical-body text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container-onemedical">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by healthcare professionals worldwide
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10,000+', label: 'Active Learners' },
              { number: '500+', label: 'Expert Instructors' },
              { number: '1,200+', label: 'Course Hours' },
              { number: '98%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-16">
        <OneMedicalFormDemo />
      </div>

      {/* CTA Section */}
      <div className="bg-primary-blue py-16">
        <div className="container-onemedical text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to advance your cardiovascular expertise?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare professionals who trust CardioLearn Academy 
            for their continuing medical education.
          </p>
          <button className="bg-white text-primary-blue px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 hover:-translate-y-0.5 shadow-onemedical-lg">
            Get Started Today
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-onemedical">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4">CardioLearn Academy</h5>
              <p className="text-gray-400 text-sm">
                Advanced cardiovascular education for healthcare professionals worldwide.
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Courses</h6>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Basic Cardiology</a></li>
                <li><a href="#" className="hover:text-white">Advanced Interventions</a></li>
                <li><a href="#" className="hover:text-white">Heart Failure</a></li>
                <li><a href="#" className="hover:text-white">Electrophysiology</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Support</h6>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Resources</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Company</h6>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 CardioLearn Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OneMedicalDemoPage;
