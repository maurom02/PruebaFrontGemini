import React from 'react';
import { ArrowLeft, Check, Zap, CreditCard, Banknote } from 'lucide-react';

interface PlansPageProps {
  onBack: () => void;
}

const PLANES = [
  { 
    nombre: "Plan Conectado", 
    megas: "20 MB", 
    precio: "$25.000", 
    popular: true, 
    features: [
      "Fibra Óptica de alta estabilidad", 
      "WiFi de largo alcance", 
      "Soporte técnico local",
      "Navegación ilimitada"
    ] 
  }
];

const PlansPage: React.FC<PlansPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <button onClick={onBack} className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Volver
        </button>

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Nuestro Plan</h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            La mejor conexión para tu hogar al precio más justo.
          </p>
        </header>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md p-8 rounded-2xl border border-primary bg-primary/5 shadow-[0_0_40px_rgba(34,197,94,0.15)] transition-all hover:scale-[1.02]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Recomendado
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{PLANES[0].nombre}</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-5xl font-black text-foreground">{PLANES[0].megas}</span>
              </div>
              <div className="text-3xl font-semibold text-primary">
                {PLANES[0].precio}
                <span className="text-sm font-normal text-muted-foreground ml-1">/ mes</span>
              </div>
            </div>

            <div className="space-y-6">
              <ul className="space-y-4">
                {PLANES[0].features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-border/50">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Costo de Instalación</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-primary" />
                      <span className="text-sm">Transferencia o Tarjeta</span>
                    </div>
                    <span className="font-bold text-sm">$45.000</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border">
                    <div className="flex items-center gap-2">
                      <Banknote className="w-4 h-4 text-primary" />
                      <span className="text-sm">Efectivo</span>
                    </div>
                    <span className="font-bold text-sm">$40.000</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 py-4 rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg transition-all active:scale-[0.98]">
              Solicitar Instalación
            </button>
          </div>
        </div>
        
        <div className="mt-16 p-8 rounded-2xl bg-secondary/30 border border-border flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h4 className="font-bold">¿Dudas sobre la cobertura?</h4>
                    <p className="text-sm text-muted-foreground">Consulta disponibilidad inmediata en tu zona con nuestros asesores.</p>
                </div>
            </div>
            <button className="text-primary font-bold hover:underline">Hablar con un asesor</button>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;