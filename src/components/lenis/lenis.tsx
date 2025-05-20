'use client'; // Ensure this is a client component in Next.js App Router

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.1, // Smoothness factor (0 to 1, lower is smoother)
      duration: 1.5, // Duration of scroll animation in seconds
      smoothTouch: true, // Enable smooth scrolling on touch devices
      autoRaf: true, // Automatically handle requestAnimationFrame
    });

    // Update Lenis on each frame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup Lenis on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}