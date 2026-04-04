import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Play, Menu, X } from 'lucide-react';
import { createWhatsAppLink, WA_MESSAGES } from '../utils/whatsapp';
import logoImg from '../assets/images/logo.webp';
import { WhatsAppWidget } from './WhatsAppWidget';

export const Layout = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLinkActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-primary/20 selection:text-brand-primary flex flex-col relative bg-brand-bg text-brand-text">
      {/* Editorial Navigation - Glassmorphism */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-brand-line">
        <div className="container h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group z-50">
            <div className="w-10 h-10 rounded-eight bg-brand-bg flex items-center justify-center shadow-soft hover:shadow-glow transition-all shrink-0 overflow-hidden border border-brand-line">
              <img src={logoImg} alt="Marinios Logo" width="1024" height="1024" className="w-full h-full object-cover p-1 scale-110" loading="lazy" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-brand-text leading-none font-display">MARINIOS</span>
              <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">IPTV</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 text-sm font-bold text-brand-muted tracking-wide uppercase font-display">
            <Link to="/" className={`${isLinkActive('/') ? 'text-brand-primary' : 'hover:text-brand-text'} transition-colors`}>Home</Link>
            <Link to="/pricing" className={`${isLinkActive('/pricing') ? 'text-brand-primary' : 'hover:text-brand-text'} transition-colors`}>Pricing</Link>
            <Link to="/devices" className={`${isLinkActive('/devices') ? 'text-brand-primary' : 'hover:text-brand-text'} transition-colors`}>Devices</Link>
            <Link to="/contact" className={`${isLinkActive('/contact') ? 'text-brand-primary' : 'hover:text-brand-text'} transition-colors`}>Contact</Link>
            <Link to="/faq" className={`${isLinkActive('/faq') ? 'text-brand-primary' : 'hover:text-brand-text'} transition-colors`}>FAQ</Link>
            <Link to="/blog" className={`${isLinkActive('/blog') || location.pathname.startsWith('/blog/') ? 'text-brand-primary' : 'hover:text-brand-text'} transition-colors`}>Blog</Link>
          </nav>
          
          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-6">
            <a href={createWhatsAppLink(WA_MESSAGES.freeTrial)} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-brand-muted hover:text-brand-primary transition-colors underline decoration-brand-primary/30 decoration-2 underline-offset-8">Free Test</a>
            <Link to="/pricing" className="btn-primary py-2.5 px-7">Get Access</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-4 z-50">
            <button onClick={toggleMenu} className="p-2.5 bg-brand-surface2 rounded-eight text-brand-muted hover:text-brand-primary transition-all active:scale-95" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`lg:hidden fixed inset-x-0 top-20 bg-brand-surface border-b border-brand-line shadow-soft transition-all duration-300 origin-top overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
          <nav className="flex flex-col px-6 py-8 gap-5">
            <Link to="/" onClick={closeMenu} className={`text-lg font-extrabold font-display p-4 rounded-eight ${isLinkActive('/') ? 'bg-brand-primary/5 text-brand-primary' : 'text-brand-text active:bg-brand-surface2'}`}>Home</Link>
            <Link to="/pricing" onClick={closeMenu} className={`text-lg font-extrabold font-display p-4 rounded-eight ${isLinkActive('/pricing') ? 'bg-brand-primary/5 text-brand-primary' : 'text-brand-text active:bg-brand-surface2'}`}>Pricing</Link>
            <Link to="/devices" onClick={closeMenu} className={`text-lg font-extrabold font-display p-4 rounded-eight ${isLinkActive('/devices') ? 'bg-brand-primary/5 text-brand-primary' : 'text-brand-text active:bg-brand-surface2'}`}>Devices</Link>
            <Link to="/contact" onClick={closeMenu} className={`text-lg font-extrabold font-display p-4 rounded-eight ${isLinkActive('/contact') ? 'bg-brand-primary/5 text-brand-primary' : 'text-brand-text active:bg-brand-surface2'}`}>Contact</Link>
            <Link to="/faq" onClick={closeMenu} className={`text-lg font-extrabold font-display p-4 rounded-eight ${isLinkActive('/faq') ? 'bg-brand-primary/5 text-brand-primary' : 'text-brand-text active:bg-brand-surface2'}`}>FAQ</Link>
            <Link to="/blog" onClick={closeMenu} className={`text-lg font-extrabold font-display p-4 rounded-eight ${isLinkActive('/blog') || location.pathname.startsWith('/blog/') ? 'bg-brand-primary/5 text-brand-primary' : 'text-brand-text active:bg-brand-surface2'}`}>Blog</Link>
            <div className="w-full h-px bg-brand-line my-2"></div>
            <a href={createWhatsAppLink(WA_MESSAGES.freeTrial)} onClick={closeMenu} target="_blank" rel="noopener noreferrer" className="btn-primary py-4">
              Start Free Trial ⚡️
            </a>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow flex flex-col relative z-0 w-full">
        {children}
      </main>
      
      {/* High-End Editorial Footer */}
      <footer className="bg-brand-surface py-16 md:py-24 px-4 border-t border-brand-line relative z-10 pb-36 md:pb-24 overflow-hidden">
        {/* Subtle Background Detail */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        
        <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 relative z-10">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 rounded-eight bg-brand-bg flex items-center justify-center shadow-soft shrink-0 overflow-hidden border border-brand-line">
                <img src={logoImg} alt="Marinios Logo" width="1024" height="1024" className="w-full h-full object-cover p-1 scale-110" loading="lazy" />
              </div>
              <span className="text-xl font-extrabold font-display">MARINIOS IPTV</span>
            </Link>
            <p className="text-brand-muted leading-loose max-w-sm mb-10 font-medium text-base">
              The premier streaming solution for the modern age. We prioritize visual excellence, stable libraries, and a premium editorial experience.
            </p>
            <div className="flex flex-col gap-4">
              <div className="text-brand-text font-bold text-lg">curator@mariniosiptvpro.com</div>
              <div className="flex gap-4">
                <a href={createWhatsAppLink(WA_MESSAGES.support)} target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-eight bg-brand-surface2 border border-brand-line flex items-center justify-center hover:bg-brand-primary/5 hover:border-brand-primary/30 transition-all cursor-pointer">
                  <span className="text-lg">💬</span>
                </a>
                <Link to="/contact" 
                   className="w-10 h-10 rounded-eight bg-brand-surface2 border border-brand-line flex items-center justify-center hover:bg-brand-primary/5 hover:border-brand-primary/30 transition-all cursor-pointer">
                  <span className="text-lg">✉️</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 col-span-1">
            <h4 className="text-brand-text font-extrabold mb-8 tracking-widest uppercase text-xs font-display">Product</h4>
            <ul className="flex flex-col gap-5 text-brand-muted text-sm font-bold">
              <li><Link to="/pricing" className="hover:text-brand-primary transition-colors">Subscription Architecture</Link></li>
              <li><Link to="/channels-list" className="hover:text-brand-primary transition-colors">Channels List</Link></li>
              <li><Link to="/devices" className="hover:text-brand-primary transition-colors">Unified Ecosystem</Link></li>
              <li><Link to="/iptv-reseller-panel" className="hover:text-brand-primary transition-colors">Reseller Panel</Link></li>
              <li><Link to="/blog" className="hover:text-brand-primary transition-colors">Curator Journal</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2 col-span-1">
            <h4 className="text-brand-text font-extrabold mb-8 tracking-widest uppercase text-xs font-display">Assistance</h4>
            <ul className="flex flex-col gap-5 text-brand-muted text-sm font-bold">
              <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Human Assistance</Link></li>
              <li><Link to="/setup-guides" className="hover:text-brand-primary transition-colors">Setup Guides</Link></li>
              <li><a href={createWhatsAppLink(WA_MESSAGES.freeTrial)} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">Trial Initiation</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 col-span-1">
            <h4 className="text-brand-text font-extrabold mb-8 tracking-widest uppercase text-xs font-display">Compliance</h4>
            <ul className="flex flex-col gap-5 text-brand-muted text-sm font-bold">
              <li><Link to="/privacy" className="hover:text-brand-primary transition-colors">Privacy Integrity</Link></li>
              <li><Link to="/terms" className="hover:text-brand-primary transition-colors">Usage Architecture</Link></li>
              <li><Link to="/refund" className="hover:text-brand-primary transition-colors">Refund Strategy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="container max-w-7xl pt-12 mt-20 border-t border-brand-line flex flex-col md:flex-row justify-between items-center gap-6 text-brand-faint text-xs font-bold uppercase tracking-widest leading-none">
          <div>&copy; {new Date().getFullYear()} MARINIOS IPTV. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <span className="hover:text-brand-muted transition-colors cursor-pointer">DESIGNED BY MARINIOS</span>
            <span className="hover:text-brand-muted transition-colors cursor-pointer underline decoration-brand-primary/20">MARINIOSIPTVPRO.COM</span>
          </div>
        </div>
      </footer>

      {/* Overlay for mobile menu */}
      <div className={`lg:hidden fixed inset-0 bg-brand-text/10 backdrop-blur-sm z-40 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={closeMenu}></div>

      <WhatsAppWidget />
    </div>
  );
};
