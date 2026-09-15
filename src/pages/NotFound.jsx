import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Home, ArrowRight } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="bg-brand-bg min-h-screen flex flex-col justify-center items-center py-20 px-4">
      <SEO
        title="404 – Page Not Found | Marinios IPTV"
        description="The page you're looking for doesn't exist. Visit Marinios IPTV for premium live TV streaming, 40,000+ channels, and 4K quality."
        canonical="/404"
      />

      <div className="max-w-xl w-full text-center">
        <div className="text-9xl font-black text-brand-primary/10 font-display leading-none mb-[-2rem]">
          404
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6 font-display relative z-10">
          Page Not Found
        </h1>
        <p className="text-lg text-brand-muted font-medium mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="btn-primary w-full sm:w-auto">
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <Link to="/pricing" className="btn-secondary w-full sm:w-auto">
            View Pricing <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-line">
          <p className="text-brand-faint text-sm font-medium mb-4">Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { to: '/pricing', label: 'Pricing' },
              { to: '/channels-list', label: 'Channels' },
              { to: '/devices', label: 'Devices' },
              { to: '/iptv-free-trial', label: 'Free Trial' },
              { to: '/setup-guides', label: 'Setup Guides' },
              { to: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 rounded-eight bg-brand-surface2 border border-brand-line text-brand-text text-xs font-bold uppercase tracking-widest hover:border-brand-primary/30 hover:text-brand-primary transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
