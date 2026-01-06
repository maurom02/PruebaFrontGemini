import React, { useEffect, useRef } from 'react';

const BinaryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const newColumns = Math.floor(width / fontSize);
      // Ajustar el array de gotas si cambia el tamaño
      if (newColumns > drops.length) {
        drops.push(...Array(newColumns - drops.length).fill(1));
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      // Fondo semi-transparente para el efecto de rastro
      ctx.fillStyle = 'rgba(9, 9, 11, 0.1)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "Inter", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const char = Math.random() > 0.5 ? '0' : '1';
        
        // Calcular distancia al mouse para interacción
        const dx = x - mouseRef.current.x;
        const dy = y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          // Color destacado cerca del mouse
          ctx.fillStyle = '#4ade80'; // Un verde más brillante
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#22c55e';
        } else {
          // Color base (primary green con opacidad)
          ctx.fillStyle = 'rgba(34, 197, 94, 0.35)';
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, x, y);

        // Resetear la gota cuando llega al final o aleatoriamente
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Si el mouse está muy cerca, la gota se "acelera" o se resetea
        if (distance < 50 && Math.random() > 0.9) {
           // Pequeño glitch visual al interactuar
           ctx.fillStyle = '#ffffff';
           ctx.fillText(char, x, y);
        }

        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      style={{ filter: 'blur(0.5px)' }}
    />
  );
};

export default BinaryBackground;