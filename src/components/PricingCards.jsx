import React from 'react';
import { Check, Shield, Zap, Headphones, Star, ArrowRight } from 'lucide-react';
import { createWhatsAppLink, WA_MESSAGES } from '../utils/whatsapp';

const features = ['40,000+ live channels', 'Movies & series VOD', 'Full sports coverage', 'Works on all devices', 'Easy app setup in minutes', '24/7 WhatsApp support'];

export const PricingCards = () => {
  const plans = [
    { months: '3 Months', price: '33', per: '11/mo', popular: false },
    { months: '6 Months', price: '47', per: '7.83/mo', popular: false },
    { months: '12 Months', price: '77', per: '6.42/mo', popular: true },
  ];

  return (
    <div className="space-y-12 md:space-y-16 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 items-start max-w-6xl mx-auto">
        {plans.map((p, i) => (
          <div
            key={i}
            className={`flex flex-col rounded-eight transition-all duration-500 overflow-hidden ${p.popular
                ? 'bg-brand-surface border-2 border-brand-primary shadow-glow scale-[1.05] lg:scale-[1.1] z-10'
                : 'bg-brand-surface2/50 border border-brand-line hover:border-brand-primary/30'
              }`}
          >
            {p.popular && (
              <div className="bg-brand-primary py-2 text-center">
                <span className="text-[10px] font-black text-white uppercase tracking-widest flex items-center justify-center gap-2">
                  <Star className="w-3 h-3 fill-white" /> MOST CURATED EXPERIENCE
                </span>
              </div>
            )}

            <div className="p-10 flex flex-col h-full relative">
              {/* Tonal Background Detail for non-popular */}
              {!p.popular && <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full -mr-12 -mt-12 blur-2xl"></div>}

              <div className="mb-10">
                <p className="text-brand-muted font-extrabold text-xs uppercase tracking-[0.2em] mb-4 font-display">{p.months}</p>
                <div className="flex items-start gap-1">
                  <span className="text-2xl font-extrabold text-brand-primary mt-1 font-display">$</span>
                  <span className="text-6xl md:text-7xl font-black text-brand-text leading-none font-display tracking-tighter">{p.price}</span>
                </div>
                <div className="mt-3 inline-flex py-1 px-3 bg-brand-primary/5 rounded-eight text-[11px] font-bold text-brand-primary uppercase tracking-widest">
                  ≈ ${p.per}
                </div>
              </div>

              <ul className="flex flex-col gap-5 mb-12 flex-grow border-t border-brand-line pt-8">
                {features.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-brand-text text-sm font-bold">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${p.popular ? 'bg-brand-primary' : 'bg-brand-primary/20'}`}>
                      <Check className={`w-3 h-3 ${p.popular ? 'text-white' : 'text-brand-primary'}`} />
                    </div>
                    <span className="leading-none">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={createWhatsAppLink(WA_MESSAGES.buyPlan(p.months))}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-primary w-full py-4 text-sm tracking-widest uppercase !rounded-eight group ${!p.popular ? '!bg-brand-surface !text-brand-text border border-brand-line !shadow-none hover:!bg-brand-surface2' : ''}`}
              >
                SELECT CURATION <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Tonal Trust Bar */}
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 pt-8 border-t border-brand-line max-w-4xl mx-auto">
        {[
          { icon: <Shield className="w-5 h-5" />, text: 'SECURE ARCHITECTURE' },
          { icon: <Zap className="w-5 h-5" />, text: 'IMMEDIATE UPLINK' },
          { icon: <Headphones className="w-5 h-5" />, text: 'EXPERT ASSISTANCE' },
        ].map((b, i) => (
          <div key={i} className="flex items-center gap-3 text-brand-faint font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] group">
            <div className="text-brand-primary group-hover:scale-125 transition-transform duration-500">{b.icon}</div>
            <span className="group-hover:text-brand-muted transition-colors">{b.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
