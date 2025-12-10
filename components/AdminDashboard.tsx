import React, { useState } from 'react';
import { User, LayoutDashboard, Ticket, Plus, X, Trash2, CheckCircle, Search, Menu } from 'lucide-react';
import { Ticket as TicketType, Priority } from '../types';
import { MOCK_TICKETS } from '../data';
import { PriorityBadge } from './ui/Badge';

interface AdminDashboardProps {
  onBack: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack }) => {
  const [tickets, setTickets] = useState<TicketType[]>(MOCK_TICKETS);
  const [selectedTicketId, setSelectedTicketId] = useState<string>(MOCK_TICKETS[0].id);
  const [newNote, setNewNote] = useState('');

  const selectedTicket = tickets.find(t => t.id === selectedTicketId);

  const handleDeleteNote = (ticketId: string, noteId: string) => {
    setTickets(tickets.map(t => {
      if (t.id === ticketId) {
        return { ...t, notes: t.notes.filter(n => n.id !== noteId) };
      }
      return t;
    }));
  };

  const handleAddNote = () => {
    if (!newNote.trim() || !selectedTicket) return;
    const note = {
      id: Math.random().toString(36).substr(2, 9),
      text: newNote,
      author: 'Admin',
      timestamp: new Date()
    };
    
    setTickets(tickets.map(t => {
      if (t.id === selectedTicket.id) {
        return { ...t, notes: [...t.notes, note] };
      }
      return t;
    }));
    setNewNote('');
  };

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col hidden md:flex">
        {/* User Profile */}
        <div className="p-6 flex flex-col items-center border-b border-border/50">
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4 border-2 border-muted shadow-lg">
            <User className="w-10 h-10 text-muted-foreground" />
          </div>
          <h2 className="text-lg font-semibold tracking-tight">Admin</h2>
          <span className="text-xs text-muted-foreground">Soporte Técnico</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          <button 
             onClick={onBack}
             className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all text-sm font-medium"
          >
            <LayoutDashboard className="w-4 h-4" />
            Panel general
          </button>
          
          <div className="relative">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-md bg-secondary/50 text-foreground text-sm font-medium border border-border/50">
                <Ticket className="w-4 h-4" />
                Tickets asignados
            </button>
            {/* Active indicator bar */}
            <div className="absolute left-0 top-2 bottom-2 w-1 bg-primary rounded-r-full"></div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row h-full overflow-hidden">
        
        {/* Mobile Header (only visible on small screens) */}
        <div className="md:hidden h-14 border-b border-border flex items-center justify-between px-4">
             <span className="font-semibold">Conectando Web</span>
             <Menu className="w-5 h-5" />
        </div>

        {/* Ticket List Column */}
        <div className="w-full md:w-80 lg:w-96 border-r border-border flex flex-col bg-background/50">
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between mb-4">
               <h2 className="text-xl font-semibold">Tickets</h2>
               <span className="text-xs text-muted-foreground">Prioridad</span>
            </div>
            <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input 
                    type="text" 
                    placeholder="Buscar ticket..." 
                    className="w-full bg-secondary/50 border border-input rounded-md py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground/50"
                />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {tickets.map((ticket) => (
              <div 
                key={ticket.id}
                onClick={() => setSelectedTicketId(ticket.id)}
                className={`p-4 border-b border-border/40 cursor-pointer transition-all hover:bg-secondary/30 ${selectedTicketId === ticket.id ? 'bg-secondary/60 border-l-2 border-l-primary' : 'border-l-2 border-l-transparent'}`}
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className={`font-medium text-sm truncate pr-2 ${selectedTicketId === ticket.id ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {ticket.title}
                  </h3>
                  <PriorityBadge priority={ticket.priority} />
                </div>
                <div className="text-xs text-muted-foreground font-mono">ID: {ticket.id}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Ticket Detail Column */}
        {selectedTicket ? (
          <div className="flex-1 flex flex-col bg-card/30 overflow-hidden relative">
            
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-border/50 flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-1">{selectedTicket.title}</h1>
                <p className="text-sm font-mono text-muted-foreground">ID: {selectedTicket.id}</p>
              </div>
              <div className="flex items-center">
                 <span className="text-lg font-bold mr-3 text-muted-foreground/60">Prioridad:</span>
                 <span className={`text-2xl font-black italic tracking-wider
                    ${selectedTicket.priority === 'ALTA' ? 'text-red-500' : 
                      selectedTicket.priority === 'MEDIA' ? 'text-amber-500' : 'text-emerald-500'}
                 `}>
                    {selectedTicket.priority}
                 </span>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
              
              {/* Description */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Descripción del cliente</h3>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border/50 text-sm leading-relaxed text-slate-300">
                   {selectedTicket.description}
                </div>
              </div>

              {/* Updates */}
              {selectedTicket.updates && selectedTicket.updates.length > 0 && (
                <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Actualizaciones</h3>
                    {selectedTicket.updates.map((update, idx) => (
                        <div key={idx} className="p-4 rounded-lg bg-secondary/20 border border-border/50 text-sm leading-relaxed text-slate-300">
                             <span className="text-primary font-semibold block mb-1">Actualización {idx + 1}:</span>
                             {update}
                        </div>
                    ))}
                </div>
              )}

              {/* Notes Section */}
              <div className="space-y-4 pt-4 border-t border-border/30">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Nota de asistente</h3>
                
                <div className="space-y-3">
                  {selectedTicket.notes.length === 0 ? (
                      <p className="text-sm text-muted-foreground italic">No hay notas registradas.</p>
                  ) : (
                    selectedTicket.notes.map((note) => (
                        <div key={note.id} className="group relative p-4 rounded-lg border border-border bg-card shadow-sm transition-all hover:border-primary/50">
                        <p className="text-sm text-foreground">{note.text}</p>
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteNote(selectedTicket.id, note.id);
                            }}
                            className="absolute top-2 right-2 p-1 rounded-full text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-all"
                        >
                            <X className="w-3 h-3" />
                        </button>
                        </div>
                    ))
                  )}
                </div>

                {/* Add Note Input */}
                <div className="flex gap-2 mt-4">
                   <div className="relative flex-1">
                        <Plus className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAddNote()}
                            placeholder="Agregar nota interna..."
                            className="w-full bg-background border border-input rounded-md py-2.5 pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
                        />
                   </div>
                   <button 
                     onClick={handleAddNote}
                     disabled={!newNote.trim()}
                     className="px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-md text-sm font-medium disabled:opacity-50 transition-colors"
                   >
                     Agregar
                   </button>
                </div>
              </div>
            </div>

            {/* Actions Footer */}
            <div className="p-6 border-t border-border bg-background/50 backdrop-blur-sm flex justify-end gap-4">
                <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-destructive/50 text-destructive hover:bg-destructive/10 hover:border-destructive transition-colors text-sm font-medium">
                    <Trash2 className="w-4 h-4" />
                    Eliminar Ticket
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20 transition-all text-sm font-medium">
                    <CheckCircle className="w-4 h-4" />
                    Finalizar ticket
                </button>
            </div>

          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
             <Ticket className="w-16 h-16 mb-4 opacity-20" />
             <p>Selecciona un ticket para ver los detalles</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;