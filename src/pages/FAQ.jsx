import React from 'react';
import { SEO } from '../components/SEO';
import { 
  FAQContent, 
  homeFAQs, 
  pricingFAQs, 
  devicesFAQs, 
  channelsFAQs, 
  setupGuidesFAQs, 
  generateFAQSchema 
} from '../components/FAQ';
import { createWhatsAppLink, WA_MESSAGES } from '../utils/whatsapp';

export const FAQPage = () => {
  const allFAQs = [
    ...homeFAQs,
    ...pricingFAQs,
    ...devicesFAQs,
    ...channelsFAQs,
    ...setupGuidesFAQs
  ];

  const uniqueFAQs = allFAQs.filter((faq, index, self) =>
    index === self.findIndex((f) => f.q === faq.q)
  );

  return (
    <div className="bg-brand-bg min-h-[70vh] pt-20 pb-24 px-4">
      <SEO 
        title="Marinios IPTV FAQ – Frequently Asked Questions Answered"
        description="Find answers to common questions about Marinios IPTV subscriptions, pricing, device compatibility, channel lists, and setup guides in our Knowledge Vault."
        canonical="/faq"
        schema={generateFAQSchema(uniqueFAQs)}
      />
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex py-1.5 px-5 rounded-full bg-brand-primary/5 text-xs font-extrabold text-brand-primary uppercase tracking-[0.3em] mb-6 font-display">
            Knowledge Vault
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-text mb-6 font-display italic">
            Frequently Asked Questions
          </h1>
          <p className="text-brand-muted font-medium text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to know about your Marinios IPTV subscription, hardware configuration, and 40,000+ live channel catalog.
          </p>
        </div>

        <div className="space-y-16">
          {/* General FAQs */}
          <section>
            <h2 className="text-2xl font-extrabold text-brand-text mb-6 font-display uppercase tracking-tight flex items-center gap-3">
              <span className="w-2 h-6 bg-brand-primary rounded-full inline-block"></span>
              General &amp; Free Trial
            </h2>
            <div className="glass-card p-6 md:p-10">
              <FAQContent faqs={homeFAQs} />
            </div>
          </section>

          {/* Pricing & Billing */}
          <section>
            <h2 className="text-2xl font-extrabold text-brand-text mb-6 font-display uppercase tracking-tight flex items-center gap-3">
              <span className="w-2 h-6 bg-brand-primary rounded-full inline-block"></span>
              Pricing &amp; Payment Architecture
            </h2>
            <div className="glass-card p-6 md:p-10">
              <FAQContent faqs={pricingFAQs} />
            </div>
          </section>

          {/* Device Compatibility */}
          <section>
            <h2 className="text-2xl font-extrabold text-brand-text mb-6 font-display uppercase tracking-tight flex items-center gap-3">
              <span className="w-2 h-6 bg-brand-primary rounded-full inline-block"></span>
              Devices &amp; Multi-Room Setup
            </h2>
            <div className="glass-card p-6 md:p-10">
              <FAQContent faqs={devicesFAQs} />
            </div>
          </section>

          {/* Channels & VOD */}
          <section>
            <h2 className="text-2xl font-extrabold text-brand-text mb-6 font-display uppercase tracking-tight flex items-center gap-3">
              <span className="w-2 h-6 bg-brand-primary rounded-full inline-block"></span>
              Channels, Sports &amp; VOD Library
            </h2>
            <div className="glass-card p-6 md:p-10">
              <FAQContent faqs={channelsFAQs} />
            </div>
          </section>

          {/* Setup & Installation */}
          <section>
            <h2 className="text-2xl font-extrabold text-brand-text mb-6 font-display uppercase tracking-tight flex items-center gap-3">
              <span className="w-2 h-6 bg-brand-primary rounded-full inline-block"></span>
              Setup Guides &amp; Configuration
            </h2>
            <div className="glass-card p-6 md:p-10">
              <FAQContent faqs={setupGuidesFAQs} />
            </div>
          </section>
        </div>

        <div className="mt-16 pt-12 border-t border-brand-line text-center">
          <h3 className="text-2xl font-extrabold text-brand-text mb-4">Still have questions?</h3>
          <p className="text-brand-muted mb-8 font-medium">Our curators are available 24/7 via private WhatsApp channel.</p>
          <a href={createWhatsAppLink(WA_MESSAGES.support)} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Message Curators <span className="ml-1">💬</span>
          </a>
        </div>
      </div>
    </div>
  );
};
