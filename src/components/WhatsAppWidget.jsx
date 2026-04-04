import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { createWhatsAppLink, WA_MESSAGES } from '../utils/whatsapp';

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
          className="relative w-16 h-16 md:w-20 md:h-20 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-eight flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-500 focus-visible:ring-4 focus-visible:ring-[#25D366]/50 outline-none group text-white"
        >
          <WhatsAppIcon className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-brand-text text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-[#25D366]">1</div>
        </a>
      </div>
    </div>
  );
};
