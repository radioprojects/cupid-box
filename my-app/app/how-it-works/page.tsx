'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const steps = [
  {
    number: "01",
    title: "Sign Up & Tell Us About You",
    description: "Create your CupidBox profile by answering our curated personality questionnaire. Our human matchmakers carefully review your goals to find someone who complements you.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: "from-[#F75EBD] to-[#FF69FF]",
  },
  {
    number: "02",
    title: "We Find a Match & Plan the Date",
    description: "When we find your match, you receive a fun fact—nothing more. If there's mutual interest, we select a curated venue and handle the reservation. Zero effort on your part.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    color: "from-[#FF69FF] to-[#F75EBD]",
  },
  {
    number: "03",
    title: "Meet, Connect, Repeat",
    description: "Go on your blind date and enjoy the experience! Share anonymous feedback with us afterward so we can fine-tune future matches if needed.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-[#F75EBD] to-[#FF69FF]",
  },
];

const faqs = [
  {
    q: "Is CupidBox free?",
    a: "Our basic plan is free and includes one curated match per month. Premium members get priority matching, more frequent dates, and access to exclusive events."
  },
  {
    q: "How is this different from dating apps?",
    a: "No swiping, no endless browsing, no photo-first impressions. CupidBox uses real human matchmakers who understand nuance, chemistry, and what makes relationships actually work."
  },
  {
    q: "What if I don't like my match?",
    a: "No pressure at all! After each date, you share anonymous feedback. Our matchmakers use this to improve future pairings. Every match is a learning opportunity."
  },
  {
    q: "How long until I get my first match?",
    a: "Most members receive their first match within 1-2 weeks of completing their profile. We take time to find the right person — no rushing."
  },
  {
    q: "What cities is CupidBox available in?",
    a: "We're currently live in 50+ cities across India and expanding fast. If we're not in your city yet, join the waitlist and we'll notify you when we arrive."
  },
];

export default function HowItWorks() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-pink-200">
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
            <Link href="/how-it-works" className="hidden sm:block text-[#F75EBD] font-semibold transition-colors">
              How it Works
            </Link>
            <Link href="/early-access" className="hidden sm:block px-7 py-3 rounded-full bg-gradient-to-r from-[#F75EBD] to-[#FF69FF] text-white font-semibold hover:shadow-lg hover:shadow-[#F75EBD]/30 transition-all hover:scale-105 active:scale-95">
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Page Header */}
          <div className="text-center mt-8 md:mt-16 mb-20">
            <h1 className="animate-on-load animate-fade-in-up text-5xl md:text-7xl tracking-tighter mb-6 leading-[1.1]">
              <span className="font-extrabold">How </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F75EBD] to-[#FF69FF] font-modak tracking-wide">CupidBox</span><span className="font-extrabold">Works</span>
            </h1>
            <p className="animate-on-load animate-fade-in-up delay-200 max-w-2xl mx-auto text-xl text-slate-500 leading-relaxed font-medium">
              Three simple steps from signing up to sitting across from someone who might just change your life.
            </p>
          </div>

          {/* Steps Timeline - Mobile Optimized */}
          <div className="flex flex-col gap-6 md:gap-8 max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <div
                key={i}
                className="animate-on-load animate-fade-in-up p-8 md:p-10 rounded-[2rem] bg-white/80 backdrop-blur-md border border-slate-100 shadow-xl shadow-slate-200/30 flex flex-col sm:flex-row items-start gap-6 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#F75EBD]/10 transition-all duration-500"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  {step.icon}
                </div>
                <div>
                  <div className="inline-block px-3 py-1 bg-slate-100 text-slate-500 font-extrabold text-xs rounded-full mb-3 uppercase tracking-widest content-start border border-slate-200">
                    Step {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-28 max-w-3xl mx-auto">
            <h2 className="animate-on-load animate-fade-in-up text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-center">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F75EBD] to-[#FF69FF]">Questions</span>
            </h2>
            <p className="text-slate-500 text-center mb-12 text-lg font-medium">Everything you need to know before you get started.</p>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="animate-on-load animate-fade-in-up rounded-2xl bg-white/80 backdrop-blur-md border border-slate-100 shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left group"
                  >
                    <span className="font-bold text-slate-800 text-lg pr-4">{faq.q}</span>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#F75EBD]/10 flex items-center justify-center text-[#F75EBD] transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-28 flex justify-center">
            <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#F75EBD] to-[#FF69FF] w-full max-w-4xl p-12 md:p-20 text-center group">
              <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-[40%] h-full bg-gradient-to-r from-white/10 to-transparent pointer-events-none"></div>

              {/* Floating particles */}
              <div className="absolute top-6 right-12 w-4 h-4 rounded-full bg-white/20 animate-bounce-gentle" />
              <div className="absolute bottom-10 left-16 w-3 h-3 rounded-full bg-white/15 animate-bounce-gentle delay-300" />
              <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-white/20 animate-bounce-gentle delay-500" />

              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 relative z-10 tracking-tight">
                Convinced? Let&apos;s go.
              </h2>
              <p className="text-white/80 text-xl max-w-xl mx-auto mb-10 relative z-10">
                Take the first step toward meeting someone incredible. No swiping required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Link href="/early-access" className="px-10 py-4 rounded-2xl bg-white text-[#F75EBD] font-bold text-lg hover:bg-white/90 transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center">
                  Get Started
                </Link>
                <Link href="/" className="px-10 py-4 rounded-2xl border border-white/50 text-white font-bold text-lg hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  ← Back to Home
                </Link>
              </div>
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
