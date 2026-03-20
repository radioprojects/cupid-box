import React from 'react';
import Link from 'next/link';

export default function WaitlistSuccess() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-pink-200 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#F75EBD]/[0.06] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#FF69FF]/[0.05] blur-[120px]" />
      </div>

      <main className="relative z-10 p-6 w-full max-w-2xl text-center">
        <div className="bg-white/80 backdrop-blur-md rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-bl from-[#F75EBD]/10 to-transparent pointer-events-none rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-[#FF69FF]/10 to-transparent pointer-events-none rounded-tr-full" />

          {/* Success Icon */}
          <div className="mx-auto w-24 h-24 mb-10 rounded-full bg-gradient-to-br from-[#F75EBD] to-[#FF69FF] flex items-center justify-center text-white shadow-lg shadow-[#F75EBD]/30 animate-bounce-gentle">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-slate-800">
            You're on the list!
          </h1>
          
          <p className="text-xl text-slate-600 mb-6 font-medium leading-relaxed">
            Congratulations on taking the first step. We'll contact you soon as we open up more spots.
          </p>

          <div className="bg-slate-50 rounded-2xl p-6 mb-10 border border-slate-100 shadow-sm">
            <p className="text-slate-600 font-medium">
              Want to stay in the loop? Follow us on Instagram <a href="https://instagram.com/cupidbox.love" target="_blank" rel="noopener noreferrer" className="text-[#F75EBD] font-bold hover:underline">@cupidbox.love</a> for future updates. You can also chat with us there!
            </p>
          </div>

          <Link href="/" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-800 font-bold text-lg hover:border-[#F75EBD] hover:bg-[#F75EBD]/5 transition-all shadow-sm group/btn">
            <span className="group-hover/btn:-translate-x-1 transition-transform">←</span>
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
