import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import AdminDashboard from './components/AdminDashboard';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'admin'>('landing');

  return (
    <>
      {currentView === 'landing' ? (
        <LandingPage onNavigate={() => setCurrentView('admin')} />
      ) : (
        <AdminDashboard onBack={() => setCurrentView('landing')} />
      )}
    </>
  );
};

export default App;