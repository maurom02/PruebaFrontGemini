import { Ticket } from './types';

export const MOCK_TICKETS: Ticket[] = [
  {
    id: '1353575',
    title: 'Internet Lento',
    priority: 'ALTA',
    description: 'Los videos me suelen cargar lento, desde hace días vengo así no puedo ver uno sin que se trabe...',
    updates: [
      'Noté que vuelve por las tardes por unas horas y luego se corta.'
    ],
    notes: [
      {
        id: 'n1',
        text: 'Se le solicitó al cliente información sobre su facturación',
        author: 'Asistente',
        timestamp: new Date()
      }
    ],
    status: 'open',
    createdAt: '2023-10-25'
  },
  {
    id: '1479521',
    title: 'Problema de WiFi',
    priority: 'BAJA',
    description: 'El router parpadea con una luz roja a veces, pero sigo teniendo conexión en el celular.',
    updates: [],
    notes: [],
    status: 'open',
    createdAt: '2023-10-26'
  },
  {
    id: '1479522',
    title: 'Consulta Técnica',
    priority: 'MEDIA',
    description: 'Quisiera saber si puedo aumentar mi plan de megas para el próximo mes.',
    updates: [],
    notes: [],
    status: 'open',
    createdAt: '2023-10-24'
  },
  {
    id: '1582201',
    title: 'Cambio de Domicilio',
    priority: 'MEDIA',
    description: 'Me mudo la próxima semana y necesito trasladar el servicio.',
    notes: [],
    status: 'closed',
    createdAt: '2023-10-20'
  }
];