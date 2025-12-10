import React, { useState } from 'react';
import { Eye, EyeOff, Lock, User, ArrowLeft, Loader2 } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
  onBack: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onBack }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsLoading(true);
    // Simular pequeña demora de red para realismo
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden px-4">
      {/* Elementos de fondo abstractos (consistente con Landing) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Tarjeta de Login */}
      <div className="w-full max-w-md bg-card border border-border rounded-xl shadow-2xl p-8 relative animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onBack}
          className="absolute top-4 left-4 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
          title="Volver al inicio"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="text-center mb-8 mt-4">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Bienvenido</h1>
          <p className="text-muted-foreground text-sm">Ingresa tus credenciales de administrador</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground ml-1">Usuario</label>
            <div className="relative group">
              <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="admin@conectandoweb.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-secondary/50 border border-border rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted-foreground/40"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground ml-1">Contraseña</label>
            <div className="relative group">
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-secondary/50 border border-border rounded-lg py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted-foreground/40"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground font-semibold py-2.5 rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Ingresando...
                </>
              ) : (
                'Iniciar Sesión'
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center pt-6 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
                ¿Olvidaste tu contraseña? <a href="#" className="text-primary hover:underline underline-offset-4">Recuperar acceso</a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;