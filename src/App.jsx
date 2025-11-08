import React, { useMemo, useState } from 'react';
import Hero from './components/Hero';
import ForecastGrid from './components/ForecastGrid';
import AISuggestions from './components/AISuggestions';
import AIChat from './components/AIChat';

function App() {
  const [location, setLocation] = useState('San Francisco, CA');

  // Mock 7-day forecast; in a later iteration this can be fetched from the backend
  const forecast = useMemo(
    () => [
      { day: 'Mon', high: 22, low: 12, condition: 'Partly Cloudy' },
      { day: 'Tue', high: 24, low: 14, condition: 'Sunny' },
      { day: 'Wed', high: 19, low: 11, condition: 'Light Rain' },
      { day: 'Thu', high: 18, low: 10, condition: 'Windy' },
      { day: 'Fri', high: 21, low: 12, condition: 'Cloudy' },
      { day: 'Sat', high: 25, low: 15, condition: 'Sunny' },
      { day: 'Sun', high: 17, low: 9, condition: 'Showers' },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />

      <main className="relative -mt-10 sm:-mt-16 z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1 rounded-lg bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-indigo-500/40"
                placeholder="Search city or ZIP"
              />
              <button className="rounded-lg bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 px-4 py-2 text-sm font-medium transition">
                Update Forecast
              </button>
            </div>
          </div>

          <section className="mt-6">
            <h2 className="mb-3 text-lg font-semibold text-white/90">7‑Day Forecast — {location}</h2>
            <ForecastGrid forecast={forecast} />
          </section>

          <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <AISuggestions forecast={forecast} />
            </div>
            <div className="lg:col-span-2">
              <h3 className="mb-3 text-lg font-semibold text-white/90">Ask the AI</h3>
              <AIChat />
            </div>
          </section>

          <footer className="py-10 text-center text-xs text-white/50">
            Built with an AI voice aura hero animation for an ambient, futuristic feel.
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
