'use client';

import { useEffect } from 'react';

export function CursorEffect() {
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let lastX = 0;
    let lastY = 0;
    let frameId: number;

    // Create cursor glow element
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    document.body.appendChild(cursorGlow);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update cursor glow position
      cursorGlow.style.left = mouseX + 'px';
      cursorGlow.style.top = mouseY + 'px';

      // Cancel previous frame request
      if (frameId) cancelAnimationFrame(frameId);

      // Create particles every frame for smoother trail
      frameId = requestAnimationFrame(() => {
        createTrailParticle(mouseX, mouseY);
      });
    };

    const createTrailParticle = (x: number, y: number) => {
      const particle = document.createElement('div');
      particle.className = 'cursor-trail';
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';

      document.body.appendChild(particle);

      // Remove particle after animation completes
      setTimeout(() => {
        particle.remove();
      }, 800);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameId) cancelAnimationFrame(frameId);
      cursorGlow.remove();
    };
  }, []);

  return null;
}
