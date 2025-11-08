import React from 'react';
import { Cloud, CloudRain, Sun, CloudSnow, Wind } from 'lucide-react';

const iconFor = (cond) => {
  const key = (cond || '').toLowerCase();
  if (key.includes('rain')) return <CloudRain className="h-5 w-5" />;
  if (key.includes('snow')) return <CloudSnow className="h-5 w-5" />;
  if (key.includes('wind')) return <Wind className="h-5 w-5" />;
  if (key.includes('cloud')) return <Cloud className="h-5 w-5" />;
  return <Sun className="h-5 w-5" />;
};

const ForecastGrid = ({ forecast }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
      {forecast.map((d, idx) => (
        <div key={idx} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 text-white/90">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{d.day}</span>
            <span className="text-indigo-200">{iconFor(d.condition)}</span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-2xl font-semibold">{Math.round(d.high)}°</span>
            <span className="text-sm text-white/60">/{Math.round(d.low)}°</span>
          </div>
          <p className="mt-2 text-xs text-white/70 capitalize">{d.condition}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastGrid;
