import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { FAQContent } from '../components/FAQ';
import { MonitorPlay, Trophy, Film, ArrowRight, Zap, Flag, Globe } from 'lucide-react';

export const Channels = () => {
  const siteUrl = 'https://mariniosiptvpro.com';

  const regions = [
    {
      flag: '🇺🇸',
      title: 'Top USA & Canadian IPTV Channels',
      desc: 'Local news, national networks, and entertainment from coast to coast.',
      channels: ['ESPN+', 'Fox News', 'CNN HD', 'ABC/NBC/CBS Local', 'HBO MAX', 'TSN (Canada)', 'Sportsnet'],
    },
    {
      flag: '🇬🇧',
      title: 'Premium UK & European Channels',
      desc: 'Exclusive European coverage, premier networks, and regional content.',
      channels: ['Sky Sports', 'BT Sport / TNT', 'BBC One/Two', 'ITV Network', 'Canal+ (France)', 'Sky Deutschland'],
    }
  ];

  return (
    <div className="bg-brand-bg min-h-screen">
      <SEO 
        title="Marinios IPTV Channels – 40,000+ Live HD Channels"
        description="Browse our massive Marinios IPTV channel list. 40,000+ live channels including local, international, sports, and movies. Always updated, always stable."
        canonical="/channels-list"
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden border-b border-brand-line">
        <div className="absolute inset-0 bg-hero-radial opacity-30 z-0"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-8">
            <Globe className="w-4 h-4" /> Global Entertainment Hub
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-brand-text mb-8 leading-tight font-display">
            Best IPTV for USA and UK Channels | Marinios IPTV Channel List
          </h1>
          <p className="text-lg text-brand-muted font-medium mb-10 leading-relaxed">
            Looking for a <strong className="text-brand-text font-bold">buffer-free IPTV provider</strong> with global coverage? Marinios IPTV offers access to 20,000+ live channels, 4K live sports, and premium VODs. We are the top-rated <strong className="text-brand-text font-bold">Canadian IPTV live TV and VOD</strong> provider, also offering a <strong className="text-brand-text font-bold">premium European IPTV provider</strong> experience with an <strong className="text-brand-text font-bold">M3U playlist with 100% uptime</strong>.
          </p>
          <Link to="/pricing" className="btn-primary inline-flex items-center">
            View Subscription Plans <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Sports & PPV */}
      <section className="py-16 md:py-24 px-4 bg-brand-surface relative">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6">
                <Trophy className="w-7 h-7 text-brand-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text mb-6 font-display">
                IPTV for Live Sports and PPV Events
              </h2>
              <p className="text-brand-muted font-medium leading-relaxed mb-6">
                Never miss a kickoff, fight, or race again. We provide dedicated servers for high-demand PPV events and complete coverage of NFL, NBA, Premier League, UEFA Champions League, and UFC.
              </p>
              <ul className="grid grid-cols-2 gap-4 mb-8">
                {['Sky Sports Main Event', 'ESPN / ESPN+', 'DAZN PPV', 'BeIN Sports 4K'].map(ch => (
                  <li key={ch} className="text-sm font-bold text-brand-text flex items-center"><Zap className="w-4 h-4 text-brand-primary mr-2" /> {ch}</li>
                ))}
              </ul>
              <Link to="/pricing" className="text-brand-primary font-bold inline-flex items-center hover:underline">
                Unlock Sports Package <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Channels */}
      <section className="py-16 md:py-24 px-4 bg-brand-surface2/30">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {regions.map((region, idx) => (
              <div key={idx} className="glass-card p-8 group hover:border-brand-primary/50 transition-all">
                <div className="text-4xl mb-6">{region.flag}</div>
                <h2 className="text-2xl font-extrabold text-brand-text mb-4 font-display">
                  {region.title}
                </h2>
                <p className="text-brand-muted font-medium mb-6">
                  {region.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {region.channels.map(ch => (
                    <span key={ch} className="px-3 py-1 bg-brand-bg border border-brand-line rounded text-xs font-bold text-brand-text">{ch}</span>
                  ))}
                  <span className="px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded text-xs font-bold text-brand-primary">+ Thousands More</span>
                </div>
                <Link to="/pricing" className="btn-secondary w-full text-center">
                  Get Local Channels
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOD Library */}
      <section className="py-16 md:py-24 px-4 bg-brand-bg border-t border-brand-line">
        <div className="container max-w-4xl text-center">
          <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6 mx-auto">
            <Film className="w-7 h-7 text-brand-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-6 font-display">
            Massive VOD Library: Latest Movies & TV Series
          </h2>
          <p className="text-lg text-brand-muted font-medium mb-10 leading-relaxed max-w-2xl mx-auto">
            Our Video on Demand (VOD) library is updated weekly. Enjoy 215,000+ cinematic masterpieces, including theater releases, Netflix/app originals, and complete TV series box sets in gorgeous 4K UHD.
          </p>
          <Link to="/pricing" className="btn-primary inline-flex items-center">
            Subscribe & Watch Instantly <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SEO CONTENT BLOCK: Why Marinios Channels? */}
      <section className="py-16 md:py-24 px-4 bg-brand-surface2/30 border-t border-brand-line">
        <div className="container max-w-4xl text-center mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-8 font-display uppercase italic">
            Experience 4K IPTV Multiple Connections
          </h2>
          <p className="text-lg text-brand-muted font-medium leading-relaxed mb-10">
            When you <strong className="text-brand-text font-bold">buy an IPTV subscription online</strong> from Marinios, you aren't just getting a list; you're getting a masterfully curated gallery. Our service is designed as a <strong className="text-brand-text font-bold">cheap IPTV with premium channels</strong> that doesn't compromise on quality. Enjoy <strong className="text-brand-text font-bold">4K IPTV multiple connections</strong>, allowing your entire household to stream different content simultaneously with zero lag.
          </p>
          <div className="flex justify-center">
            <Link to="/iptv-free-trial" className="btn-secondary">
              Claim Your Marinios IPTV Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 md:py-24 px-4 bg-brand-surface border-t border-brand-line">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-6 font-display">Frequently Asked Questions</h2>
            <p className="text-brand-muted font-bold tracking-widest uppercase text-xs">Everything you need to know about our channel list & uptime</p>
          </div>
          <div className="glass-card p-8 md:p-12">
            <FAQContent />
          </div>
        </div>
      </section>
    </div>
  );
};
