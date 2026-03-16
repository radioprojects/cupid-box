'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const steps = [
  {
    number: "01",
    title: "Sign Up & Tell Us About You",
    description: "Create your CupidBox profile by answering our curated personality questionnaire. We ask the questions that actually matter — your values, passions, deal-breakers, and what makes you laugh. No photos, no surface-level swiping.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: "from-[#FF9EE2] to-[#F75EBD]",
  },
  {
    number: "02",
    title: "Our Matchmakers Get to Work",
    description: "Real human matchmakers — not algorithms — carefully review your profile. They draw on years of experience and emotional intelligence to find someone who truly complements you. Quality over quantity, always.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "from-[#F75EBD] to-[#D43A9A]",
  },
  {
    number: "03",
    title: "Get Your Match Notification",
    description: "When we find your match, you'll receive a notification with a first name and a fun fact — nothing more. The mystery is part of the magic. Both parties confirm interest before we move forward.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    color: "from-[#D43A9A] to-[#BC4E9C]",
  },
  {
    number: "04",
    title: "We Plan the Perfect Date",
    description: "No awkward 'where should we go?' conversations. Our team selects a curated venue — think cozy cafés, rooftop bars, or scenic walks — and handles the reservation. You just show up and be yourself.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "from-[#BC4E9C] to-[#9B3A7D]",
  },
  {
    number: "05",
    title: "Meet, Connect, Repeat",
    description: "Go on your blind date and enjoy the experience! Afterward, share feedback with us so we can fine-tune future matches. If there's a spark, great. If not, we learn from it and try again.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-[#F75EBD] to-[#FF9EE2]",
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
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#F75EBD]/15 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#FF9EE2]/15 blur-[100px]" />
        <div className="absolute top-[50%] left-[50%] w-[30%] h-[30%] rounded-full bg-[#D43A9A]/8 blur-[100px]" />
        <div className="absolute top-[20%] right-[15%] w-48 h-48 border border-[#F75EBD]/8 rounded-full animate-spin-slow" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 animate-fade-in-down">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#F75EBD] to-[#FF9EE2] flex items-center justify-center shadow-lg shadow-[#F75EBD]/20 transform rotate-[-5deg] group-hover:rotate-0 transition-transform cursor-pointer p-2">
              <Image
                src="/cupidbox-logo.svg"
                alt="CupidBox Logo"
                width={32}
                height={32}
                className="w-full h-full invert brightness-200"
              />
            </div>
            <span className="font-modak text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#D43A9A] to-[#F75EBD] tracking-wide">
              CupidBox
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/how-it-works" className="hidden sm:block text-[#F75EBD] font-semibold">
              How it Works
            </Link>
            <button className="hidden sm:block px-7 py-3 rounded-full bg-gradient-to-r from-[#D43A9A] to-[#F75EBD] text-white font-semibold hover:shadow-lg hover:shadow-[#F75EBD]/30 transition-all hover:scale-105 active:scale-95">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Page Header */}
          <div className="text-center mt-8 md:mt-16 mb-20">
            <div className="animate-fade-in-scale inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F75EBD]/10 text-[#D43A9A] font-semibold text-sm mb-8 border border-[#F75EBD]/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              The CupidBox Process
            </div>
            <h1 className="animate-on-load animate-fade-in-up text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.1]">
              How <span className="font-modak text-transparent bg-clip-text bg-gradient-to-r from-[#F75EBD] to-[#D43A9A] tracking-wide">CupidBox</span> Works
            </h1>
            <p className="animate-on-load animate-fade-in-up delay-200 max-w-2xl mx-auto text-xl text-slate-500 leading-relaxed font-medium">
              Five simple steps from signing up to sitting across from someone who might just change your life.
            </p>
          </div>

          {/* Steps Timeline */}
          <div className="relative">
            {/* Vertical line connector */}
            <div className="absolute left-[2.25rem] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F75EBD]/30 via-[#D43A9A]/20 to-[#BC4E9C]/30 hidden md:block" />
            <div className="absolute left-[2.25rem] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F75EBD]/30 via-[#D43A9A]/20 to-[#BC4E9C]/30 md:hidden" />

            {steps.map((step, i) => (
              <div
                key={i}
                className={`animate-on-load ${i % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'} relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mb-20 last:mb-0`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Mobile: always left-aligned. Desktop: alternate left/right */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:order-1' : 'md:order-3'}`}>
                  <div className={`ml-16 md:ml-0 p-8 md:p-10 rounded-[2rem] bg-white/80 backdrop-blur-md border border-slate-100 shadow-xl shadow-slate-200/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#F75EBD]/10 transition-all duration-500 group`}>
                    <div className={`inline-flex w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${step.color} items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      {step.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed font-medium">{step.description}</p>
                  </div>
                </div>

                {/* Center circle node */}
                <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 md:order-2 z-10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-black text-sm shadow-lg shadow-[#F75EBD]/20 ring-4 ring-white`}>
                    {step.number}
                  </div>
                </div>

                {/* Empty spacer for alternating layout */}
                <div className={`hidden md:block flex-1 ${i % 2 === 0 ? 'md:order-3' : 'md:order-1'}`} />
              </div>
            ))}
          </div>

          {/* Why CupidBox Section */}
          <div className="mt-32 text-center">
            <h2 className="animate-on-load animate-fade-in-up text-4xl md:text-5xl font-extrabold tracking-tight mb-16">
              Why People <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F75EBD] to-[#D43A9A]">Love</span> CupidBox
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { emoji: "🎯", title: "Precision Matching", desc: "Human intuition beats algorithms" },
                { emoji: "🔒", title: "Privacy First", desc: "No public profiles, ever" },
                { emoji: "✨", title: "Zero Effort Dates", desc: "We handle all the logistics" },
                { emoji: "💬", title: "Real Feedback", desc: "Learn and grow after every match" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="animate-on-load animate-fade-in-up p-8 rounded-[2rem] bg-white/80 backdrop-blur-md border border-slate-100 shadow-lg hover:-translate-y-2 hover:shadow-xl hover:shadow-[#F75EBD]/10 transition-all duration-500 group"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">{item.emoji}</div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-32 max-w-3xl mx-auto">
            <h2 className="animate-on-load animate-fade-in-up text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-center">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F75EBD] to-[#D43A9A]">Questions</span>
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
          <div className="mt-32 flex justify-center">
            <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 border border-slate-800 w-full max-w-4xl p-12 md:p-20 text-center group">
              <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-[#F75EBD]/20 to-transparent pointer-events-none group-hover:from-[#F75EBD]/30 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-[40%] h-full bg-gradient-to-r from-[#D43A9A]/20 to-transparent pointer-events-none group-hover:from-[#D43A9A]/30 transition-all duration-700" />

              <div className="absolute top-8 right-16 w-4 h-4 rounded-full bg-[#F75EBD]/20 animate-bounce-gentle" />
              <div className="absolute bottom-12 left-20 w-3 h-3 rounded-full bg-[#FF9EE2]/30 animate-bounce-gentle delay-300" />
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 relative z-10 tracking-tight">
                Convinced? Let&apos;s go.
              </h2>
              <p className="text-slate-400 text-xl max-w-xl mx-auto mb-10 relative z-10">
                Take the first step toward meeting someone incredible. No swiping required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Link href="/" className="px-10 py-4 rounded-2xl bg-[#F75EBD] text-white font-bold text-lg hover:bg-[#D43A9A] transition-all duration-300 shadow-lg shadow-[#F75EBD]/20 hover:shadow-xl hover:shadow-[#F75EBD]/30 hover:scale-105 active:scale-95">
                  Get Started
                </Link>
                <Link href="/" className="px-10 py-4 rounded-2xl border border-slate-700 text-slate-300 font-bold text-lg hover:border-[#F75EBD] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn">
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#F75EBD] to-[#D43A9A] flex items-center justify-center p-1.5 group-hover:rotate-6 transition-transform">
              <Image
                src="/cupidbox-logo.svg"
                alt="CupidBox Logo"
                width={20}
                height={20}
                className="w-full h-full invert brightness-200"
              />
            </div>
            <span className="font-modak text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#D43A9A] to-[#F75EBD]">CupidBox</span>
          </Link>
          <div className="text-slate-500 font-medium text-sm text-center md:text-left">
            © {new Date().getFullYear()} CupidBox. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-[#F75EBD] transition-colors">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-[#F75EBD] transition-colors">Instagram</a>
            <a href="#" className="text-slate-400 hover:text-[#F75EBD] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
