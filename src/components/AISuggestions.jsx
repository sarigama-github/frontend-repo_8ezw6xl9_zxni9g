import React from 'react';
import { Lightbulb } from 'lucide-react';

const AISuggestions = ({ forecast }) => {
  // Simple, readable suggestions derived from the upcoming weather
  const tips = (() => {
    const today = forecast[0];
    if (!today) return [];
    const out = [];

    if (/(rain|storm)/i.test(today.condition)) {
      out.push('Carry a compact umbrella and consider waterproof shoes.');
    }
    if (/sun|clear/i.test(today.condition) && today.high >= 26) {
      out.push('It will be warm and sunny — pack sunscreen and stay hydrated.');
    }
    if (/snow/i.test(today.condition)) {
      out.push('Snow ahead — plan extra travel time and wear layers.');
    }
    if (today.low <= 5) {
      out.push('Chilly morning expected — a jacket or light coat will help.');
    }
    if (out.length === 0) {
      out.push('Weather looks mild — a great day for outdoor errands or a walk.');
    }
    return out;
  })();

  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 p-5 text-white/90 backdrop-blur">
      <div className="flex items-center gap-2">
        <div className="rounded-lg bg-white/10 p-2">
          <Lightbulb className="h-5 w-5 text-amber-300" />
        </div>
        <h3 className="text-lg font-semibold">AI Suggestions</h3>
      </div>
      <ul className="mt-3 list-disc pl-6 space-y-1 text-sm">
        {tips.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default AISuggestions;
