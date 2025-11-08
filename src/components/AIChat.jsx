import React, { useState } from 'react';
import { Send } from 'lucide-react';

// Simple local mock chat to demonstrate UX. Can be wired to backend later.
const AIChat = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! Ask me about your plans and I’ll tailor them to the forecast.' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    const userMsg = { role: 'user', content: text };

    // Very lightweight heuristic reply using the prompt
    const reply = {
      role: 'assistant',
      content:
        text.toLowerCase().includes('run')
          ? 'Great time to run is early morning if it’s cool and dry. Check today’s lows and wind.'
          : 'Consider the highest temp and chance of rain in the next 24h — plan layers and carry water.',
    };

    setMessages((m) => [...m, userMsg, reply]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-80 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
      <div className="p-4 flex-1 overflow-y-auto space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
            <div
              className={
                'inline-block max-w-[85%] rounded-xl px-3 py-2 text-sm ' +
                (m.role === 'user' ? 'bg-indigo-500/20 text-indigo-100' : 'bg-white/10 text-white/90')
              }
            >
              {m.content}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="p-3 border-t border-white/10 flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask the AI about plans, outfits, workouts…"
          className="flex-1 rounded-lg bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-indigo-500/40"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 px-3 py-2 text-sm font-medium text-white transition"
        >
          <Send className="h-4 w-4" />
          Send
        </button>
      </form>
    </div>
  );
};

export default AIChat;
