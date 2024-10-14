import React from 'react';

const LMSFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
         
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Our LMS platform provides quality courses to help you learn new skills and advance your career.
            </p>
          </div>
          
         
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/courses" className="hover:text-gray-400">Courses</a>
              </li>
              <li className="mb-2">
                <a href="/instructors" className="hover:text-gray-400">Instructors</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-gray-400">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="/faq" className="hover:text-gray-400">FAQ</a>
              </li>
            </ul>
          </div>
          
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">
              Email: <a href="mailto:info@lms.com" className="hover:text-gray-400">info@lms.com</a>
            </p>
            <p className="text-sm">
              Phone: <a href="tel:+123456789" className="hover:text-gray-400">+123 456 789</a>
            </p>
            <div className="mt-4">
              <a href="#" className="mr-4 hover:text-gray-400">Facebook</a>
              <a href="#" className="hover:text-gray-400">Twitter</a>
            </div>
          </div>
          
        </div>
        
        
        <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center">
          © {new Date().getFullYear()} Your LMS Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default LMSFooter;
