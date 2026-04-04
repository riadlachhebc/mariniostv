import React, { useState, useEffect } from 'react';
import { X, MessageSquare } from 'lucide-react';
import { createWhatsAppLink, WA_MESSAGES } from '../utils/whatsapp';

export const WhatsAppWidget = () => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 2500);
    return () => clearTimeout(t);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[200] flex flex-col items-end"
      style={{ animation: 'fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both' }}
    >
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1); opacity: 0.4; }
          70%  { transform: scale(1.4); opacity: 0; }
          100% { transform: scale(1.4); opacity: 0; }
        }
      `}</style>

      {!isDismissed && (
        <div className="glass-card mb-4 p-6 pr-10 max-w-[260px] relative shadow-soft border border-brand-line overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-brand-primary/5 rounded-full -mr-8 -mt-8 blur-xl group-hover:bg-brand-primary/10 transition-colors"></div>
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-3 right-3 text-brand-faint hover:text-brand-text transition-colors p-1 z-10"
            aria-label="Dismiss"
          >
            <X size={14} />
          </button>
          
          <div className="relative z-10">
            <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] mb-2 font-display">Live Curation</p>
            <p className="text-brand-text text-sm font-extrabold leading-tight mb-2 font-display uppercase tracking-tight">Need technical assistance?</p>
            <p className="text-brand-muted text-[11px] font-medium leading-relaxed italic opacity-80">Our curators are standing by for your uplink request.</p>
          </div>
          
          {/* Arrow point */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-brand-surface border-b border-r border-brand-line rotate-45"></div>
        </div>
      )}

      <div className="relative flex items-center justify-center">
        <div
          className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#25D366] opacity-30 pointer-events-none"
          style={{ animation: 'pulse-ring 3s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite' }}
        />
        <a
          href={createWhatsAppLink(WA_MESSAGES.widgetHelp)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative w-16 h-16 md:w-20 md:h-20 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-eight flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-500 focus-visible:ring-4 focus-visible:ring-[#25D366]/50 outline-none group"
        >
          <MessageSquare className="w-8 h-8 fill-white group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-brand-text text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-[#25D366]">1</div>
        </a>
      </div>
    </div>
  );
};
