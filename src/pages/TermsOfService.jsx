import React from 'react';
import { SEO } from '../components/SEO';
import { Gavel, MessageSquare, Zap, Globe, ShieldAlert } from 'lucide-react';

export const TermsOfService = () => {
  const siteUrl = 'https://mariniosiptvpro.com';

  return (
    <div className="bg-brand-bg min-h-screen">
      <SEO 
        title="Usage Architecture – Marinios IPTV | Terms of Service"
        description="Marinios IPTV terms of service. Guidelines for your cinematic uplink, subscription responsibilities, and service protocols."
        canonical="/terms"
      />

      {/* HERO: The Terms Header */}
      <section className="relative pt-10 pb-12 md:pt-20 md:pb-20 overflow-hidden px-4 bg-brand-surface">
        <div className="absolute inset-0 bg-hero-radial opacity-30"></div>
        <div className="container max-w-4xl relative z-10 mx-auto text-center">
          <div className="inline-flex py-1.5 px-5 rounded-full bg-brand-primary/5 text-xs font-extrabold text-brand-primary uppercase tracking-[0.3em] mb-10 font-display italic">Protocol Beta</div>
          <h1 className="text-5xl md:text-8xl font-extrabold text-brand-text mb-8 tracking-tighter leading-none font-display uppercase italic">
            Usage<br />
            <span className="text-brand-primary not-italic">Architecture.</span>
          </h1>
          <p className="text-lg md:text-2xl text-brand-muted max-w-2xl mx-auto font-medium leading-relaxed italic">
            Defining the parameters of your cinematic uplink and the responsibilities of the modern curator.
          </p>
        </div>
      </section>

      {/* CONTENT: The Terms Detail */}
      <section className="py-16 md:py-24 px-4 bg-brand-bg border-t border-brand-line">
        <div className="container max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-16">
            <div className="prose prose-stone max-w-none prose-lg prose-headings:font-display prose-headings:uppercase prose-headings:italic prose-headings:font-extrabold prose-headings:tracking-tighter prose-headings:text-brand-text prose-p:text-brand-muted prose-p:font-medium prose-p:leading-loose prose-p:italic prose-p:opacity-90 prose-strong:text-brand-text">
              <h2 className="text-3xl mb-8">O1. Service Protocol</h2>
              <p>
                By initializing a subscription with <strong>Marinios IPTV</strong>, you enter into a professional broadcast partnership. We provide high-performance streaming access; you agree to utilize this access within the designated parameters of your curated plan.
              </p>

              <h2 className="text-3xl mt-16 mb-8">O2. Account Curation</h2>
              <p>
                Each account is precisely engineered for a specific number of simultaneous connections. Re-broadcasting or unauthorized distribution of your M3U architecture is prohibited and will result in immediate protocol termination.
              </p>

              <h2 className="text-3xl mt-16 mb-8">O3. Cinematic Integrity</h2>
              <p>
                We strive for 99.9% uplink stability. However, the nature of global streaming architecture involves variables outside our direct curation. Periodic maintenance may occur to ensure the long-term health of our multivers gallery.
              </p>

              <h2 className="text-3xl mt-16 mb-8">O4. Support Handshake</h2>
              <p>
                All technical assistance is conducted via our secure WhatsApp portal. We guarantee human-led curatorship for any hardware configuration within our supported ecosystem.
              </p>

              <div className="mt-20 p-10 bg-brand-primary rounded-eight border border-brand-line flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-gradient opacity-90"></div>
                <div className="w-16 h-16 bg-white rounded-eight flex items-center justify-center shrink-0 relative z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <Gavel className="w-8 h-8 text-brand-primary" />
                </div>
                <div className="relative z-10 text-center md:text-left">
                  <h4 className="text-white font-black uppercase tracking-widest font-display mb-2 text-xl">Legal Synchronization</h4>
                  <p className="text-white/80 text-sm italic font-medium leading-relaxed">By maintaining your uplink, you agree to these architectural standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
