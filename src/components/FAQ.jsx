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

// Default general FAQs
const generalFAQs = [
  { q: "Does Marinios offer a Marinios IPTV free trial?", a: "Yes! We highly encourage you to test our buffer-free IPTV provider network. Claim your Marinios IPTV free trial via WhatsApp to test our M3U playlist with 100% uptime before committing." },
  { q: "Can I buy IPTV with PayPal / Crypto?", a: "Absolutely. We offer highly secure, encrypted checkout options. You can easily buy an IPTV subscription online using PayPal, Bitcoin, or other major cryptocurrencies." },
  { q: "How do I setup 4K IPTV multiple connections?", a: "Our premium plans offer multiple connections on a single Marinios IPTV subscription. You can utilize an IPTV for Smart TV and Android box in the living room while simultaneously running an IPTV subscription for Tivimate on your mobile device." },
  { q: "Where can I read Marinios IPTV reviews?", a: "Our users consistently rate us as the best premium IPTV service 2026. Check our page to see genuine Marinios IPTV reviews highlighting our IPTV for live sports and PPV events." }
];

// Page-specific FAQ sets
export const pricingFAQs = [
  { q: "What is the cheapest Marinios IPTV plan?", a: "Our most affordable plan is the 3-month subscription at $33 (~$11/month). For the best value, we recommend the 12-month plan at $77 (~$6.42/month) which is our most curated experience." },
  { q: "Can I buy IPTV with PayPal / Crypto?", a: "Absolutely. We offer highly secure, encrypted checkout options. You can easily buy an IPTV subscription online using PayPal, Bitcoin, or other major cryptocurrencies." },
  { q: "Is there a money-back guarantee?", a: "Yes. We offer a satisfaction guarantee within our refund policy window. If our service doesn't meet your expectations, contact our support team for assistance with your refund request." },
  { q: "What happens after I pay?", a: "After payment confirmation, your Marinios IPTV account is activated instantly. You'll receive your M3U link and Xtream Codes credentials via WhatsApp or email within minutes." },
  { q: "Can I upgrade my plan later?", a: "Yes! You can upgrade to a longer subscription at any time. Contact our support team via WhatsApp, and we'll apply the difference to your new plan seamlessly." }
];

export const devicesFAQs = [
  { q: "What is the best device for Marinios IPTV?", a: "Amazon Firestick and Android TV boxes like the Nvidia Shield are the most popular choices. They offer excellent performance with apps like Tivimate and IPTV Smarters Pro." },
  { q: "Does Marinios IPTV work on iPhone and iPad?", a: "Yes! We fully support iOS devices. Download IPTV Smarters or a compatible M3U player from the App Store, enter your credentials, and start streaming instantly." },
  { q: "How many devices can I use at once?", a: "Our standard plans support 1 connection. Premium tiers offer 4K IPTV multiple connections, allowing your household to stream different channels simultaneously on multiple devices." },
  { q: "Do I need a VPN to use Marinios IPTV?", a: "While not required, we recommend using a VPN for added privacy and to ensure optimal streaming speeds. It can also help bypass ISP throttling for uninterrupted viewing." }
];

export const channelsFAQs = [
  { q: "How many channels does Marinios IPTV have?", a: "Our curated library includes over 40,000 live channels from around the world, including USA, UK, Canada, Europe, Latin America, Asia, and Africa. We also have 215,000+ VOD titles." },
  { q: "Do you have live sports and PPV events?", a: "Yes! We provide dedicated servers for high-demand PPV events and complete coverage of NFL, NBA, Premier League, UEFA Champions League, UFC, boxing, and Formula 1." },
  { q: "Are channels available in 4K quality?", a: "Many of our premium sports and entertainment channels are available in 4K UHD. Standard channels are delivered in HD quality with zero buffering." },
  { q: "Is the channel list updated regularly?", a: "Our channel list is updated weekly. New channels, events, and VOD content are added regularly to ensure you always have the latest entertainment options." }
];

export const setupGuidesFAQs = [
  { q: "How long does setup take?", a: "Most users are watching within 5 minutes. Simply install your preferred app (Tivimate, Smarters Pro), enter the credentials we provide, and start streaming." },
  { q: "What app should I use for Marinios IPTV?", a: "We recommend Tivimate for the best experience on Firestick and Android. IPTV Smarters Pro is excellent for cross-platform use. Both support our M3U playlist and Xtream Codes." },
  { q: "What is an M3U playlist vs Xtream Codes?", a: "Both are methods to connect to our servers. M3U is a direct playlist URL, while Xtream Codes uses a server URL + username/password. We provide both options with every subscription." },
  { q: "I'm having trouble setting up. What should I do?", a: "Contact our 24/7 support team via WhatsApp for personalized setup assistance. Our expert curators will guide you through the entire process step by step." }
];

export const homeFAQs = generalFAQs;

export const FAQContent = ({ faqs }) => {
  const questions = faqs || generalFAQs;

  return (
    <div className="w-full">
      {questions.map((f, i) => (
        <FAQItem key={i} question={f.q} answer={f.a} />
      ))}
    </div>
  );
};

/**
 * Generates FAQPage JSON-LD structured data for rich snippets.
 * Include this in the page's SEO component schema prop.
 */
export const generateFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
};
