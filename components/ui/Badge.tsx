import React from 'react';
import { Priority } from '../../types';

interface BadgeProps {
  priority: Priority;
  className?: string;
}

export const PriorityBadge: React.FC<BadgeProps> = ({ priority, className = '' }) => {
  let colorClass = '';

  switch (priority) {
    case 'ALTA':
      colorClass = 'bg-red-500/15 text-red-500 border-red-500/30 hover:bg-red-500/25';
      break;
    case 'MEDIA':
      // Using amber/orange for "Brown" equivalent in shadcn style
      colorClass = 'bg-amber-500/15 text-amber-500 border-amber-500/30 hover:bg-amber-500/25';
      break;
    case 'BAJA':
      colorClass = 'bg-emerald-500/15 text-emerald-500 border-emerald-500/30 hover:bg-emerald-500/25';
      break;
  }

  return (
    <span className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${colorClass} ${className}`}>
      {priority}
    </span>
  );
};