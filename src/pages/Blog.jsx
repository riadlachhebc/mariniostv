import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Calendar, ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';

export const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const domain = import.meta.env.VITE_SITE_DOMAIN || window.location.host;
        const apiUrl = import.meta.env.VITE_PANEL_API_URL || 'http://localhost:3001';
        const res = await fetch(`${apiUrl}/api/public/posts?domain=${domain}`);
        if (!res.ok) throw new Error('Failed to fetch posts from the server.');
        const json = await res.json();
        setPosts(json.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const siteUrl = 'https://mariniosiptvpro.com';

  return (
    <div className="bg-brand-bg min-h-screen">
      <SEO
        title="Marinios IPTV Blog – Latest IPTV News & Setup Tips"
        description="Read our latest news, streaming tips, device setup guides, and updates from Marinios IPTV. Stay informed and get the most from your premium IPTV service."
        canonical="/blog"
      />

      {/* HERO: The Archive Header */}
      <section className="relative pt-10 pb-12 md:pt-20 md:pb-20 overflow-hidden px-4 bg-brand-surface">
        <div className="absolute inset-0 bg-hero-radial opacity-30"></div>
        <div className="container max-w-7xl relative z-10 px-2 sm:px-4 mx-auto text-center">
          <div className="inline-flex py-1.5 px-5 rounded-full bg-brand-primary/5 text-xs font-extrabold text-brand-primary uppercase tracking-[0.3em] mb-10 font-display italic">Curated Literature</div>
          <h1 className="text-5xl md:text-8xl font-extrabold text-brand-text mb-8 tracking-tighter leading-none font-display uppercase italic">
            THE EDITORIAL<br />
            <span className="text-brand-primary not-italic text-outline">ARCHIVE.</span>
          </h1>
          <p className="text-lg md:text-2xl text-brand-muted max-w-2xl mx-auto font-medium leading-relaxed italic">
            Meticulously documented techniques, ecosystem expansions, and cinematic intelligence for the modern curator. Stay up to date with the latest from the <strong className="text-brand-text font-bold">Best premium IPTV service 2026</strong> and learn how to get the most out of your <strong className="text-brand-text font-bold">buffer-free IPTV provider</strong>.
          </p>
        </div>
      </section>

      {/* BLOG GRID: Tonal Cards */}
      <section className="py-16 md:py-24 px-4 bg-brand-bg border-t border-brand-line min-h-[60vh]">
        <div className="container mx-auto max-w-7xl">
          {loading ? (
            <div className="flex flex-col justify-center items-center h-48 space-y-6">
              <div className="w-12 h-12 border-2 border-brand-primary/10 border-t-brand-primary rounded-full animate-spin"></div>
              <p className="text-brand-muted font-display font-black text-[10px] uppercase tracking-[0.4em]">Decrypting Archives...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20 glass-card max-w-2xl mx-auto">
              <p className="text-brand-primary font-bold mb-8 text-xl font-display uppercase">{error}</p>
              <button onClick={() => window.location.reload()} className="btn-primary">
                RETRY HANDSHAKE
              </button>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-24 glass-card max-w-3xl mx-auto border-dashed border-brand-line border-2">
              <div className="w-20 h-20 bg-brand-surface2 rounded-eight flex items-center justify-center mx-auto mb-8 shadow-sm">
                <BookOpen className="w-10 h-10 text-brand-line" />
              </div>
              <h3 className="text-3xl font-extrabold text-brand-text mb-4 tracking-tighter font-display uppercase italic">The Vault is Silent.</h3>
              <p className="text-brand-muted max-w-md mx-auto italic font-medium">New intelligence is currently being curated. Return soon for the next broadcast.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-14">
              {posts.map((post) => (
                <Link
                  key={post.id || post.slug}
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col bg-brand-surface rounded-eight border border-brand-line overflow-hidden shadow-card hover:shadow-soft transition-all duration-700 hover:-translate-y-3"
                >
                  <div className="aspect-[16/10] bg-brand-surface2 overflow-hidden relative">
                    {post.featuredImage?.url ? (
                      <img
                        src={post.featuredImage.url}
                        alt={post.featuredImageAlt || post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-brand-line opacity-20" />
                      </div>
                    )}
                    {post.categories && post.categories[0] && (
                      <div className="absolute top-6 left-6 bg-brand-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-eight shadow-lg z-10">
                        {post.categories[0]}
                      </div>
                    )}
                  </div>
                  <div className="p-10 flex flex-col flex-grow relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-brand-faint text-[9px] font-black uppercase tracking-widest bg-brand-surface2 px-3 py-1.5 rounded-full border border-brand-line">
                        <Calendar className="w-3.5 h-3.5 text-brand-primary" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-2 text-brand-faint text-[9px] font-black uppercase tracking-widest">
                        <Clock className="w-3.5 h-3.5 text-brand-primary/40" />
                        5 MIN READ
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-extrabold text-brand-text mb-6 leading-[1.1] group-hover:text-brand-primary transition-colors line-clamp-2 tracking-tighter font-display uppercase italic">
                      {post.title}
                    </h2>
                    <p className="text-brand-muted text-base line-clamp-3 mb-10 flex-grow leading-loose font-medium italic opacity-80">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center text-brand-primary font-black text-xs uppercase tracking-[0.2em] group-hover:gap-4 transition-all duration-500">
                      READ FULL BROADCAST
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ARCHIVE FOOTER: CTA */}
      <section className="py-16 md:py-24 px-4 bg-brand-primary overflow-hidden relative">
        <div className="absolute inset-0 bg-brand-gradient opacity-95"></div>
        <div className="container max-w-4xl text-center relative z-10 px-4 mx-auto">
          <h2 className="text-5xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-none font-display uppercase italic">SYNCHRONIZE.</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-16 font-bold tracking-wide">Stay informed on the latest cinematic intelligence.</p>
          <div className="flex items-center justify-center">
            <Link to="/pricing" className="inline-flex items-center justify-center gap-3 px-14 py-6 bg-white text-brand-primary font-display font-black rounded-eight shadow-2xl hover:scale-105 active:scale-95 transition-all text-xl uppercase tracking-widest">
              BUY NOW <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
