import React from 'react';

const HeroSection: React.FC = () => {
  return (
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
        <h1 className="text-5xl md:text-7xl font-bold mb-4">CHRYSALIS '25</h1>
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
  );
};

export default HeroSection;
