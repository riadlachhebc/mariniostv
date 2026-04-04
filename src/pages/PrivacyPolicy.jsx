import React from 'react';
import { SEO } from '../components/SEO';
import { Shield, Lock, Eye, Server, UserCheck } from 'lucide-react';

export const PrivacyPolicy = () => {
  const siteUrl = 'https://mariniosiptvpro.com';

  return (
    <div className="bg-brand-bg min-h-screen">
      <SEO 
        title="Privacy Architecture – Marinios IPTV | Data Integrity"
        description="Marinios IPTV privacy policy. How we handle your data, protect your cinematic uplink, and ensure a secure streaming ecosystem."
        canonical="/privacy"
      />

      {/* HERO: The Integrity Protocol */}
      <section className="relative pt-10 pb-12 md:pt-20 md:pb-20 overflow-hidden px-4 bg-brand-surface">
        <div className="absolute inset-0 bg-hero-radial opacity-30"></div>
        <div className="container max-w-4xl relative z-10 mx-auto text-center">
          <div className="inline-flex py-1.5 px-5 rounded-full bg-brand-primary/5 text-xs font-extrabold text-brand-primary uppercase tracking-[0.3em] mb-10 font-display italic">Protocol Alpha</div>
          <h1 className="text-5xl md:text-8xl font-extrabold text-brand-text mb-8 tracking-tighter leading-none font-display uppercase italic">
            DATA<br />
            <span className="text-brand-primary not-italic">INTEGRITY.</span>
          </h1>
          <p className="text-lg md:text-2xl text-brand-muted max-w-2xl mx-auto font-medium leading-relaxed italic">
            Addressing the architecture of transparency, protection, and your digital footprint within the Marinios ecosystem.
          </p>
        </div>
      </section>

      {/* CONTENT: The Policy Grid */}
      <section className="py-16 md:py-24 px-4 bg-brand-bg border-t border-brand-line">
        <div className="container max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-16">
            <div className="prose prose-stone max-w-none prose-lg prose-headings:font-display prose-headings:uppercase prose-headings:italic prose-headings:font-extrabold prose-headings:tracking-tighter prose-headings:text-brand-text prose-p:text-brand-muted prose-p:font-medium prose-p:leading-loose prose-p:italic prose-p:opacity-90 prose-strong:text-brand-text">
              <h2 className="text-3xl mb-8">O1. Strategic Overview</h2>
              <p>
                At <strong>Marinios IPTV</strong>, we recognize the importance of privacy and integrity. This document outlines the protocols through which we collect, store, and utilize data to enhance your cinematic experience. By initializing an uplink, you consent to the architectural standards described herein.
              </p>

              <h2 className="text-3xl mt-16 mb-8">O2. Information Collection</h2>
              <p>
                To provide an uncompromising streaming service, we may collect minimal data points including:
              </p>
              <ul>
                <li><strong>Credential Data</strong>: WhatsApp handles for direct curatorial assistance.</li>
                <li><strong>Technical Telemetry</strong>: Device type and playback protocol to optimize buffer-free delivery.</li>
                <li><strong>Transaction Logistics</strong>: Payment confirmations for account synchronization.</li>
              </ul>

              <h2 className="text-3xl mt-16 mb-8">O3. Protection Layer</h2>
              <p>
                Your data is shielded behind advanced encryption protocols. We utilize high-performance, dedicated server infrastructure to ensure your uplink remains private and secure from unauthorized access. We do not sell or trade your digital footprint.
              </p>

              <h2 className="text-3xl mt-16 mb-8">O4. Cookies & Logic</h2>
              <p>
                Our platform utilizes "cookies" — small files designed to improve site navigation and recognize your session metadata. These files are tactical and do not compromise your device integrity.
              </p>

              <div className="mt-20 p-8 bg-brand-surface2 rounded-eight border border-brand-line flex items-center gap-6">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-brand-text font-black uppercase tracking-tight font-display mb-1">Elite Assurance</h4>
                  <p className="text-brand-muted text-sm italic font-medium">Your privacy is not a feature; it is an architectural foundation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
