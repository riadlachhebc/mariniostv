import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Calendar, User, ArrowLeft, Tag, Clock, Share2, BookOpen } from 'lucide-react';

export const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleContentClick = (e) => {
    const anchor = e.target.closest('a');
    if (anchor) {
      const href = anchor.getAttribute('href');
      const isInternalBlogLink = href && (
        href.startsWith('/blog/') || 
        href.startsWith(window.location.origin + '/blog/')
      );
      
      if (isInternalBlogLink) {
        e.preventDefault();
        const path = href.startsWith('http') 
          ? new URL(href).pathname 
          : href;
        navigate(path);
        window.scrollTo(0, 0);
      }
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const domain = import.meta.env.VITE_SITE_DOMAIN || window.location.host;
        const apiUrl = import.meta.env.VITE_PANEL_API_URL || 'http://localhost:3001';
        const res = await fetch(`${apiUrl}/api/public/posts/${slug}?domain=${domain}`);
        if (!res.ok) {
          if (res.status === 404) throw new Error('Article not found.');
          throw new Error('Failed to fetch article.');
        }
        const data = await res.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen bg-brand-bg flex flex-col justify-center items-center space-y-6">
      <div className="w-12 h-12 border-2 border-brand-primary/10 border-t-brand-primary rounded-full animate-spin"></div>
      <p className="text-brand-muted font-display font-black text-[10px] uppercase tracking-[0.4em]">Synchronizing Stream...</p>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center p-4">
      <div className="glass-card p-12 text-center max-w-lg">
        <p className="text-brand-primary font-black text-2xl mb-8 font-display uppercase italic">{error}</p>
        <Link to="/blog" className="btn-primary">
          <ArrowLeft className="w-4 h-4 mr-2" /> RETURN TO ARCHIVE
        </Link>
      </div>
    </div>
  );

  if (!post) return null;

  const siteUrl = 'https://mariniosiptvpro.com';
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;
  
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-brand-bg min-h-screen pb-24">
      <SEO 
        title={`${post.seo?.metaTitle || post.title} – Marinios IPTV`}
        description={post.seo?.metaDescription || post.excerpt}
        canonical={`/blog/${post.slug}`}
        type="article"
        image={post.featuredImage?.url || 'https://mariniosiptvpro.com/assets/images/hero-main.webp'}
      />

      {/* ARTICLE HEADER: High-End Curation */}
      <header className="relative pt-16 pb-12 md:pt-28 md:pb-20 overflow-hidden px-4 bg-brand-surface border-b border-brand-line">
        <div className="absolute inset-0 bg-hero-radial opacity-30"></div>
        <div className="container max-w-5xl relative z-10 mx-auto px-2 sm:px-4">
          <Link to="/blog" className="inline-flex items-center text-[10px] font-black text-brand-primary hover:text-brand-text transition-all mb-12 group uppercase tracking-[0.3em] font-display">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-2 transition-transform" />
            BACK TO ARCHIVE
          </Link>
          
          <div className="flex flex-col items-center text-center">
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                {post.categories.map(cat => (
                  <span key={cat} className="px-5 py-1.5 rounded-full bg-brand-primary/5 text-brand-primary text-[10px] font-black uppercase tracking-[0.2em] border border-brand-primary/10 shadow-sm">
                    {cat}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold text-brand-text leading-none mb-10 tracking-tighter font-display uppercase italic">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-10 text-[10px] font-black text-brand-faint uppercase font-display tracking-[0.3em]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-primary" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-primary" />
                <span>8 MIN READ</span>
              </div>
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-brand-primary/40" />
                <span>SHARE BROADCAST</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURED IMAGE: High-Impact */}
      <div className="container max-w-6xl mx-auto px-4 -mt-8 md:-mt-12 relative z-20">
        {post.featuredImage?.url ? (
          <div className="rounded-eight overflow-hidden shadow-2xl border border-brand-line aspect-[21/9] bg-brand-surface2">
            <img 
              src={post.featuredImage.url} 
              alt={post.featuredImageAlt || post.title} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="rounded-eight overflow-hidden shadow-2xl border border-brand-line aspect-[21/9] bg-brand-surface2 flex items-center justify-center">
             <BookOpen className="w-16 h-16 text-brand-line opacity-20" />
          </div>
        )}
      </div>

      {/* ARTICLE CONTENT: Premium Typography */}
      <div className="container mx-auto px-4 max-w-4xl pt-12 md:pt-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="flex-1">
            <div 
              className="editorial-content prose prose-stone max-w-none prose-lg md:prose-xl prose-headings:font-display prose-headings:uppercase prose-headings:italic prose-headings:font-extrabold prose-headings:tracking-tighter prose-headings:text-brand-text prose-p:text-brand-muted prose-p:font-medium prose-p:leading-loose prose-p:italic prose-p:opacity-90 prose-a:text-brand-primary prose-a:font-black prose-a:no-underline hover:prose-a:text-brand-text transition-colors prose-img:rounded-eight prose-img:shadow-soft prose-blockquote:border-l-4 prose-blockquote:border-brand-primary prose-blockquote:bg-brand-surface2 prose-blockquote:p-8 prose-blockquote:rounded-eight prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
              onClick={handleContentClick}
            />

            {/* Tags Area */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-20 pt-12 border-t border-brand-line">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="text-brand-faint text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 mr-4 font-display">
                    <Tag className="w-4 h-4 text-brand-primary" />
                    CATEGORIZED INTEL:
                  </div>
                  {post.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-eight bg-brand-surface border border-brand-line text-brand-muted text-[10px] font-black uppercase tracking-widest hover:border-brand-primary hover:text-brand-primary transition-all cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SIDEBAR: Strategic CTAs */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="sticky top-32 space-y-12">
              <div className="glass-card p-10 border border-brand-line text-center">
                <div className="w-12 h-12 bg-brand-primary rounded-eight flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-primary/20">
                    <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-black text-brand-text font-display uppercase tracking-tight mb-4 leading-none">Instant Uplink.</h4>
                <p className="text-brand-muted text-sm font-medium italic mb-8 leading-relaxed">Secure your curated subscription and begin broadcasting today.</p>
                <Link to="/pricing" className="btn-primary w-full justify-center">
                   BUY NOW
                </Link>
              </div>

              <div className="p-8 border-l-2 border-brand-line bg-brand-surface2/30 rounded-r-eight">
                <h4 className="text-xs font-black text-brand-faint uppercase font-display tracking-[0.4em] mb-6">Archive Access</h4>
                <div className="space-y-6">
                    <p className="text-brand-text font-bold text-sm leading-snug hover:text-brand-primary transition-colors cursor-pointer uppercase tracking-tighter italic">Optimizing Your Curation Interface for 4K Broadcasts</p>
                    <p className="text-brand-text font-bold text-sm leading-snug hover:text-brand-primary transition-colors cursor-pointer uppercase tracking-tighter italic">Securing Your Uplink: A Guide to VPN Integration</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* FOOTER CALL: Final Conversion */}
      <section className="mt-32 py-16 md:py-24 bg-brand-text overflow-hidden relative">
        <div className="absolute inset-0 bg-brand-gradient opacity-10 blur-3xl"></div>
        <div className="container max-w-4xl text-center relative z-10 mx-auto px-4">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none font-display uppercase italic text-center">JOIN THE CURATION.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <Link to="/pricing" className="btn-primary bg-white text-brand-text px-16 py-6 text-xl">
               UPGRADE VISION
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
