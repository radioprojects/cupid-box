import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-rose-200">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-rose-300/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-pink-300/20 blur-[100px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-purple-300/20 blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-rose-500/20 transform rotate-[-5deg] hover:rotate-0 transition-transform cursor-pointer">
              C
            </div>
            <span className="font-extrabold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
              CupidBox
            </span>
          </div>
          <button className="hidden sm:block px-7 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20">
            Sign In
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col items-center text-center mt-12 md:mt-24">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-100/60 text-rose-700 font-semibold text-sm mb-10 shadow-sm border border-rose-200/50 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
              </span>
              Now accepting early access members
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
              Love is blind. <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 inline-block pb-2">
                We make the intro.
              </span>
            </h1>
            
            <p className="max-w-2xl text-xl text-slate-600 mb-14 leading-relaxed font-medium">
              CupidBox takes the guesswork out of modern dating. Answer a few questions, and our human matchmakers will set you up on a curated blind date. No swiping, just genuine connections.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 w-full justify-center max-w-md">
              <button className="flex-1 px-8 py-4.5 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-rose-500/40 hover:-translate-y-1 transition-all duration-300">
                Get Matched
              </button>
              <button className="flex-1 px-8 py-4.5 rounded-2xl bg-white border border-slate-200 text-slate-800 font-bold text-lg hover:border-rose-300 hover:bg-rose-50 shadow-sm transition-all duration-300 group flex items-center justify-center gap-2">
                How it Works 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
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
                )
              },
              { 
                title: "Hand-Picked Matches", 
                desc: "Every single match is curated by our dedicated matchmaking team to ensure highest compatibility.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              { 
                title: "Planned For You", 
                desc: "We pick the perfect spot, you just show up. Enjoy a completely effortless first date experience.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )
              }
            ].map((feature, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white/80 backdrop-blur-md border border-slate-100 shadow-xl shadow-slate-200/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-100/50 transition-all duration-300">
                <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-50 flex items-center justify-center text-rose-500 shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-32 flex justify-center">
            <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 border border-slate-800 w-full max-w-4xl p-12 md:p-20 text-center">
              <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-rose-500/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-[40%] h-full bg-gradient-to-r from-blue-500/20 to-transparent pointer-events-none"></div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 relative z-10 tracking-tight">Ready to find your person?</h2>
              <p className="text-slate-400 text-xl max-w-xl mx-auto mb-10 relative z-10">Join our exclusive waitlist today and be among the first to experience CupidBox.</p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto relative z-10">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors"
                  required
                />
                <button type="submit" className="px-8 py-4 rounded-2xl bg-rose-500 text-white font-bold hover:bg-rose-600 transition-colors shadow-lg shadow-rose-500/20">
                  Join Waitlist
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 bg-white/50 backdrop-blur-md relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-sm">
              C
            </div>
            <span className="font-bold text-slate-900">CupidBox</span>
          </div>
          <div className="text-slate-500 font-medium text-sm text-center md:text-left">
            © {new Date().getFullYear()} CupidBox. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-rose-500 transition-colors">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-rose-500 transition-colors">Instagram</a>
            <a href="#" className="text-slate-400 hover:text-rose-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
