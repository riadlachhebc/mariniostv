import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`mb-6 rounded-eight transition-all duration-500 ${isOpen ? 'bg-brand-surface shadow-soft border border-brand-line' : 'bg-brand-surface2 border border-transparent hover:border-brand-line'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full text-left px-8 py-6 font-display font-black text-lg md:text-xl flex justify-between items-center transition-all group"
      >
        <span className={`pr-4 uppercase tracking-tighter leading-none transition-colors duration-300 ${isOpen ? 'text-brand-primary' : 'text-brand-text'}`}>{question}</span>
        <div className={`p-2 rounded-eight transition-all duration-500 ${isOpen ? 'bg-brand-primary text-white rotate-180' : 'bg-brand-surface text-brand-muted group-hover:text-brand-primary shadow-sm'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <div 
        className="grid transition-all duration-300 ease-in-out" 
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="px-8 pb-8 pt-2 text-brand-muted text-base md:text-lg leading-loose font-medium max-w-2xl italic opacity-80">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export const FAQContent = () => {
  const faqs = [
    { q: "Does Marinios offer a Marinios IPTV free trial?", a: "Yes! We highly encourage you to test our buffer-free IPTV provider network. Claim your Marinios IPTV free trial via WhatsApp to test our M3U playlist with 100% uptime before committing." },
    { q: "Can I buy IPTV with PayPal / Crypto?", a: "Absolutely. We offer highly secure, encrypted checkout options. You can easily buy an IPTV subscription online using PayPal, Bitcoin, or other major cryptocurrencies." },
    { q: "How do I setup 4K IPTV multiple connections?", a: "Our premium plans offer multiple connections on a single Marinios IPTV subscription. You can utilize an IPTV for Smart TV and Android box in the living room while simultaneously running an IPTV subscription for Tivimate on your mobile device." },
    { q: "Where can I read Marinios IPTV reviews?", a: "Our users consistently rate us as the best premium IPTV service 2026. Check our page to see genuine Marinios IPTV reviews highlighting our IPTV for live sports and PPV events." }
  ];

  return (
    <div className="w-full">
      {faqs.map((f, i) => (
        <FAQItem key={i} question={f.q} answer={f.a} />
      ))}
    </div>
  );
};
