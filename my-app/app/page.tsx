import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-pink-200 overflow-x-hidden">
      {/* Background decoration - subtle, clean */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#F75EBD]/[0.06] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#FF69FF]/[0.05] blur-[120px]" />
        {/* Decorative spinning ring */}
        <div className="absolute top-[15%] right-[10%] w-64 h-64 border border-[#F75EBD]/[0.06] rounded-full animate-spin-slow" />
        <div className="absolute bottom-[20%] left-[5%] w-40 h-40 border border-[#FF69FF]/[0.06] rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 animate-fade-in-down">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/cupidbox-logo.svg"
              alt="CupidBox Logo"
              width={36}
              height={36}
              className="w-9 h-9 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-modak text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#F75EBD] to-[#FF69FF] tracking-wide">
              CupidBox
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/how-it-works" className="hidden sm:block text-slate-600 font-semibold hover:text-[#F75EBD] transition-colors">
              How it Works
            </Link>
            <Link href="/early-access" className="hidden sm:block px-7 py-3 rounded-full bg-gradient-to-r from-[#F75EBD] to-[#FF69FF] text-white font-semibold hover:shadow-lg hover:shadow-[#F75EBD]/30 transition-all hover:scale-105 active:scale-95">
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col items-center text-center mt-12 md:mt-24">
            {/* Logo showcase - no box */}
            <div className="mb-8 relative animate-fade-in-scale">
              <Image
                src="/cupidbox-logo.svg"
                alt="CupidBox Logo"
                width={100}
                height={100}
                className="w-24 h-24 md:w-28 md:h-28 animate-float drop-shadow-md"
              />
              {/* Orbiting particle */}
              <div className="absolute -inset-6 animate-spin-slow">
                <div className="absolute top-0 left-1/2 w-2.5 h-2.5 rounded-full bg-[#F75EBD]/40 shadow-lg shadow-[#F75EBD]/30" />
              </div>
            </div>

            <div className="animate-on-load animate-fade-in-up inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F75EBD]/10 text-[#F75EBD] font-semibold text-sm mb-10 shadow-sm border border-[#F75EBD]/20 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F75EBD] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F75EBD]"></span>
              </span>
              Now accepting early access members
            </div>

            <h1 className="animate-on-load animate-fade-in-up delay-200 text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
              Love is blind. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F75EBD] to-[#FF69FF] inline-block pb-2">
                We make the intro.
              </span>
            </h1>

            <p className="animate-on-load animate-fade-in-up delay-400 max-w-2xl text-xl text-slate-500 mb-14 leading-relaxed font-medium">
              CupidBox takes the guesswork out of modern dating. Answer a few questions, and our human matchmakers will set you up on a curated blind date. No swiping, just genuine connections.
            </p>

            <div className="animate-on-load animate-fade-in-up delay-600 flex flex-col sm:flex-row gap-5 w-full justify-center max-w-md">
              <Link href="/early-access" className="flex flex-1 items-center justify-center px-8 py-4.5 rounded-2xl bg-gradient-to-r from-[#F75EBD] to-[#FF69FF] text-white font-bold text-lg hover:shadow-2xl hover:shadow-[#F75EBD]/40 hover:-translate-y-1 transition-all duration-300 animate-shimmer bg-[length:200%_100%] text-center" style={{ backgroundImage: 'linear-gradient(110deg, #F75EBD 0%, #FF69FF 45%, #FFB3E6 50%, #FF69FF 55%, #F75EBD 100%)' }}>
                Get Matched
              </Link>

              <Link href="/how-it-works" className="flex-1 px-8 py-4.5 rounded-2xl bg-white border border-slate-200 text-slate-800 font-bold text-lg hover:border-[#F75EBD] hover:bg-[#F75EBD]/5 shadow-sm transition-all duration-300 group flex items-center justify-center gap-2">
                How it Works
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-32 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "No Profiles, No Browsing",
                desc: "Connect based on personality and mutual goals. We hide all superficial details until the date is set.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ),
                delay: "delay-100"
              },
              {
                title: "Hand-Picked Matches",
                desc: "Every single match is curated by our dedicated matchmaking team to ensure highest compatibility.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                delay: "delay-300"
              },
              {
                title: "Planned For You",
                desc: "We pick the perfect spot, you just show up. Enjoy a completely effortless first date experience.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                delay: "delay-500"
              }
            ].map((feature, i) => (
              <div key={i} className={`animate-on-load animate-fade-in-up ${feature.delay} p-10 rounded-[2.5rem] bg-white/80 backdrop-blur-md border border-slate-100 shadow-xl shadow-slate-200/30 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#F75EBD]/15 transition-all duration-500 group`}>
                <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-[#F75EBD]/10 to-[#FF69FF]/10 flex items-center justify-center text-[#F75EBD] group-hover:from-[#F75EBD] group-hover:to-[#FF69FF] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-32 flex justify-center">
            <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#F75EBD] to-[#FF69FF] w-full max-w-4xl p-12 md:p-20 text-center group">
              <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-[40%] h-full bg-gradient-to-r from-white/10 to-transparent pointer-events-none"></div>

              {/* Floating particles */}
              <div className="absolute top-6 right-12 w-4 h-4 rounded-full bg-white/20 animate-bounce-gentle" />
              <div className="absolute bottom-10 left-16 w-3 h-3 rounded-full bg-white/15 animate-bounce-gentle delay-300" />
              <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-white/20 animate-bounce-gentle delay-500" />

              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 relative z-10 tracking-tight">Ready to find your person?</h2>
              <p className="text-white/80 text-xl max-w-xl mx-auto mb-10 relative z-10">Join our exclusive waitlist today and be among the first to experience CupidBox.</p>

              <form action="/waitlist-success" className="flex flex-col gap-3 max-w-md mx-auto relative z-10">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors backdrop-blur-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors backdrop-blur-sm"
                  required
                />
                <input
                  type="text"
                  placeholder="@instagram_handle (optional)"
                  className="w-full px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors backdrop-blur-sm"
                />
                <button type="submit" className="w-full px-8 py-4 mt-1 rounded-2xl bg-white text-[#F75EBD] font-bold hover:bg-white/90 transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-xl hover:scale-105 active:scale-95">
                  Join Waitlist
                </button>
                <p className="text-sm text-white/80 mt-2 font-medium">
                  Follow us on <a href="https://instagram.com/cupidbox.love" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-[#F75EBD] underline transition-colors">Instagram @cupidbox.love</a> for updates!
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 bg-white/50 backdrop-blur-md relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/cupidbox-logo.svg"
              alt="CupidBox Logo"
              width={24}
              height={24}
              className="w-6 h-6 group-hover:scale-110 transition-transform"
            />
            <span className="font-modak text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#F75EBD] to-[#FF69FF]">CupidBox</span>
          </Link>
          <div className="text-slate-500 font-medium text-sm text-center md:text-left">
            © {new Date().getFullYear()} CupidBox. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="https://instagram.com/cupidbox.love" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#F75EBD] transition-colors hover:-translate-y-0.5 duration-300">Contact Us (Instagram)</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
