'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function EarlyAccess() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-pink-200 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#F75EBD]/[0.06] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#FF69FF]/[0.05] blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
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
          <Link href="/" className="text-slate-600 font-semibold hover:text-[#F75EBD] transition-colors flex items-center gap-2">
            ← Back home
          </Link>
        </div>
      </nav>

      <main className="relative z-10 p-6 w-full max-w-2xl mt-16 md:mt-24">
        <div className="bg-white/80 backdrop-blur-md rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-xl text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-bl from-[#F75EBD]/10 to-transparent pointer-events-none rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-[#FF69FF]/10 to-transparent pointer-events-none rounded-tr-full" />

          <div className="inline-flex w-20 h-20 mb-8 rounded-full bg-gradient-to-br from-[#F75EBD]/10 to-[#FF69FF]/10 items-center justify-center text-[#F75EBD] shadow-inner border border-[#F75EBD]/20">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-800">
            Early Access
          </h1>
          <p className="text-lg text-slate-500 mb-10 font-medium">
            We're currently letting in new members slowly to ensure the highest quality matches. Join the waitlist to secure your spot now.
          </p>

          <form className="flex flex-col gap-4 max-w-sm mx-auto relative z-10" onSubmit={e => { e.preventDefault(); router.push('/waitlist-success'); }}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#F75EBD] focus:ring-1 focus:ring-[#F75EBD] transition-all shadow-sm"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#F75EBD] focus:ring-1 focus:ring-[#F75EBD] transition-all shadow-sm"
              required
            />
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold leading-none mt-px">@</span>
              <input
                type="text"
                placeholder="instagram_handle"
                className="w-full pl-9 pr-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#F75EBD] focus:ring-1 focus:ring-[#F75EBD] transition-all shadow-sm"
                required
              />
            </div>
            <button type="submit" className="w-full px-8 py-4 mt-2 rounded-2xl bg-gradient-to-r from-[#F75EBD] to-[#FF69FF] text-white font-bold text-lg hover:shadow-xl hover:shadow-[#F75EBD]/30 transition-all hover:-translate-y-0.5 active:scale-95 group flex items-center justify-center gap-2">
              Join Waitlist
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <p className="text-sm text-slate-500 mt-4 font-medium text-center">
              Follow us on <a href="https://instagram.com/cupidbox.love" target="_blank" rel="noopener noreferrer" className="text-[#F75EBD] font-bold hover:underline">Instagram @cupidbox.love</a> for updates or to chat!
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
