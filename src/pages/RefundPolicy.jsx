import React from 'react';
import { SEO } from '../components/SEO';
import { RefreshCcw, ShieldCheck, Zap, HeartHandshake, AlertTriangle } from 'lucide-react';

export const RefundPolicy = () => {
  const siteUrl = 'https://mariniosiptvpro.com';

  return (
    <div className="bg-brand-bg min-h-screen">
      <SEO 
        title="Symmetry Gaurantee – Marinios IPTV | Refund Strategy"
        description="Marinios IPTV refund policy. Our commitment to stability and your satisfaction. How we handle cancellations and curatorial reversals."
        canonical="/refund"
      />

      {/* HERO: The Refund Header */}
      <section className="relative pt-10 pb-12 md:pt-20 md:pb-20 overflow-hidden px-4 bg-brand-surface">
        <div className="absolute inset-0 bg-hero-radial opacity-30"></div>
        <div className="container max-w-4xl relative z-10 mx-auto text-center">
          <div className="inline-flex py-1.5 px-5 rounded-full bg-brand-primary/5 text-xs font-extrabold text-brand-primary uppercase tracking-[0.3em] mb-10 font-display italic">Stability Guarantee</div>
          <h1 className="text-5xl md:text-8xl font-extrabold text-brand-text mb-8 tracking-tighter leading-none font-display uppercase italic">
            REFUND<br />
            <span className="text-brand-primary not-italic text-outline-darker">STRATEGY.</span>
          </h1>
          <p className="text-lg md:text-2xl text-brand-muted max-w-2xl mx-auto font-medium leading-relaxed italic">
            Addressing the architecture of satisfaction and the conditions of curatorial reversal.
          </p>
        </div>
      </section>

      {/* CONTENT: The Policy Detail */}
      <section className="py-16 md:py-24 px-4 bg-brand-bg border-t border-brand-line">
        <div className="container max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-16">
            <div className="prose prose-stone max-w-none prose-lg prose-headings:font-display prose-headings:uppercase prose-headings:italic prose-headings:font-extrabold prose-headings:tracking-tighter prose-headings:text-brand-text prose-p:text-brand-muted prose-p:font-medium prose-p:leading-loose prose-p:italic prose-p:opacity-90 prose-strong:text-brand-text">
              <h2 className="text-3xl mb-8">O1. The Stability Promise</h2>
              <p>
                At <strong>Marinios IPTV</strong>, we are committed to visual and technical excellence. Before initializing a full uplink, we strongly encourage all curators to utilize our <strong>24-hour Free Handshake (Trial)</strong> to ensure ecosystem compatibility.
              </p>

              <h2 className="text-3xl mt-16 mb-8">O2. Refund Eligibility</h2>
              <p>
                Refunds are architected on a Case-by-Case basis. If you experience persistent technical failure that our curators cannot resolve within 72 hours of your initial uplink, we will reverse your subscription.
              </p>
              <ul>
                <li><strong>7-Day Window</strong>: Refund requests must be initiated via WhatsApp within 7 days of subscription.</li>
                <li><strong>Systemic Failure Only</strong>: General content preference is not an architecture-level failure and does not qualify for reversal.</li>
              </ul>

              <h2 className="text-3xl mt-16 mb-8">O3. Reversal Protocol</h2>
              <p>
                Once a refund is approved by our technical curators, the original payment method will be credited. Please allow 5-10 technical cycles (business days) for the synchronization to appear in your account.
              </p>

              <h2 className="text-3xl mt-16 mb-8">O4. Strategic Exclusions</h2>
              <p>
                Refunds are not granted for account terminations caused by violations of our **Terms of Service**, including unauthorized re-broadcasting or credential sharing.
              </p>

              <div className="mt-20 p-12 bg-brand-surface2 rounded-eight border border-brand-line relative overflow-hidden group">
                <div className="absolute -right-20 -top-20 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000 group-hover:rotate-12">
                   <RefreshCcw className="w-80 h-80 text-brand-primary" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                  <div className="w-20 h-20 bg-brand-bg rounded-eight border-2 border-brand-primary/20 flex items-center justify-center shrink-0 shadow-soft group-hover:rotate-12 transition-transform duration-500">
                    <HeartHandshake className="w-10 h-10 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-brand-text font-black uppercase tracking-widest font-display mb-3 text-2xl">Human Handshake</h4>
                    <p className="text-brand-muted text-base leading-relaxed font-medium italic">Our curators are humans, not algorithms. We will always work with you to find a symmetrical solution to technical friction.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
