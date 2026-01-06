import React, { useState } from 'react';
import { ArrowLeft, Send, CheckCircle2 } from 'lucide-react';

interface ClientSupportProps {
  onBack: () => void;
}

const ClientSupport: React.FC<ClientSupportProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-2">¡Ticket Enviado!</h2>
        <p className="text-muted-foreground mb-8 max-w-sm">
          Hemos recibido tu consulta. Un técnico se pondrá en contacto contigo a la brevedad.
        </p>
        <button 
          onClick={onBack}
          className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          Volver al Inicio
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <button onClick={onBack} className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Volver
        </button>

        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-3">Soporte Técnico</h1>
          <p className="text-muted-foreground">¿Tienes problemas con tu conexión? Cuéntanos qué sucede.</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border p-8 rounded-xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nombre completo</label>
              <input required type="text" className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="Juan Pérez" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Nro. de Cliente / DNI</label>
              <input required type="text" className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="123456" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Asunto del problema</label>
            <select className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none">
              <option>Internet Lento</option>
              <option>Corte Total del Servicio</option>
              <option>Problemas con el WiFi</option>
              <option>Consulta de Facturación</option>
              <option>Otro</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Descripción detallada</label>
            <textarea 
              required
              rows={4}
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none resize-none"
              placeholder="Describe lo que está ocurriendo..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-50"
          >
            {loading ? "Enviando..." : (
              <>
                <Send className="w-4 h-4" />
                Enviar Ticket de Soporte
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientSupport;