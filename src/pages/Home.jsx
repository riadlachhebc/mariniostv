import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Clock, Zap, Monitor, ShieldCheck, CheckCircle2, Tv, Smartphone, Laptop, ArrowRight, Star, PlayCircle, Sparkles, Globe, Shield } from 'lucide-react';
import { FAQContent, homeFAQs, generateFAQSchema } from '../components/FAQ';
import { PricingCards } from '../components/PricingCards';
import { ReviewsSection } from '../components/ReviewsSection';
import { BlogPreview } from '../components/BlogPreview';
import { createWhatsAppLink, WA_MESSAGES } from '../utils/whatsapp';

// Images
import heroImg from '../assets/images/hero-main.webp';
import devicesImg from '../assets/images/devices-mockup.webp';
import featuresImg from '../assets/images/features-visual.webp';
import supportImg from '../assets/images/support-visual.webp';

const CTAButtons = ({ centered = true }) => {
  return (
    <div className={`flex flex-col sm:flex-row items-center ${centered ? 'justify-center' : 'justify-start'} gap-4 w-full sm:w-auto`}>
      <Link to="/iptv-free-trial" className="btn-primary w-full sm:w-auto group">
        Get Free Trial <Zap className="w-4 h-4 fill-white group-hover:scale-125 transition-transform" />
      </Link>
      <Link to="/pricing" className="btn-secondary w-full sm:w-auto">
        View Pricing <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export const Home = () => {
  const siteUrl = 'https://mariniosiptvpro.com';

  return (
    <div className="bg-brand-bg min-h-screen">
      <SEO
        title="Marinios IPTV – #1 HD Live TV & 4K Sports Streaming"
        description="Buy the best IPTV subscription at Marinios IPTV. Enjoy 20,000+ live channels, 4K live sports, and zero buffering on Firestick or Smart TVs today."
        canonical="/"
        schema={[
          {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Marinios IPTV Subscription",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "842"
            }
          },
          generateFAQSchema(homeFAQs)
        ]}
      />

      {/* HERO SECTION: The Cinematic Canvas */}
      <section className="relative pt-10 pb-20 md:pt-20 md:pb-24 overflow-hidden px-4">
        {/* Editorial Background Art */}
        <div className="absolute inset-0 z-0 bg-hero-radial opacity-60"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[100px] -ml-72 -mb-72"></div>

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Editorial Kicker */}
            <div className="flex items-center justify-center gap-3 mb-10 group cursor-default">
              <div className="h-px w-8 bg-brand-primary/30 group-hover:w-16 transition-all duration-500"></div>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-[0.3em] text-brand-primary font-display">Elite Streaming Gallery</span>
              <div className="h-px w-8 bg-brand-primary/30 group-hover:w-16 transition-all duration-500"></div>
            </div>

            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-brand-text mb-8 font-display">
                The Best Premium <br />
                <span className="relative inline-block text-brand-primary italic">
                  IPTV Service 2026
                  <div className="absolute -bottom-2 inset-x-0 h-1 bg-brand-primary/10 rounded-full"></div>
                </span>
                <br /> <span className="text-3xl md:text-4xl text-brand-text not-italic">| Marinios IPTV</span>
              </h1>

              <p className="text-lg md:text-2xl text-brand-muted mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                Tired of freezing streams and missing PPV events? Get Marinios IPTV for 20,000+ stable channels, 4K live sports, and instant setup on any device.
              </p>

              <CTAButtons />

              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
                {[
                  { icon: <Globe className="w-5 h-5" />, label: 'Worldwide Access', sub: 'Global Coverage' },
                  { icon: <Sparkles className="w-5 h-5" />, label: '4K Resolution', sub: 'Ultra High-Def' },
                  { icon: <Shield className="w-5 h-5" />, label: '99.9% Uptime', sub: 'Rock-Solid Servers' },
                  { icon: <PlayCircle className="w-5 h-5" />, label: 'Instant Connect', sub: 'Zero Setup Wait' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-eight bg-brand-surface border border-brand-line shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                    <div className="text-brand-primary bg-brand-primary/5 p-3 rounded-eight">{item.icon}</div>
                    <div className="flex flex-col">
                      <span className="text-xs font-extrabold text-brand-text mb-0.5 text-center">{item.label}</span>
                      <span className="text-[10px] font-bold text-brand-faint uppercase tracking-widest text-center">{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS: Tonal Layering Section */}
      <section className="bg-brand-surface2 py-10 px-4">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
            {[
              { val: '40,000+', label: 'Curated Channels', desc: 'Entertainment without borders' },
              { val: '215,000+', label: 'VOD Library', desc: 'Movies, Series & Originals' },
              { val: '24H DELAY', label: 'Zero Lag Time', desc: 'Instant global activation' },
            ].map((s, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl md:text-5xl font-extrabold text-brand-text mb-3 font-display group-hover:text-brand-primary transition-colors">{s.val}</div>
                <div className="text-xs font-extrabold uppercase tracking-widest text-brand-primary mb-2">{s.label}</div>
                <div className="text-sm text-brand-muted font-medium">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-16 md:py-24 px-4 bg-brand-bg">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6 font-display">Transparent Pricing &amp; Secure Payments</h2>
            <p className="text-brand-primary text-sm md:text-lg font-bold tracking-widest uppercase mb-4">Buy IPTV with PayPal / Crypto</p>
            <p className="text-brand-muted text-base max-w-2xl mx-auto">We offer the most straightforward and secure path to premium entertainment. Buy an IPTV subscription online securely through our portal. Choose a plan that fits your multi-device lifestyle and unlock massive value.</p>
          </div>
          <PricingCards />
          <div className="text-center mt-16">
            <Link to="/pricing" className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary-hover font-bold transition-all text-lg font-display group">
              Full Curated Pricing <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO CATALOG SECTION */}
      <section className="py-16 md:py-24 px-4 bg-brand-bg border-b border-brand-line">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6 font-display italic">
            Unlock Global Content: <span className="text-brand-primary">What Can You Watch?</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-muted leading-relaxed font-medium">
            Marinios IPTV provides unmatched global access to live TV and VOD content. We are widely recognized as the <strong className="text-brand-text font-bold">best IPTV for USA and UK channels</strong>, delivering crisp national broadcasts and local networks directly to your screen. Looking for international options? We stand out as a <strong className="text-brand-text font-bold">premium European IPTV provider</strong>, whilst also delivering complete <strong className="text-brand-text font-bold">Canadian IPTV live TV and VOD</strong> packages. Simply put, exploring entertainment has never been this boundless.
          </p>
        </div>
      </section>

      {/* PRODUCT SHOWCASE: Intentional Asymmetry */}
      <section className="py-16 md:py-24 px-4 bg-brand-surface">
        <div className="container max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute inset-x-0 -bottom-10 h-2/3 bg-brand-primary/5 blur-3xl rounded-full group-hover:bg-brand-primary/10 transition-all duration-500"></div>
                <img
                  src={featuresImg}
                  alt="High quality entertainment features"
                  width="1024"
                  height="1024"
                  className="relative z-10 rounded-eight shadow-soft border border-brand-line group-hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <div className="inline-flex py-1.5 px-4 rounded-full bg-brand-primary/5 text-xs font-extrabold text-brand-primary uppercase tracking-widest mb-6">Unrivaled Stability</div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-8 leading-tight font-display">
                Why Is Marinios IPTV the Best<br />
                <span className="text-brand-primary inline-block mt-2">Premium Service in 2026?</span>
              </h2>
              <p className="text-lg text-brand-muted mb-10 leading-relaxed font-medium">
                When you choose a Marinios IPTV subscription, you are choosing unparalleled reliability. We are not just another cheap IPTV with premium channels; we are a dedicated, high-performance network answering the call of the modern curator.
              </p>
              <div className="grid gap-6">
                {[
                  { title: 'IPTV with Zero Buffering and Anti-Freezing', desc: 'Our enterprise-grade servers ensure your streams stay active and perfectly smooth during peak hours.' },
                  { title: 'M3U Playlist with 100% Uptime', desc: 'We guarantee maximum reliability for your 4K IPTV multiple connections, delivering flawless playback.' },
                  { title: 'IPTV for Live Sports and PPV Events', desc: 'Never miss a crucial moment. Stream global sports networks in ultra-high definition without delay.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5">
                    <div className="w-10 h-10 rounded-eight bg-brand-bg border border-brand-line flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-brand-text mb-1">{item.title}</h3>
                      <p className="text-brand-muted text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <ReviewsSection />

      {/* WORKFLOW: 3 Simple Steps */}
      <section className="py-16 md:py-24 px-4 bg-brand-bg overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-primary/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="container max-w-5xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold text-brand-text mb-6 font-display italic">Your Gallery Awaits.</h2>
            <p className="text-brand-muted font-bold tracking-widest uppercase text-xs">Curate your access in three simple beats</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-16 text-center">
            {[
              { num: 'O1', title: 'Select Plan', desc: 'Choose a curation period that fits your vision.' },
              { num: 'O2', title: 'Connect', desc: 'Instant activation via our secure WhatsApp portal.' },
              { num: 'O3', title: 'Stream', desc: 'Unlock the cinematic vault and begin your journey.' },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="text-6xl md:text-8xl font-black text-brand-primary/5 font-display mb-[-2rem] md:mb-[-3rem] group-hover:text-brand-primary/10 transition-colors duration-500">
                  {step.num}
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-brand-text mb-4 z-10">{step.title}</h3>
                <p className="text-brand-muted text-sm md:text-base font-medium leading-loose px-4 sm:px-0">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-20">
            <a href={createWhatsAppLink(WA_MESSAGES.freeTrial)} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Initialize Free Test <Zap className="w-4 h-4 ml-2 fill-white" />
            </a>
          </div>
        </div>
      </section>

      {/* DEVICE ECOSYSTEM */}
      <section className="py-16 md:py-24 px-4 bg-brand-surface relative overflow-hidden">
        <div className="container max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-8 font-display">How to Set Up Marinios IPTV<br className="hidden md:block" /><span className="text-brand-primary"> on Any Device?</span></h2>
              <p className="text-lg text-brand-muted leading-relaxed mb-12 font-medium max-w-xl mx-auto lg:mx-0">
                Getting started is incredibly easy. Whether you need the <strong className="text-brand-text font-bold">best IPTV for Amazon Firestick</strong> or an intuitive <strong className="text-brand-text font-bold">IPTV for Smart TV and Android box</strong>, we have you covered. Our flexible infrastructure allows for seamless <strong className="text-brand-text font-bold">IPTV subscription for Tivimate</strong> and rapid <strong className="text-brand-text font-bold">IPTV Smarters Pro server setup</strong>. Enjoy immediate connection instantly.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                {['Smart TV', 'Android Vault', 'Apple Devices', 'Computer', 'Firestick'].map((d, i) => (
                  <span key={i} className="px-5 py-2.5 rounded-eight bg-brand-surface2 border border-brand-line text-brand-text text-xs font-bold uppercase tracking-widest">{d}</span>
                ))}
              </div>
              <Link to="/setup-guides" className="inline-flex items-center gap-3 text-brand-primary hover:text-brand-primary-hover font-extrabold transition-all group tracking-wide text-sm font-display">
                VIEW SETUP GUIDES <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-brand-primary/10 blur-[80px] rounded-full scale-125 translate-x-10 translate-y-10"></div>
              <img
                src={devicesImg}
                alt="Supported devices ecosystem"
                width="1024"
                height="1024"
                className="relative z-10 w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 md:py-24 px-4 bg-brand-surface border-t border-brand-line">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold text-brand-text mb-6 font-display italic">Knowledge Base.</h2>
            <p className="text-brand-muted font-bold tracking-widest uppercase text-xs">Everything you need to know about your new gallery</p>
          </div>
          <div className="glass-card p-8 md:p-12">
            <FAQContent faqs={homeFAQs} />
            <div className="mt-16 pt-12 border-t border-brand-line text-center">
              <h3 className="text-2xl font-extrabold text-brand-text mb-4">Direct Inquiry?</h3>
              <p className="text-brand-muted mb-8 font-medium">Our curators are available 24/7 via private WhatsApp channel.</p>
              <a href={createWhatsAppLink(WA_MESSAGES.support)} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Message Curators <span className="ml-1">💬</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <BlogPreview />

      {/* FINAL CALL TO ACTION */}
      <section className="py-16 md:py-24 px-4 bg-brand-primary overflow-hidden relative">
        <div className="absolute inset-0 bg-brand-gradient opacity-90"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -ml-40 -mb-40"></div>

        <div className="container max-w-4xl text-center relative z-10 px-4">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none font-display uppercase italic">
            WATCH<br />NOW.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-bold max-w-2xl mx-auto tracking-wide">
            Join the revolution and claim your Marinios IPTV free trial today. Connect in minutes and experience premium streaming firsthand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={createWhatsAppLink(WA_MESSAGES.freeTrial)} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-brand-primary font-display font-black rounded-eight shadow-xl hover:scale-110 active:scale-95 transition-all text-xl uppercase">
              Free Test <Zap className="w-5 h-5 fill-brand-primary" />
            </a>
            <Link to="/pricing"
              className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-transparent border-2 border-white/40 text-white font-display font-black rounded-eight hover:bg-white/10 hover:border-white transition-all text-xl uppercase">
              See Plans <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
