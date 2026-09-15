import React from 'react';
import { Link } from 'react-router-dom';

import { SEO } from '../components/SEO';
import { ShieldCheck, Zap, Lock, CheckCircle2, ArrowRight, Star, Globe, Shield, CreditCard, Bitcoin } from 'lucide-react';
import { PricingCards } from '../components/PricingCards';
import { FAQContent, pricingFAQs, generateFAQSchema } from '../components/FAQ';
import { ReviewsSection } from '../components/ReviewsSection';
import { createWhatsAppLink, WA_MESSAGES } from '../utils/whatsapp';

// Images
import heroImg from '../assets/images/hero-main.webp';
import featuresImg from '../assets/images/features-visual.webp';

export const Pricing = () => {
  const siteUrl = 'https://mariniosiptvpro.com';

  return (
    <div className="bg-brand-bg min-h-screen">
      <SEO 
        title="Marinios IPTV Pricing – Choose Your Premium TV Plan"
        description="Select your Marinios IPTV plan: 3, 6, or 12-month subscriptions. Best premium IPTV service with 4K quality and 24/7 support. Buy IPTV with PayPal."
        canonical="/pricing"
        schema={[
          {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Marinios IPTV Subscription",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "320"
            }
          },
          generateFAQSchema(pricingFAQs)
        ]}
      />

      {/* HERO: The Logic of Curation */}
      <section className="relative pt-10 pb-12 md:pt-20 md:pb-16 overflow-hidden px-4">
        <div className="absolute inset-0 z-0 bg-hero-radial opacity-40"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex py-1.5 px-5 rounded-full bg-brand-primary/5 text-xs font-extrabold text-brand-primary uppercase tracking-[0.3em] mb-10 font-display">Subscription Architecture</div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-text mb-8 tracking-tighter leading-none font-display uppercase">
              Buy IPTV Subscription Online <br />
              <span className="text-brand-primary italic">Premium Plans 2026</span>
            </h1>
            <p className="text-lg md:text-2xl text-brand-muted mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Transparent, stable, and meticulously organized. No hidden layers. Choose the plan that fits you best.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {[
                { icon: <Shield className="w-5 h-5" />, label: 'SECURE PORTAL' },
                { icon: <Zap className="w-5 h-5" />, label: 'INSTANT DELIVERY' },
                { icon: <Star className="w-5 h-5" />, label: 'ELITE CURATION' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-brand-faint text-[10px] font-black uppercase tracking-[0.2em] group">
                  <div className="text-brand-primary/40 group-hover:text-brand-primary transition-colors">{item.icon}</div>
                  <span className="group-hover:text-brand-text transition-colors">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TABLE: Tonal Layering Section */}
      <section className="py-12 md:py-20 px-4 bg-brand-surface2/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text font-display">Choose Your Premium IPTV Package</h2>
          </div>
          <PricingCards />
        </div>
      </section>

      {/* COMPREHENSIVE FEATURES: Asymmetrical Grid */}
      <section className="py-16 md:py-24 px-4 bg-brand-surface border-t border-brand-line">
        <div className="container max-w-5xl">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-8 font-display">What Do I Get When I Buy a Marinios IPTV Subscription?</h2>
            <p className="text-lg text-brand-muted mb-12 font-medium max-w-4xl mx-auto">
              We don't just offer cheap IPTV with premium channels; we deliver an elite viewing architecture. With every Marinios IPTV subscription, you are guaranteed a solid M3U playlist with 100% uptime. Whether you are tracking European leagues or North American content, we are widely considered the best IPTV for USA and UK channels, delivering flawless Canadian IPTV live TV and VOD alongside global feeds.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              '40,000+ CURATED CHANNELS',
              '215,000+ VOD ARCHIVES',
              'ULTRA GLOBAL SPORTS ARENA',
              'MULTIVERSE ECOSYSTEM',
              'XTREAM CODES INTEGRATED',
              '24/7 CURATOR ASSISTANCE',
              'ZERO-LAG TECHNOLOGY',
              'CINEMATIC 4K STREAMS',
              'INSTANT ACCOUNT INITIALIZATION',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-brand-bg border border-brand-line p-6 rounded-eight group hover:bg-brand-surface hover:shadow-soft hover:-translate-y-1 transition-all duration-500">
                <div className="w-8 h-8 rounded-full bg-brand-primary/5 flex items-center justify-center shrink-0 group-hover:bg-brand-primary transition-colors duration-500">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary group-hover:text-white" />
                </div>
                <span className="text-brand-text font-black text-[10px] md:text-xs uppercase tracking-widest">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HARDWARE OVERVIEW */}
      <section className="py-16 md:py-20 px-4 bg-brand-surface2/30 border-t border-brand-line">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-6 font-display">How to Manage 4K IPTV Multiple Connections &amp; Hardware</h2>
          <p className="text-lg text-brand-muted leading-relaxed font-medium">
            If your household demands simultaneous viewing, our premium tiers directly support <strong className="text-brand-text font-bold">4K IPTV multiple connections</strong>. Setup is instant and universal. Deploy the <strong className="text-brand-text font-bold">best IPTV for Amazon Firestick</strong> in the living room, configure an <strong className="text-brand-text font-bold">IPTV Smarters Pro server setup</strong> for your mobile devices, and utilize an intuitive <strong className="text-brand-text font-bold">IPTV for Smart TV and Android box</strong> all under a single ecosystem.
          </p>
        </div>
      </section>

      {/* PAYMENT METHODS */}
      <section className="py-16 md:py-20 px-4 bg-brand-bg border-t border-brand-line">
        <div className="container max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-6 font-display">How Can I Buy IPTV with PayPal / Crypto Securely?</h2>
          <p className="text-lg text-brand-muted mb-12 font-medium max-w-3xl mx-auto">
            Security and privacy are non-negotiable. To buy an IPTV subscription securely, our gateway accepts all major global currencies. You can efficiently buy IPTV with PayPal / Crypto or use your preferred Credit Card. Your Marinios IPTV subscription activates the moment the blockchain or transaction clears.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-80 mix-blend-luminosity">
             <div className="flex flex-col items-center gap-2"><CreditCard className="w-10 h-10 text-brand-primary" /><span className="text-xs font-bold text-brand-text uppercase">Credit Card</span></div>
             <div className="flex flex-col items-center gap-2"><Lock className="w-10 h-10 text-brand-primary" /><span className="text-xs font-bold text-brand-text uppercase">PayPal</span></div>
             <div className="flex flex-col items-center gap-2"><Bitcoin className="w-10 h-10 text-brand-primary" /><span className="text-xs font-bold text-brand-text uppercase">Crypto</span></div>
          </div>
        </div>
      </section>

      {/* REVIEWS ARCHIVE */}
      <section className="pt-20 px-4 bg-brand-surface border-t border-brand-line text-center">
        <div className="container max-w-4xl">
           <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-6 font-display">Looking for Genuine Marinios IPTV Reviews?</h2>
           <p className="text-lg text-brand-muted font-medium mb-12">
              Don't just take our word for it. Discover why independent curators rate us the <strong className="text-brand-text font-bold">Best premium IPTV service 2026</strong>. Explore authentic <strong className="text-brand-text font-bold">Marinios IPTV reviews</strong> from users who depend on our dedicated servers for <strong className="text-brand-text font-bold">IPTV for live sports and PPV events</strong>.
           </p>
        </div>
      </section>
      <div className="pb-8 bg-brand-surface">
        <ReviewsSection />
      </div>

      {/* CLIENT SUPPORT SEO BLOCK */}
      <section className="py-16 md:py-20 px-4 bg-brand-bg border-t border-brand-line text-center">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-6 font-display">Which Player is Best: IPTV Subscription for Tivimate or Smarters?</h2>
          <p className="text-lg text-brand-muted font-medium">
            Flexibility is at the core of our platform. A <strong className="text-brand-text font-bold">Marinios IPTV subscription for Tivimate</strong> offers the ultimate DVR and recording interface for premium European IPTV provider feeds. Alternatively, IPTV Smarters Pro provides highly functional cross-platform viewing.
          </p>
        </div>
      </section>

      {/* KNOWLEDGE BASE: FAQ */}
      <section className="py-16 md:py-24 px-4 bg-brand-surface relative">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-6 font-display">Frequently Asked Questions (FAQ)</h2>
            <p className="text-brand-muted font-bold tracking-widest uppercase text-xs">Addressing the architecture of our service</p>
          </div>
          <div className="glass-card p-10 md:p-16">
            <FAQContent faqs={pricingFAQs} />
            <div className="mt-20 pt-16 border-t border-brand-line text-center">
              <h3 className="text-2xl font-extrabold text-brand-text mb-6 font-display">Next Steps After Purchasing?</h3>
              <p className="text-brand-muted mb-8 font-medium max-w-md mx-auto">Once your payment is processed, you will get instant access. Follow our simple guides or view the channel list while your account completes activation.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/setup-guides" className="btn-primary">
                   View Setup Guides <Zap className="w-4 h-4 ml-2 fill-white" />
                </Link>
                <Link to="/channels-list" className="btn-secondary">
                   Explore Channels List
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL BROADCAST */}
      <section className="py-16 md:py-24 px-4 bg-brand-primary overflow-hidden relative">
        <div className="absolute inset-0 bg-brand-gradient opacity-95"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="container max-w-5xl text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none font-display uppercase">
            Unlock the Ultimate<br />
            <span className="italic text-brand-secondary text-5xl md:text-6xl">IPTV For Live Sports and PPV Events</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-bold max-w-3xl mx-auto tracking-wide">
            Grab your Marinios IPTV free trial today or secure your premium plan instantly. Your cinematic gallery awaits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a href={createWhatsAppLink(WA_MESSAGES.buyGeneric)} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-3 px-14 py-6 bg-white text-brand-primary font-display font-black rounded-eight shadow-2xl hover:scale-105 active:scale-95 transition-all text-xl uppercase tracking-widest">
              BUY NOW <ArrowRight className="w-5 h-5" />
            </a>
            <a href={createWhatsAppLink(WA_MESSAGES.freeTrial)} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-3 px-14 py-6 bg-transparent border-2 border-white/40 text-white font-display font-black rounded-eight hover:bg-white/10 hover:border-white transition-all text-xl uppercase tracking-widest">
              FREE TEST <Zap className="w-5 h-5 fill-white" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
