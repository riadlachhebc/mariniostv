import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { FAQContent, devicesFAQs, generateFAQSchema } from '../components/FAQ';
import { Tv, Smartphone, Monitor, Laptop, CheckCircle, ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import { createWhatsAppLink, WA_MESSAGES } from '../utils/whatsapp';
import devicesImg from '../assets/images/devices-mockup.webp';

export const Devices = () => {
  const devices = [
    { name: 'Smart TV', sub: 'Samsung, LG, Sony, Hisense', icon: <Tv /> },
    { name: 'Android TV Box', sub: 'Nvidia Shield, Firestick, MAG', icon: <Monitor /> },
    { name: 'Apple TV', sub: 'All generations supported', icon: <Tv /> },
    { name: 'Android Phone', sub: 'Any Android 5.0+ device', icon: <Smartphone /> },
    { name: 'iPhone & iPad', sub: 'iOS 12+ supported', icon: <Smartphone /> },
    { name: 'PC / Mac', sub: 'VLC, Browser, IPTV players', icon: <Laptop /> },
  ];

  const steps = [
    { step: 'O1', title: 'Initialize Access', desc: 'Secure your trial or plan via our WhatsApp portal. Instant uplink.' },
    { step: 'O2', title: 'Technical Delivery', desc: 'Receive your M3U architecture and Xtream credentials immediately.' },
    { step: 'O3', title: 'Interface Setup', desc: 'Launch TiviMate, Smarters Pro, or VLC on your chosen canvas.' },
    { step: 'O4', title: 'Begin Streaming', desc: 'Synchronize your library and explore 40,000+ curated channels.' },
  ];

  const siteUrl = 'https://mariniosiptvpro.com';

  return (
    <div className="bg-brand-bg min-h-screen">
      <SEO 
        title="Marinios IPTV Devices – Setup on Firestick & Smart TV"
        description="Marinios IPTV works on Smart TVs, Firestick, Android boxes, and more. Enjoy a seamless 5-minute setup on any device for the best 4K streaming experience."
        canonical="/devices"
        schema={generateFAQSchema(devicesFAQs)}
      />

      {/* HERO: The Ecosystem Architecture */}
      <section className="relative pt-10 pb-12 md:pt-20 md:pb-20 overflow-hidden px-4 bg-brand-surface">
        <div className="absolute inset-0 bg-hero-radial opacity-30"></div>
        <div className="container max-w-7xl relative z-10 px-2 sm:px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20 text-center lg:text-left">
            <div className="flex-1">
              <div className="inline-flex py-1.5 px-5 rounded-full bg-brand-primary/5 text-xs font-extrabold text-brand-primary uppercase tracking-[0.3em] mb-8 font-display">Unified Ecosystem</div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-brand-text mb-8 tracking-tighter leading-none font-display uppercase italic">
                A BORDERLESS<br />
                <span className="text-brand-primary not-italic">CANVAS.</span>
              </h1>
              <p className="text-lg md:text-2xl text-brand-muted max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Deploy the <strong className="text-brand-text font-bold">Best IPTV for Amazon Firestick</strong>, or an intuitive <strong className="text-brand-text font-bold">IPTV for Smart TV and Android box</strong> instantly. The Marinios experience remains uncompromisingly premium across all screens.
              </p>
            </div>
            <div className="flex-1 max-w-xl relative">
              <div className="absolute inset-0 bg-brand-primary/10 blur-[80px] rounded-full scale-125"></div>
              <img 
                src={devicesImg} 
                alt="Marinios IPTV ecosystem" 
                width="1024"
                height="1024"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXTENDED SEO TARGETING DEVICES */}
      <section className="pt-8 pb-16 md:pb-24 px-4 bg-brand-surface border-b border-brand-line">
        <div className="container max-w-4xl text-center lg:text-left">
           <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text mb-6 font-display">Manage 4K IPTV Multiple Connections Worldwide</h2>
           <p className="text-base md:text-lg text-brand-muted leading-relaxed font-medium">
             Need an <strong className="text-brand-text font-bold">IPTV subscription for Tivimate</strong> or the optimal <strong className="text-brand-text font-bold">IPTV Smarters Pro server setup</strong>? We support the world's finest streaming applications natively. Whether you are looking for <strong className="text-brand-text font-bold">IPTV for live sports and PPV events</strong> on your mobile or a <strong className="text-brand-text font-bold">Cheap IPTV with premium channels</strong> for your living room, Marinios handles every aspect of your hardware effortlessly. Guaranteed seamless playback via our <strong className="text-brand-text font-bold">M3U playlist with 100% uptime</strong>.
           </p>
        </div>
      </section>

      {/* DEVICE GRID: Tonal Layering */}
      <section className="py-16 md:py-24 px-4 bg-brand-bg border-t border-brand-line">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {devices.map((d, i) => (
              <div key={i} className="flex flex-col gap-6 p-10 rounded-eight bg-brand-surface border border-brand-line hover:border-brand-primary/30 shadow-card hover:shadow-soft transition-all duration-500 hover:-translate-y-2 group cursor-default">
                <div className="w-16 h-16 rounded-eight bg-brand-bg border border-brand-line group-hover:bg-brand-primary group-hover:border-brand-primary flex items-center justify-center text-brand-primary group-hover:text-white transition-all duration-500 [&>svg]:w-6 [&>svg]:h-6">
                  {d.icon}
                </div>
                <div>
                  <h2 className="font-extrabold text-brand-text text-xl mb-2 font-display uppercase tracking-tight">{d.name} Setup</h2>
                  <p className="text-brand-muted text-sm font-medium leading-relaxed italic">{d.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SETUP PROTOCOL: Editorial Verticality */}
      <section className="py-16 md:py-24 px-4 bg-brand-surface2/30 border-t border-brand-line">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-24 md:mb-32">
            <h2 className="text-4xl md:text-6xl font-extrabold text-brand-text mb-6 font-display uppercase italic text-center">Setup Protocol.</h2>
            <p className="text-brand-muted font-bold tracking-widest uppercase text-xs">From initiation to broadcast in 300 seconds</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="text-6xl font-black text-brand-primary/10 font-display leading-[0.8] transition-colors duration-500 group-hover:text-brand-primary/20">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-brand-text font-black text-xl mb-3 font-display uppercase tracking-wider">{s.title}</h3>
                  <p className="text-brand-muted text-base leading-relaxed font-medium italic">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPATIBILITY ASSURANCE: Glassmorphism */}
      <section className="py-16 md:py-24 px-4 bg-brand-bg relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-brand-primary/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto max-w-4xl relative z-10 px-2 sm:px-4">
          <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <CheckCircle className="w-16 h-16 text-brand-primary mx-auto mb-10 group-hover:scale-110 transition-transform duration-500" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text mb-8 font-display tracking-tight uppercase italic">Zero Buffering and Anti-Freezing Tech.</h2>
            <p className="text-lg md:text-xl text-brand-muted mb-0 max-w-2xl mx-auto leading-loose font-medium italic">
              Our <strong className="text-brand-text font-bold">buffer-free IPTV provider</strong> network is built for absolute performance. We guarantee a successful uplink on your specific <strong className="text-brand-text font-bold">IPTV for Smart TV and Android box</strong>, regardless of hardware complexity.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ INJECTION */}
      <section className="py-16 md:py-24 px-4 bg-brand-surface border-t border-brand-line">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-6 font-display">Knowledge Base</h2>
            <p className="text-brand-muted font-bold tracking-widest uppercase text-xs">Answering your most pressing setup questions</p>
          </div>
          <div className="glass-card p-8 md:p-12">
            <FAQContent faqs={devicesFAQs} />
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 md:py-24 px-4 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient opacity-95"></div>
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <h2 className="text-5xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-none font-display uppercase italic">INITIATE.</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-16 font-bold tracking-wide">Secure your cinematic uplink in minutes.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={createWhatsAppLink(WA_MESSAGES.freeTrial)} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-3 px-14 py-6 bg-white text-brand-primary font-display font-black rounded-eight shadow-2xl hover:scale-105 active:scale-95 transition-all text-xl uppercase tracking-widest">
              FREE TEST <Zap className="w-5 h-5 fill-brand-primary" />
            </a>
            <Link to="/pricing"
               className="inline-flex items-center justify-center gap-3 px-14 py-6 bg-transparent border-2 border-white/40 text-white font-display font-black rounded-eight hover:bg-white/10 hover:border-white transition-all text-xl uppercase tracking-widest">
              BUY NOW <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
