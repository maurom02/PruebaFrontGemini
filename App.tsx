import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import AdminDashboard from './components/AdminDashboard';
import LoginPage from './components/LoginPage';
import ClientSupport from './components/ClientSupport';
import PlansPage from './components/PlansPage';
import ContactPage from './components/ContactPage';

export type View = 'landing' | 'login' | 'admin' | 'support' | 'plans' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('landing');

  useEffect(() => {
    const checkPath = () => {
      const path = window.location.pathname;
      // Usamos endsWith para mayor compatibilidad con diferentes entornos de hosting o subcarpetas
      if (path.endsWith('/admin')) {
        setCurrentView('login');
      } else if (path === '/' || path.endsWith('/index.html')) {
        setCurrentView('landing');
      }
    };

    // Atajo de teclado secreto: Ctrl + Shift + A para entrar como Admin
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        navigateTo('login');
      }
    };

    checkPath();
    window.addEventListener('popstate', checkPath);
    window.addEventListener('keydown', handleKeyDown);
    
    // Exponer función global para acceso rápido desde la consola del navegador
    (window as any).accessAdmin = () => navigateTo('login');

    return () => {
      window.removeEventListener('popstate', checkPath);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navigateTo = (view: View) => {
    // Actualizamos la URL visualmente para que parezca navegación real
    if (view === 'login') {
      window.history.pushState({}, '', '/admin');
    } else if (view === 'landing') {
      // Fixed duplicated .history property access
      window.history.pushState({}, '', '/');
    }
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {currentView === 'landing' && (
        <LandingPage 
          onNavigatePlans={() => navigateTo('plans')}
          onNavigateContact={() => navigateTo('contact')}
          onNavigateSupport={() => navigateTo('support')}
        />
      )}
      
      {currentView === 'plans' && (
        <PlansPage onBack={() => navigateTo('landing')} />
      )}

      {currentView === 'contact' && (
        <ContactPage onBack={() => navigateTo('landing')} />
      )}

      {currentView === 'support' && (
        <ClientSupport onBack={() => navigateTo('landing')} />
      )}
      
      {currentView === 'login' && (
        <LoginPage 
          onLogin={() => navigateTo('admin')} 
          onBack={() => navigateTo('landing')} 
        />
      )}

      {currentView === 'admin' && (
        <AdminDashboard onBack={() => navigateTo('landing')} />
      )}
    </div>
  );
};

export default App;