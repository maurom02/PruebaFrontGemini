import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import AdminDashboard from './components/AdminDashboard';
import LoginPage from './components/LoginPage';

const App: React.FC = () => {
  // Ahora manejamos 3 vistas: landing, login, admin
  const [currentView, setCurrentView] = useState<'landing' | 'login' | 'admin'>('landing');

  return (
    <>
      {currentView === 'landing' && (
        <LandingPage onNavigate={() => setCurrentView('login')} />
      )}
      
      {currentView === 'login' && (
        <LoginPage 
          onLogin={() => setCurrentView('admin')} 
          onBack={() => setCurrentView('landing')} 
        />
      )}

      {currentView === 'admin' && (
        <AdminDashboard onBack={() => setCurrentView('landing')} />
      )}
    </>
  );
};

export default App;