import React from 'react';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    name: "Erik Johansson",
    location: "Stockholm, Sweden",
    rating: 5,
    text: "The streaming quality is incredible. I've tried many services, but Marinios IPTV is the only one that handles 4K sports with zero buffering even during peak times.",
    tag: "Smooth HD streaming"
  },
  {
    name: "Lukas Weber",
    location: "Berlin, Germany",
    rating: 5,
    text: "Setup was impressively fast. I messaged them on WhatsApp and was watching my favorite channels on my Smart TV in less than 5 minutes.",
    tag: "Fast setup"
  },
  {
    name: "Bram van den Berg",
    location: "Amsterdam, Netherlands",
    rating: 5,
    text: "Finally a provider with a massive VOD library that's actually updated. All the latest movies and series are there in high quality.",
    tag: "Great sports coverage"
  },
  {
    name: "Sophie Martens",
    location: "Brussels, Belgium",
    rating: 5,
    text: "Works perfectly on my iPhone and Android box. The interface is clean and the support team on WhatsApp is very responsive whenever I have questions.",
    tag: "Works on all devices"
  },
  {
    name: "Jean-Pierre Dubois",
    location: "Paris, France",
    rating: 5,
    text: "Great value for money. The channel selection is huge, and the anti-freeze technology really works. I haven't missed a single match.",
    tag: "Reliable support"
  },
  {
    name: "Marco Rossi",
    location: "Milan, Italy",
    rating: 5,
    text: "The best IPTV service in Europe. I've recommended it to all my friends. Fast activation and crystal clear picture quality.",
    tag: "Premium Quality"
  }
];

export const ReviewsSection = () => {
  return (
    <section className="py-24 md:py-40 px-4 bg-brand-bg relative overflow-hidden">
      {/* Subtle background detail */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-line to-transparent"></div>
      
      <div className="container max-w-7xl relative z-10">
        {/* Header Section: Editorial Layout */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 md:mb-32 gap-12">
          <div className="max-w-3xl text-center lg:text-left">
            <div className="inline-flex py-1 px-4 rounded-full bg-brand-primary/5 text-[10px] font-extrabold text-brand-primary uppercase tracking-[0.2em] mb-8 font-display">User Testimonials</div>
            <h2 className="text-4xl md:text-7xl font-extrabold text-brand-text mb-8 tracking-tighter leading-[0.95] font-display uppercase italic">
              GLOBAL<br />
              <span className="text-brand-primary">CURATION.</span>
            </h2>
            <p className="text-brand-muted text-lg md:text-xl max-w-xl font-medium leading-relaxed">
              Meticulous feedback from our international gallery of subscribers. Excellence is our only standard.
            </p>
          </div>
          
          {/* Average Rating Summary - Glassmorphism */}
          <div className="glass-card p-10 flex flex-col items-center justify-center text-center w-full lg:w-auto min-w-[320px]">
            <div className="flex items-center gap-1.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-brand-primary text-brand-primary" />
              ))}
            </div>
            <div className="text-5xl font-black text-brand-text mb-2 font-display tracking-tighter">4.9 / 5.0</div>
            <p className="text-brand-faint text-[10px] font-black uppercase tracking-[0.3em] font-display">Average Gallery Rating</p>
          </div>
        </div>

        {/* Reviews Grid: Tonal Layering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="group relative bg-brand-surface border border-brand-line p-10 rounded-eight shadow-card hover:shadow-soft transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-primary text-brand-primary" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-brand-text text-base md:text-lg leading-relaxed mb-10 flex-grow font-medium italic opacity-90">
                "{review.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center gap-5 pt-8 border-t border-brand-line">
                <div className="w-12 h-12 rounded-eight bg-brand-surface2 border border-brand-line flex items-center justify-center text-brand-primary font-black text-xl font-display shadow-sm group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-500">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-brand-text font-black text-base font-display uppercase tracking-wider">{review.name}</h4>
                  <p className="text-brand-faint text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Presence indicator: Editorial Style */}
        <div className="mt-32 pt-20 border-t border-brand-line">
            <p className="text-brand-faint text-[10px] text-center font-black uppercase tracking-[0.4em] mb-12">
                ACTIVE UPLINK IN 25+ EUROPEAN NODES
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-20 hover:opacity-50 transition-opacity duration-1000">
                {['SWEDEN', 'GERMANY', 'NORWAY', 'NETHERLANDS', 'FRANCE', 'ITALY', 'SPAIN'].map((country) => (
                  <span key={country} className="text-brand-text font-black text-2xl font-display tracking-tighter">{country}</span>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};
