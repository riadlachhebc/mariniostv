import React from 'react';
import { Link } from 'react-router-dom';

import { SEO } from '../components/SEO';
import { MessageSquare, Zap, Target, Shield, ArrowRight, Star, Globe, Headphones } from 'lucide-react';
import { createWhatsAppLink, WA_MESSAGES } from '../utils/whatsapp';
import supportImg from '../assets/images/support-visual.webp';

export const Contact = () => {
  const siteUrl = 'https://mariniosiptvpro.com';

  return (
    <div className="bg-brand-bg min-h-screen">
      <SEO 
        title="Marinios IPTV Support – Contact Us via WhatsApp 24/7"
        description="Contact Marinios IPTV via WhatsApp for instant support, free trial requests, and subscription help. Fast response and 24/7 availability for all users."
        canonical="/contact"
      />

      {/* HERO: The Human Connection */}
      <section className="relative pt-10 pb-12 md:pt-20 md:pb-20 overflow-hidden px-4 bg-brand-surface">
        <div className="absolute inset-0 bg-hero-radial opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#25D366]/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container max-w-7xl relative z-10 px-2 sm:px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20 text-center lg:text-left">
            <div className="flex-1">
              <div className="inline-flex py-1.5 px-5 rounded-full bg-brand-primary/5 text-xs font-extrabold text-brand-primary uppercase tracking-[0.3em] mb-8 font-display">DIRECT ASSISTANCE</div>
               <h1 className="text-4xl md:text-8xl font-extrabold text-brand-text mb-8 tracking-tighter leading-none font-display uppercase italic text-center lg:text-left">
                 Marinios IPTV<br />
                 <span className="text-brand-primary not-italic inline-block lg:block">Support 2026.</span>
               </h1>
              <p className="text-lg md:text-2xl text-brand-muted max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed mb-12">
                We reject automated loops. Your Marinios experience is supported by a global gallery of expert curators. Whether you want to <strong className="text-brand-text font-bold">buy an IPTV subscription online</strong> or request a <strong className="text-brand-text font-bold">Marinios IPTV free trial</strong>, we are available 24/7 through our secure WhatsApp portal.
              </p>
              
              <a
                href={createWhatsAppLink(WA_MESSAGES.widgetHelp)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#25D366] text-white font-display font-black rounded-eight shadow-2xl hover:scale-105 active:scale-95 transition-all text-xl uppercase tracking-widest"
              >
                <MessageSquare className="w-6 h-6 fill-white" />
                CHAT ON WHATSAPP
              </a>
            </div>
            
            <div className="flex-1 max-w-sm hidden lg:block relative">
               <div className="absolute inset-0 bg-brand-primary/10 blur-[60px] rounded-full scale-125"></div>
               <img 
                src={supportImg} 
                alt="24/7 Support Agent Badge" 
                width="1024"
                height="1024"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES: Tonal Layering */}
      <section className="py-16 md:py-24 px-4 bg-brand-bg border-t border-brand-line">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              { title: "Plan Curation", desc: "Consult with a curator to determine the ideal uplink duration for your vision.", icon: <Target className="w-8 h-8 text-brand-primary" /> },
              { title: "Trial Initiation", desc: "Request full 24H access to our cinematic vault at no obligation with our Marinios IPTV free trial.", icon: <Zap className="w-8 h-8 text-brand-primary" /> },
              { title: "Zero Buffering Setup", desc: "Receive direct architectural support to ensure an IPTV with zero buffering and anti-freezing setup.", icon: <Shield className="w-8 h-8 text-brand-primary" /> }
            ].map((s, i) => (
              <div key={i} className="bg-brand-surface border border-brand-line p-10 rounded-eight hover:border-brand-primary/30 shadow-card hover:shadow-soft transition-all duration-500 hover:-translate-y-2 group cursor-default">
                <div className="w-16 h-16 rounded-eight bg-brand-bg border border-brand-line flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-500">
                  {s.icon}
                </div>
                <h3 className="text-xl font-extrabold text-brand-text mb-4 font-display uppercase tracking-tight leading-tight">{s.title}</h3>
                <p className="text-brand-muted text-base font-medium leading-loose italic">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT ASSURANCE: High-End Editorial */}
      <section className="py-16 md:py-24 px-4 bg-brand-surface2/30 border-t border-brand-line relative overflow-hidden">
        <div className="container mx-auto max-w-5xl px-2 sm:px-4 text-center">
          <div className="glass-card p-12 md:p-24 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 p-8 opacity-[0.02]">
              <MessageSquare className="w-64 h-64 text-brand-primary fill-brand-primary" />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold text-brand-text mb-12 font-display uppercase italic text-center tracking-tighter">Response Velocity.</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  { value: 'STABLE', label: 'CONNECTION' },
                  { value: '< 5MIN', label: 'RESPONSE TIME' },
                  { value: 'ELITE', label: 'ASSISTANCE' },
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="text-3xl font-black text-brand-primary mb-2 font-display">{stat.value}</div>
                    <div className="text-[10px] font-black text-brand-faint uppercase tracking-[0.3em] font-display">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center gap-6">
                <p className="text-brand-muted text-lg font-medium leading-loose max-w-lg italic opacity-80 mb-4">
                  As the <strong className="text-brand-text font-bold">best premium IPTV service 2026</strong>, our commitment to visual and technical excellence extends to our customer relations. We are live, always.
                </p>
                <a href={createWhatsAppLink(WA_MESSAGES.widgetHelp)} target="_blank" rel="noopener noreferrer" className="btn-secondary group">
                   INITIATE BROADCAST <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL BROADCAST AREA */}
      <section className="py-16 md:py-24 px-4 bg-brand-primary overflow-hidden relative">
        <div className="absolute inset-0 bg-brand-gradient opacity-95"></div>
        <div className="container max-w-4xl text-center relative z-10">
          <h2 className="text-6xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-none font-display uppercase italic">CONNECT.</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-16 font-bold tracking-wide">The fastest uplink in the cinematic multivers.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a href={createWhatsAppLink(WA_MESSAGES.widgetHelp)} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-3 px-14 py-6 bg-white text-[#25D366] font-display font-black rounded-eight shadow-2xl hover:scale-105 active:scale-95 transition-all text-xl uppercase tracking-widest">
              WHATSAPP <MessageSquare className="w-6 h-6 fill-[#25D366]" />
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
