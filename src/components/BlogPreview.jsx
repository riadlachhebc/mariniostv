import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

export const BlogPreview = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const domain = import.meta.env.VITE_SITE_DOMAIN || window.location.host;
        const apiUrl = import.meta.env.VITE_PANEL_API_URL || 'http://localhost:3001';
        const res = await fetch(`${apiUrl}/api/public/posts?domain=${domain}`);
        if (!res.ok) throw new Error('Failed to fetch posts');
        const json = await res.json();
        setPosts((json.data || []).slice(0, 3));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading || error || posts.length === 0) {
    return null;
  }

  return (
    <section className="py-24 md:py-40 px-4 bg-brand-bg relative overflow-hidden">
      <div className="container max-w-7xl relative z-10">
        
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 md:mb-32 gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex py-1 px-4 rounded-full bg-brand-primary/5 text-[10px] font-extrabold text-brand-primary uppercase tracking-[0.2em] mb-8 font-display italic">Curated Insights</div>
            <h2 className="text-4xl md:text-7xl font-extrabold text-brand-text mb-8 tracking-tighter leading-none font-display uppercase">
              EDITORIAL<br />
              <span className="text-brand-primary italic">CHRONICLES.</span>
            </h2>
            <p className="text-brand-muted text-lg font-medium leading-relaxed max-w-lg">
              Explore our laboratory of streaming techniques, setup mastery, and industry aesthetics.
            </p>
          </div>
          <Link to="/blog" className="btn-secondary group whitespace-nowrap">
            Archive Access <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {posts.map((post) => (
            <Link 
              key={post.id || post.slug} 
              to={`/blog/${post.slug}`} 
              className="group flex flex-col bg-brand-surface rounded-eight border border-brand-line overflow-hidden shadow-card hover:shadow-soft transition-all duration-700 hover:-translate-y-2"
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
                  <div className="absolute inset-0 bg-brand-surface2 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-brand-line" />
                  </div>
                )}
                {post.categories && post.categories[0] && (
                  <div className="absolute top-6 left-6 bg-brand-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-eight shadow-lg">
                    {post.categories[0]}
                  </div>
                )}
              </div>
              <div className="p-10 flex flex-col flex-grow relative">
                <div className="flex items-center gap-2 mb-6 text-brand-faint text-[10px] font-black uppercase tracking-widest">
                  <Calendar className="w-4 h-4 text-brand-primary" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
                
                <h3 className="text-2xl font-extrabold text-brand-text mb-4 leading-tight group-hover:text-brand-primary transition-colors line-clamp-2 tracking-tight font-display uppercase">
                  {post.title}
                </h3>
                <p className="text-brand-muted text-base line-clamp-3 mb-10 flex-grow leading-loose font-medium italic opacity-80">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center text-brand-primary font-black text-xs uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                  REVEAL CHAPTER
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
