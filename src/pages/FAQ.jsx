import React from 'react';
import { SEO } from '../components/SEO';
import { FAQContent } from '../components/FAQ';
import { createWhatsAppLink, WA_MESSAGES } from '../utils/whatsapp';

export const FAQPage = () => {
  return (
    <div className="bg-brand-bg min-h-[70vh] pt-20 pb-24 px-4">
      <SEO 
        title="Marinios IPTV FAQ – Frequently Asked Questions Answered"
        description="Find answers to common questions about Marinios IPTV subscriptions, device compatibility, channel lists, and technical support in our Knowledge Vault."
        canonical="/faq"
      />
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-text mb-6 font-display italic">Knowledge Base.</h1>
          <p className="text-brand-muted font-bold tracking-widest uppercase text-xs">Everything you need to know about your new gallery</p>
        </div>
        <div className="glass-card p-8 md:p-12">
          <FAQContent />
          <div className="mt-16 pt-12 border-t border-brand-line text-center">
            <h3 className="text-2xl font-extrabold text-brand-text mb-4">Still have questions?</h3>
            <p className="text-brand-muted mb-8 font-medium">Our curators are available 24/7 via private WhatsApp channel.</p>
            <a href={createWhatsAppLink(WA_MESSAGES.support)} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Message Curators <span className="ml-1">💬</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
