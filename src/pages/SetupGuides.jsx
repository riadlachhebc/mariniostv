import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { FAQContent } from '../components/FAQ';
import { BookOpen, Tv, Smartphone, ArrowRight, Zap, Play } from 'lucide-react';

export const SetupGuides = () => {
  const siteUrl = 'https://mariniosiptvpro.com';

  const FreeTrialBanner = () => (
    <div className="mt-8 p-6 bg-brand-primary/10 border border-brand-primary/20 rounded-eight text-center">
      <h3 className="text-xl font-extrabold text-brand-text mb-3">Need a reliable M3U playlist that doesn't freeze?</h3>
      <p className="text-brand-muted text-sm mb-4">Our high-performance servers guarantee buffer-free streaming.</p>
      <Link to="/iptv-free-trial" className="btn-primary inline-flex items-center text-sm py-2 px-6">
        Get a 24-Hour Free Trial with Marinios IPTV <Zap className="ml-2 w-4 h-4 fill-white" />
      </Link>
    </div>
  );

  return (
    <div className="bg-brand-bg min-h-screen">
      <SEO 
        title="Marinios IPTV Setup Guides – Firestick, Smart TV & Box"
        description="Easily set up Marinios IPTV on Firestick, Android, Smart TVs, Tivimate, and IPTV Smarters Pro. Our step-by-step tutorials ensure you get 4K streaming fast."
        canonical="/setup-guides"
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden border-b border-brand-line">
        <div className="absolute inset-0 bg-hero-radial opacity-30 z-0"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-brand-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-brand-text mb-6 leading-tight font-display">
            Step-by-Step IPTV Setup Guides | Marinios IPTV Installation
          </h1>
          <p className="text-lg text-brand-muted font-medium mb-10 leading-relaxed max-w-2xl mx-auto">
            Learn how to easily install and set up <strong className="text-brand-text font-bold">Marinios IPTV</strong> on Amazon Firestick, Android, Smart TVs, Tivimate, and IPTV Smarters Pro. Our tutorials ensure you get the best out of your <strong className="text-brand-text font-bold">Marinios IPTV subscription</strong> with 20,000+ live channels and 4K VOD library.
          </p>
        </div>
      </section>

      {/* Guide Content */}
      <section className="py-16 md:py-24 px-4 bg-brand-surface relative">
        <div className="container max-w-4xl">
          
          {/* Firestick Guide */}
          <article className="mb-24">
            <h2 className="text-3xl font-extrabold text-brand-text mb-6 font-display flex items-center">
              <span className="text-brand-primary mr-3">1.</span> Best IPTV for Amazon Firestick: Marinios Installation
            </h2>
            <div className="prose prose-invert max-w-none text-brand-muted">
              <p>Amazon Firestick is one of the best platforms for streaming IPTV. Here is how you side-load your preferred app:</p>
              <ol className="list-decimal pl-5 space-y-3">
                <li>Go to your Firestick <strong>Settings</strong> &gt; <strong>My Fire TV</strong> &gt; <strong>Developer Options</strong>.</li>
                <li>Turn ON <strong>Apps from Unknown Sources</strong>.</li>
                <li>Go back to the home screen and search for the <strong>Downloader</strong> app, install and open it.</li>
                <li>Enter the APK ID or short link provided to you during your subscription setup (e.g. for Tivimate or Smarters).</li>
                <li>Install the app, open it, and follow the specific app login guide below!</li>
              </ol>
            </div>
            <FreeTrialBanner />
          </article>

          {/* Tivimate Guide */}
          <article className="mb-24">
            <h2 className="text-3xl font-extrabold text-brand-text mb-6 font-display flex items-center">
              <span className="text-brand-primary mr-3">2.</span> IPTV Subscription for Tivimate Premium (Best App)
            </h2>
            <div className="prose prose-invert max-w-none text-brand-muted">
              <p>TiviMate offers the most premium, cable-like interface for IPTV viewers. We highly recommend it for Android and Firestick users.</p>
              <div className="bg-brand-surface2 border border-brand-line aspect-video rounded-eight flex items-center justify-center my-6">
                 {/* Placeholder for actual image: tivimate-m3u-url-setup.jpg */}
                 <span className="text-brand-faint text-sm">Image: tivimate-m3u-url-setup.jpg</span>
              </div>
              <ol className="list-decimal pl-5 space-y-3">
                <li>Open TiviMate and click <strong>Add Playlist</strong>.</li>
                <li>Choose <strong>Xtream Codes</strong> or <strong>M3U Playlist</strong> (we provide both).</li>
                <li>Enter the Server URL, Username, and Password sent to your email/WhatsApp.</li>
                <li>Check the "Include VOD" box if you want access to movies and series.</li>
                <li>Click <strong>Next</strong> and let the playlist process. You are ready to stream!</li>
              </ol>
            </div>
            <FreeTrialBanner />
          </article>

          {/* Smarters Pro Guide */}
          <article className="mb-24">
            <h2 className="text-3xl font-extrabold text-brand-text mb-6 font-display flex items-center">
              <span className="text-brand-primary mr-3">3.</span> IPTV Smarters Pro Server Setup (Android / iOS)
            </h2>
            <div className="prose prose-invert max-w-none text-brand-muted">
              <p>IPTV Smarters Pro is highly versatile and works across mobile devices, PCs, and TVs.</p>
              <ol className="list-decimal pl-5 space-y-3">
                <li>Download "IPTV Smarters Pro" from the App Store or Google Play Store.</li>
                <li>Open the app and select <strong>Login with Xtream Codes API</strong> (Easiest method).</li>
                <li>Enter whatever name you want for the "Any Name" field.</li>
                <li>Input the Username, Password, and Server URL we provided you.</li>
                <li>Click <strong>Add User</strong>. The app will download your live channels, EPG, and movies.</li>
              </ol>
            </div>
            <FreeTrialBanner />
          </article>

          {/* Smart TV Guide */}
          <article>
            <h2 className="text-3xl font-extrabold text-brand-text mb-6 font-display flex items-center">
              <span className="text-brand-primary mr-3">4.</span> IPTV for Smart TV and Android Box (Samsung / LG)
            </h2>
            <div className="prose prose-invert max-w-none text-brand-muted">
              <p>If you have an LG or Samsung Smart TV without an Android OS, the best apps available in the content store are IBO Player, IPTV Smarters, or DuplexPlay.</p>
               <ol className="list-decimal pl-5 space-y-3">
                <li>Search your TV's App Store for <strong>IBO Player</strong> and install it.</li>
                <li>Open the app and take note of the <strong>Device MAC Address</strong> and <strong>Device Key</strong> displayed on the screen.</li>
                <li>Go to the IBO Player website on your computer/phone.</li>
                <li>Enter the MAC Address and key, then paste the M3U Link we provided into the playlist section.</li>
                <li>Restart the app on your TV to begin streaming.</li>
              </ol>
            </div>
            <FreeTrialBanner />
          </article>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 md:py-24 px-4 bg-brand-surface border-t border-brand-line">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-6 font-display">Setup & Installation FAQ</h2>
            <p className="text-brand-muted font-bold tracking-widest uppercase text-xs">Answering common questions about app configuration</p>
          </div>
          <div className="glass-card p-8 md:p-12">
            <FAQContent />
          </div>
        </div>
      </section>
    </div>
  );
};
