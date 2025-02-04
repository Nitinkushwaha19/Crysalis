import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

// The App component represents the main structure of the app.
const App: React.FC = () => {
  return (
    // Container div for full-page layout
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 flex flex-col">
      {/* Header Section */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
