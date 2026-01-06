import React from 'react';
import BinaryBackground from './BinaryBackground';

interface LandingPageProps {
  onNavigatePlans: () => void;
  onNavigateContact: () => void;
  onNavigateSupport: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ 
  onNavigatePlans, 
  onNavigateContact, 
  onNavigateSupport 
}) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* Animated Matrix Binary Background */}
      <BinaryBackground />
      
      {/* Abstract Gradient Overlay for depth */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-center px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground bg-background/40 backdrop-blur-md px-6 py-2 rounded-full border border-border/50 shadow-xl">
          <button onClick={() => window.location.reload()} className="hover:text-primary transition-colors text-foreground">Inicio</button>
          <button onClick={onNavigatePlans} className="hover:text-primary transition-colors">Planes</button>
          <button onClick={onNavigateContact} className="hover:text-primary transition-colors">Contacto</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
            <span className="text-primary drop-shadow-[0_0_25px_rgba(34,197,94,0.5)] bg-clip-text text-transparent bg-gradient-to-b from-primary to-emerald-700">
              Conectando Web
            </span>
          </h1>
          <p className="text-xl md:text-3xl text-muted-foreground font-light tracking-[0.2em] uppercase">
            rápido y seguro
          </p>
        </div>
      </main>

      {/* Footer minimal */}
      <footer className="relative z-10 w-full py-6 text-center border-t border-border/40 bg-background/20 backdrop-blur-sm flex flex-col items-center gap-2">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Conectando Web. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;