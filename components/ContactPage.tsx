import React from 'react';
import { ArrowLeft, Mail, Phone, Clock, MessageSquare } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <button onClick={onBack} className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Volver
        </button>

        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-4xl font-bold mb-6 tracking-tight">Contacto</h1>
          <p className="text-muted-foreground mb-10 text-lg leading-relaxed max-w-xl">
            Estamos aquí para ayudarte. No dudes en contactarnos por cualquiera de nuestros canales oficiales.
          </p>
          
          <div className="w-full space-y-8">
            {/* WhatsApp Prominente */}
            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20 relative overflow-hidden group transition-all hover:bg-primary/10">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-24 h-24 text-primary" />
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                <div className="p-4 rounded-2xl bg-primary text-primary-foreground shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-transform group-hover:scale-105">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-2xl mb-1 text-foreground">Nuestro asistente virtual</h4>
                  <p className="text-primary font-mono font-bold text-xl mb-4 tracking-tight">+54 9 11 1234-5678</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Podés chatear con nuestro asistente virtual 24/7 para resolver dudas y crear tickets de soporte por si hubo algún problema con tu conexión.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/30 transition-colors">
                <div className="p-3 rounded-lg bg-secondary border border-border">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-muted-foreground">ventas@conectandoweb.com</p>
                  <p className="text-muted-foreground text-sm opacity-80">soporte@conectandoweb.com</p>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/30 transition-colors">
                <div className="p-3 rounded-lg bg-secondary border border-border">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Horario de Atención</h4>
                  <p className="text-muted-foreground">Lunes a Viernes: 09:00 - 18:00</p>
                  <p className="text-muted-foreground text-sm opacity-80">Sábados: 09:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;