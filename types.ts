export type Priority = 'ALTA' | 'MEDIA' | 'BAJA';

export interface Note {
  id: string;
  text: string;
  author: string;
  timestamp: Date;
}

export interface Ticket {
  id: string;
  title: string;
  priority: Priority;
  description: string;
  updates?: string[];
  notes: Note[];
  status: 'open' | 'closed';
  createdAt: string;
}
