import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Zap, Clock, CreditCard, Play } from 'lucide-react';
import { createWhatsAppLink, WA_MESSAGES } from '../utils/whatsapp';

export const FreeTrial = () => {
  const siteUrl = 'https://mariniosiptvpro.com';

  return (
    <div className="bg-brand-bg min-h-screen flex flex-col justify-center items-center py-20 px-4">
      <SEO 
        title="Get a 24-Hour IPTV Free Trial | Marinios IPTV"
        description="Test the best buffer-free streaming service today. Claim your 24-hour IPTV free trial with Marinios IPTV. Instant activation, no credit card required."
        canonical="/iptv-free-trial"
      />

      <div className="max-w-2xl w-full text-center">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-8">
          <Clock className="w-4 h-4" /> 24-Hour Pass
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-brand-text mb-6 font-display leading-tight">
          Marinios IPTV Free Trial | Best Premium IPTV Service 2026
        </h1>
        
        <p className="text-lg text-brand-muted font-medium mb-10">
          Test the best <strong className="text-brand-text font-bold">buffer-free IPTV provider</strong> today. Claim your 24-hour <strong className="text-brand-text font-bold">Marinios IPTV free trial</strong> and experience our <strong className="text-brand-text font-bold">IPTV with zero buffering and anti-freezing</strong> technology. Instant activation, <strong className="text-brand-primary font-bold">No Credit Card Required.</strong>
        </p>

        <div className="glass-card p-10 mb-12 text-center">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4 font-display">
            How to Get Your Free M3U Playlist & Xtream Codes
          </h2>
          <p className="text-brand-muted mb-8 font-medium">
            Simply message our server curators via WhatsApp to initialize your access to our <strong className="text-brand-text font-bold">M3U playlist with 100% uptime</strong>. Whether you need the <strong className="text-brand-text font-bold">best IPTV for Amazon Firestick</strong> or <strong className="text-brand-text font-bold">IPTV for Smart TV and Android box</strong>, our trial covers every device.
          </p>

          <a href={createWhatsAppLink(WA_MESSAGES.freeTrial)} target="_blank" rel="noopener noreferrer" className="btn-primary w-full max-w-sm mx-auto flex items-center justify-center py-4 text-lg">
             Activate Trial via WhatsApp <Zap className="w-5 h-5 ml-2 fill-white" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
          <div className="p-6 bg-brand-surface rounded-eight border border-brand-line">
            <h2 className="font-extrabold text-brand-text mb-2 flex items-center"><Play className="w-4 h-4 text-brand-primary mr-2" /> Why Test Marinios IPTV?</h2>
            <p className="text-brand-muted text-sm font-medium">Test our real-world latency, explore the specific <strong className="text-brand-text font-bold">best IPTV for USA and UK channels</strong>, and access our <strong className="text-brand-text font-bold">IPTV for live sports and PPV events</strong> before committing.</p>
          </div>
          <div className="p-6 bg-brand-surface rounded-eight border border-brand-line">
            <h2 className="font-extrabold text-brand-text mb-2 flex items-center"><CreditCard className="w-4 h-4 text-brand-primary mr-2" /> Ready to Upgrade?</h2>
            <p className="text-brand-muted text-sm font-medium">If you are happy with the quality, you can upgrade to a full premium plan.</p>
            <Link to="/pricing" className="text-brand-primary font-bold text-xs uppercase tracking-widest mt-2 inline-block hover:underline">View Premium Packages</Link>
          </div>
        </div>

        <Link to="/setup-guides" className="text-brand-muted hover:text-brand-text font-medium underline">
          Need help setting up your trial? View our guides.
        </Link>
      </div>
    </div>
  );
};
