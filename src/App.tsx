import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing Components
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Timeline from './components/Timeline'; // Assuming Timeline is a component

const Layout: React.FC = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 flex flex-col">
      {/* Header that is always visible */}
      <Header />
      
      {/* Main Content that changes based on the route */}
      <main>{children}</main>
      
      {/* Footer that is always visible */}
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      {/* Define Routes */}
      <Routes>
        {/* Home route (renders both HeroSection and Timeline) */}
        <Route 
          path="/" 
          element={
            <Layout>
              <HeroSection />
              <Timeline /> {/* Add Timeline here on the home page */}
            </Layout>
          } 
        />
        
        {/* Timeline route */}
        <Route 
          path="/timeline" 
          element={<Layout><Timeline /></Layout>} 
        />
      </Routes>
    </Router>
  );
};

export default App;
