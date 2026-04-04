import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Briefcase, DollarSign, Settings, Users, ArrowRight, Server, Tv } from 'lucide-react';
import { createWhatsAppLink, WA_MESSAGES } from '../utils/whatsapp';

export const Reseller = () => {
  const siteUrl = 'https://mariniosiptvpro.com';

  return (
    <div className="bg-brand-bg min-h-screen">
      <SEO 
        title="Marinios IPTV Reseller Panel – Start Your Own Business"
        description="Start your own IPTV business with the Marinios IPTV reseller panel. Buy cheap credits, manage your own customers, and earn massive profit margins today."
        canonical="/iptv-reseller-panel"
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden border-b border-brand-line">
        <div className="absolute inset-0 bg-hero-radial opacity-30 z-0"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-8">
            <Briefcase className="w-4 h-4" /> B2B Portal
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-brand-text mb-6 leading-tight font-display">
            Marinios IPTV Reseller Panel | Start Your IPTV Business 2026
          </h1>
          <p className="text-lg text-brand-muted font-medium mb-10 leading-relaxed">
            Start your own business with the most reliable <strong className="text-brand-text font-bold">buffer-free IPTV provider</strong>. Our <strong className="text-brand-text font-bold">Marinios IPTV</strong> reseller panel gives you full control over your subscribers, with <strong className="text-brand-text font-bold">M3U playlist with 100% uptime</strong> and 4K quality. Join the <strong className="text-brand-text font-bold">Best premium IPTV service 2026</strong> network and scale your income with our high-margin reseller platform.
          </p>
          <a href={createWhatsAppLink(WA_MESSAGES.buyGeneric)} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center">
             Become a Reseller Today <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      {/* How it Works / Benefits */}
      <section className="py-16 md:py-24 px-4 bg-brand-surface relative">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-6 font-display">How the Marinios Reseller Program Works</h2>
            <p className="text-brand-muted max-w-2xl mx-auto font-medium">As a reseller, you purchase credits from us in bulk at a wholesale discount. You then sell <strong className="text-brand-text font-bold">IPTV subscriptions for Smart TV and Android box</strong>, Firestick, and mobile directly to your customers. Our platform is recognized as a <strong className="text-brand-text font-bold">cheap IPTV with premium channels</strong> for your end-users, ensuring high retention rates. 1 Credit = 1 Month Subscription.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <Users className="w-6 h-6 text-brand-primary" />, title: 'Full Customer Control', desc: 'Create, edit, suspend, and renew your customers directly from your personalized dashboard.' },
              { icon: <Settings className="w-6 h-6 text-brand-primary" />, title: 'White-Label Branding', desc: 'Use our infrastructure to power your own brand. Custom DNS options are available.' },
              { icon: <DollarSign className="w-6 h-6 text-brand-primary" />, title: 'Massive Profit Margins', desc: 'Recoup your investment quickly. Set your own pricing and keep 100% of the profits.' }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 border border-brand-line rounded-eight bg-brand-bg hover:shadow-soft transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-extrabold text-brand-text mb-3">{feature.title}</h3>
                <p className="text-brand-muted text-sm font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text mb-6 font-display">Buy Reseller Credits &amp; Dashboard Pricing</h2>
            <p className="text-brand-muted mb-8 font-medium">Contact our B2B team via WhatsApp to discuss current credit tiers, dashboard setup fees, and bulk pricing minimums. You can easily <strong className="text-brand-text font-bold">buy IPTV with PayPal / Crypto</strong> for your reseller credits, ensuring a smooth transition into your new business venture.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={createWhatsAppLink(WA_MESSAGES.buyGeneric)} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                 Request Pricing via WhatsApp
              </a>
              <Link to="/channels-list" className="btn-primary inline-flex items-center justify-center">
                View Channel Lineup <Tv className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reseller FAQ */}
      <section className="py-16 md:py-24 px-4 bg-brand-surface2/30">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-text mb-10 text-center font-display">Reseller FAQ</h2>
          <div className="space-y-6">
            {[
              { q: 'Can I generate free trials for my customers?', a: 'Yes! Your dashboard allows you to generate unlimited 24-hour free trials to convert your prospects.' },
              { q: 'Do credits expire?', a: 'No, reseller credits do not expire. You can keep them in your dashboard until you sell them.' },
              { q: 'Why Partner With Us?', a: 'Because an unstable stream kills your business. Marinios IPTV relies on enterprise-grade servers ensuring your customers renew month after month, generating passive income for you.' }
            ].map((faq, idx) => (
              <div key={idx} className="p-6 bg-brand-bg rounded-eight border border-brand-line">
                <h3 className="font-extrabold text-lg text-brand-text mb-2">{faq.q}</h3>
                <p className="text-brand-muted text-sm leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="text-brand-primary hover:underline font-bold tracking-widest text-sm uppercase">Contact our team for more details</Link>
          </div>
        </div>
      </section>

    </div>
  );
};
