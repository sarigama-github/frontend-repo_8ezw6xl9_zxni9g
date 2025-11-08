import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[540px] overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient and vignette overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/70" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.45)' }} />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-indigo-200 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            <span>AI voice aura — live 3D</span>
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Your AI Weather Companion
          </h1>
          <p className="mt-4 text-base sm:text-lg text-indigo-100/90">
            Get a clear 7‑day forecast, smart planning tips, and chat with an AI about your day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
