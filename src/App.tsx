import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Music, Theater, Ticket, Users, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const events = [
    { name: 'Dance Competition', time: '2:00 PM', venue: 'Main Auditorium', icon: Music },
    { name: 'Battle of Bands', time: '4:00 PM', venue: 'Open Air Theater', icon: Music },
    { name: 'Drama Performance', time: '6:00 PM', venue: 'Cultural Center', icon: Theater }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 text-white font-bold text-xl">
              CULTURAMA '24
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-purple-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              {['Events', 'Schedule', 'Venue', 'Register'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-purple-200 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Events', 'Schedule', 'Venue', 'Register'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-white hover:text-purple-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center text-white px-4"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">CULTURAMA '24</h1>
          <p className="text-xl md:text-2xl mb-8">Experience the Magic of Culture</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-colors">
              Register Now
            </button>
            <button className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-full transition-colors">
              View Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Event Highlights */}
      <section className="py-20 px-4" id="events">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Event Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white hover:transform hover:scale-105 transition-all">
                <event.icon className="w-12 h-12 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                <div className="flex items-center text-purple-300 mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-purple-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.venue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-black/30 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-purple-300">Events</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-purple-300">Participants</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-purple-300">Colleges</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">₹1L+</div>
              <div className="text-purple-300">Prize Pool</div>
            </div>
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="py-20 px-4" id="register">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Showcase Your Talent?
          </h2>
          <p className="text-purple-200 mb-8 text-lg">
            Join us for three days of music, dance, drama, and more. Register now to be part of the biggest cultural festival!
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 rounded-full text-lg transition-colors">
            Register Now
          </button>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}

export default App;