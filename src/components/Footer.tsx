import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/40 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Email: culturama24@college.edu</p>
            <p>Phone: +91 98765 43210</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Twitter</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Facebook</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <p><a href="#" className="hover:text-purple-400 transition-colors">FAQs</a></p>
              <p><a href="#" className="hover:text-purple-400 transition-colors">Terms & Conditions</a></p>
              <p><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>© 2024 Culturama. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
