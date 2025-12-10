import React from 'react';

interface LandingPageProps {
  onNavigate: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors text-foreground">Inicio</a>
          <div className="h-4 w-[1px] bg-border"></div>
          <a href="#" className="hover:text-primary transition-colors">Ofertas</a>
        </div>
        <div>
            <button 
                onClick={onNavigate}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors border border-border px-3 py-1 rounded-full"
            >
                Acceso Admin
            </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          <span className="text-primary drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">Conectando Web</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide mb-12">
          rápido y seguro
        </p>
      </main>

      {/* Footer minimal */}
      <footer className="w-full py-6 text-center text-xs text-muted-foreground border-t border-border/40">
        &copy; 2024 Conectando Web. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default LandingPage;