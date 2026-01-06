import React, { useState } from 'react';
import { ArrowLeft, Check, Zap, CreditCard, Banknote, X } from 'lucide-react';

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
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    documento: '',
    domicilio: ''
  });

  const handleSolicitarInstalacion = () => {
    setShowModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mensaje = `Hola! Quiero contratar el servicio. Creame un ticket de ventas con el nombre: ${formData.nombre}. Dni ${formData.documento}. Domicilio ${formData.domicilio}`;
    const numero = '5493876857603';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    setShowModal(false);
    // Resetear formulario
    setFormData({ nombre: '', documento: '', domicilio: '' });
  };

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

            <button 
              onClick={handleSolicitarInstalacion}
              className="w-full mt-8 py-4 rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg transition-all active:scale-[0.98]"
            >
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

      {/* Modal de formulario */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Solicitar Instalación</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ingresa tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="documento" className="block text-sm font-medium text-foreground mb-2">
                  DNI
                </label>
                <input
                  type="text"
                  id="documento"
                  required
                  value={formData.documento}
                  onChange={(e) => setFormData({ ...formData, documento: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ingresa tu DNI"
                />
              </div>

              <div>
                <label htmlFor="domicilio" className="block text-sm font-medium text-foreground mb-2">
                  Domicilio
                </label>
                <input
                  type="text"
                  id="domicilio"
                  required
                  value={formData.domicilio}
                  onChange={(e) => setFormData({ ...formData, domicilio: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ingresa tu dirección completa"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-bold"
                >
                  Enviar a WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlansPage;