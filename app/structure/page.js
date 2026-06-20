"use client"
import React, { useState } from 'react'

export default function StructurePage() {
    const [hoveredRow, setHoveredRow] = useState(null)

    const levelsData = [
    { id: 1, num: "01", title: "Foundations", desc: "Body language, posture, eye contact, the baseline conversational habits that signal calm before you say a word.", status: "UNLOCKED", isActive: true },
    { id: 2, num: "02", title: "Approach & Conversation", desc: "Starting a conversation without a script. Reading real interest versus politeness. Handling silence without panic.", status: "LOCKED", isActive: false },
    { id: 3, num: "03", title: "Building Connection", desc: "Moving past small talk. Storytelling, humor, genuine curiosity, and the emotional range most men never train.", status: "LOCKED", isActive: false },
    { id: 4, num: "04", title: "Dating & Texting", desc: "Planning dates that don't feel like interviews. Texting with intention instead of anxiety. Reading the room on pacing.", status: "LOCKED", isActive: false },
    { id: 5, num: "05", title: "Relationships", desc: "Communication under real stakes. Conflict without collapse or control. Staying independent inside a partnership.", status: "LOCKED", isActive: false },
    { id: 6, num: "06", title: "Identity & Mindset", desc: "Self-respect that doesn't depend on outcomes. Handling rejection clean. Becoming interesting instead of performing it.", status: "LOCKED", isActive: false }
  ];
    
  return (
    <div>
     <section className="min-h-screen w-full bg-white text-stone-900 py-28 px-4 sm:px-6 md:px-12 border-t border-stone-300/20 relative overflow-hidden">
  
  
<div 
  className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.98] z-30"
  style={{
    background: 'linear-gradient(to bottom, #FFFFFF 0%, #F9F9F9 2%, #D0D0D0 10%, #8A8A8A 25%, #121212 45%, #121212 46%, #8A8A8A 62%, #D0D0D0 75%, #D0D0D0 82%, #FFFFFF 95%,  #FFFFFF 100%)'
  }}
/>

{/* <div 
  className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.98]"
  style={{
    background: 'linear-gradient(to bottom, #FFFFFF 0%, #F9F9F9 2%, #D0D0D0 10%, #8A8A8A 25%, #121212 48%, #121212 49%, #8A8A8A 62%, #D0D0D0 78%, #D0D0D0 88%, #F9F9F9 97%, #FFFFFF 100%)'
  }}
/> */}

  {/* Content Layer Wrapper */}
  <div className="relative z-10 w-full flex flex-col items-center">
    
    {/* Header Metadata */}
    <div className="text-[15px] font-mono tracking-[0.2em] text-[#A2231E] uppercase mb-6 text-center select-none">
      THE STRUCTURE
    </div>

    <h2 className="font-serif text-4xl sm:text-5xl md:text-[40px] tracking-tight text-center leading-tight mb-6 text-stone-950 font-bold max-w-3xl mx-auto select-none">
      Six levels. Unlocked in order.
    </h2>

    <p className="text-stone-500 text-center text-base md:text-lg max-w-2xl mx-auto mb-20 leading-relaxed font-sans px-4 select-none">
      Each level opens only once the one before it is complete. No skipping ahead — the foundation has to hold before the next floor goes on.
    </p>

   <div 
              onMouseEnter={() => setHoveredRow(1)}
              onMouseLeave={() => setHoveredRow(null)}
              className="p-6 sm:p-8 grid grid-cols-[50px_1fr] md:grid-cols-[80px_1fr_140px] gap-4 items-center bg-white/60 transition-all duration-300 relative group cursor-pointer border border-transparent hover:border-[#B91C1C]"
              style={{ backgroundColor: hoveredRow === 1 ? 'rgba(245, 158, 11, 0.04)' : 'rgba(255, 255, 255, 0.6)' }}
            >
              <div className="flex flex-col items-center justify-center font-mono transition-transform duration-300 group-hover:scale-110">
                <span className="text-[#B91C1C] text-lg font-bold tracking-wider">01</span>
              </div>
              <div className="pr-4">
                <h3 className="text-lg md:text-xl font-serif text-[#1A1414] mb-1 font-bold select-none group-hover:text-stone-950 transition-colors">
                  Foundations
                </h3>
                <p className="text-stone-500 text-[14px] md:text-[15px] leading-relaxed font-sans max-w-xl transition-all duration-300 group-hover:text-stone-700">
                  Body language, posture, eye contact, the baseline conversational habits that signal calm before you say a word.
                </p>
              </div>
              <div className="col-span-2 md:col-span-1 flex justify-start md:justify-end pt-2 md:pt-0">
                <span className="text-[10px] font-mono tracking-[0.15em] border border-[#A2231E] text-[#A2231E] px-4 py-1.5 rounded-sm uppercase bg-[#A2231E]/5 select-none font-bold shadow-[0_0_8px_rgba(185,28,28,0.05)] animate-pulse">
                  UNLOCKED
                </span>
              </div>
            </div>

            {/* LEVEL 02 - LOCKED */}
            <div 
              onMouseEnter={() => setHoveredRow(2)}
              onMouseLeave={() => setHoveredRow(null)}
              className="p-6 sm:p-8 grid grid-cols-[50px_1fr] md:grid-cols-[80px_1fr_140px] gap-4 items-center bg-transparent transition-all duration-300 group cursor-pointer border border-transparent hover:border-amber-500"
              style={{ backgroundColor: hoveredRow === 2 ? 'rgba(245, 158, 11, 0.04)' : 'transparent' }}
            >
              <div className="flex flex-col items-center justify-center font-mono opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
                <span className="text-[#B91C1C] text-lg font-bold tracking-wider">02</span>
              </div>
              <div className="pr-4 opacity-80 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-lg md:text-xl font-serif text-[#1A1414] mb-1 font-bold select-none">Approach & Conversation</h3>
                <p className="text-stone-600 text-[14px] md:text-[15px] leading-relaxed font-sans max-w-xl">
                  Starting a conversation without a script. Reading real interest versus politeness. Handling silence without panic.
                </p>
              </div>
              <div className="col-span-2 md:col-span-1 flex justify-start md:justify-end pt-2 md:pt-0 transition-all duration-300">
                <span className={`text-[10px] font-mono tracking-[0.18em] px-4 py-1.5 rounded-[2px] uppercase select-none font-bold transition-all duration-300 ${
                  hoveredRow === 2 
                    ? 'border border-white text-[#FF4D4D] bg-white/15 shadow-[0_0_12px_rgba(255,255,255,0.25)] scale-[1.02]' 
                    : 'border border-stone-400/40 text-[#9C4A4A] bg-white/5 shadow-none'
                }`}>
                  LOCKED
                </span>
              </div>
            </div>

            {/* LEVEL 03 - THE MAX DARK CENTER STRIP ZONING */}
            <div 
              onMouseEnter={() => setHoveredRow(3)}
              onMouseLeave={() => setHoveredRow(null)}
              className="p-6 sm:p-8 grid grid-cols-[50px_1fr] md:grid-cols-[80px_1fr_140px] gap-4 items-center backdrop-blur-sm transition-all duration-300 group cursor-pointer border border-transparent hover:border-amber-500"
              style={{ backgroundColor: hoveredRow === 3 ? 'rgba(245, 158, 11, 0.04)' : 'transparent' }}
            >
              <div className="flex flex-col items-center justify-center font-mono relative z-30 transition-all duration-300 group-hover:scale-105">
                <span className="text-[#B91C1C] text-lg font-bold tracking-wider">03</span>
              </div>
              <div className="pr-4 relative z-30 opacity-90 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-lg md:text-xl font-serif text-[#1A1414] mb-1 font-bold select-none">
                  Building Connection
                </h3>
                <p className="text-[#6B5F5D] text-[14px] md:text-[15px] leading-relaxed font-sans max-w-xl">
                  Moving past small talk. Storytelling, humor, genuine curiosity, and the emotional range most men never train.
                </p>
              </div>
              <div className="col-span-2 md:col-span-1 flex justify-start md:justify-end pt-2 md:pt-0 relative z-30 transition-all duration-300">
                <span className={`text-[10px] font-mono tracking-[0.18em] px-4 py-1.5 rounded-[2px] uppercase select-none font-bold transition-all duration-300 ${
                  hoveredRow === 3 
                    ? 'border border-white text-[#FF4D4D] bg-white/15 shadow-[0_0_12px_rgba(255,255,255,0.25)] scale-[1.02]' 
                    : 'border border-stone-400/40 text-[#9C4A4A] bg-white/5 shadow-none'
                }`}>
                  LOCKED
                </span>
              </div>
            </div>

            {/* LEVEL 04 - LOCKED */}
            <div 
              onMouseEnter={() => setHoveredRow(4)}
              onMouseLeave={() => setHoveredRow(null)}
              className="p-6 sm:p-8 grid grid-cols-[50px_1fr] md:grid-cols-[80px_1fr_140px] gap-4 items-center bg-transparent transition-all duration-300 group cursor-pointer border border-transparent hover:border-amber-500"
              style={{ backgroundColor: hoveredRow === 4 ? 'rgba(245, 158, 11, 0.04)' : 'transparent' }}
            >
              <div className="flex flex-col items-center justify-center font-mono opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
                <span className="text-[#B91C1C] text-lg font-bold tracking-wider">04</span>
              </div>
              <div className="pr-4 opacity-80 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-lg md:text-xl font-serif text-[#1A1414] mb-1 font-bold select-none">Dating & Texting</h3>
                <p className="text-stone-600 text-[14px] md:text-[15px] leading-relaxed font-sans max-w-xl">
                  Planning dates that don't feel like interviews. Texting with intention instead of anxiety. Reading the room on pacing.
                </p>
              </div>
              <div className="col-span-2 md:col-span-1 flex justify-start md:justify-end pt-2 md:pt-0 transition-all duration-300">
                <span className={`text-[10px] font-mono tracking-[0.18em] px-4 py-1.5 rounded-[2px] uppercase select-none font-bold transition-all duration-300 ${
                  hoveredRow === 4 
                    ? 'border border-white text-[#FF4D4D] bg-white/15 shadow-[0_0_12px_rgba(255,255,255,0.25)] scale-[1.02]' 
                    : 'border border-stone-400/40 text-[#9C4A4A] bg-white/5 shadow-none'
                }`}>
                  LOCKED
                </span>
              </div>
            </div>

            {/* LEVEL 05 - LOCKED */}
            <div 
              onMouseEnter={() => setHoveredRow(5)}
              onMouseLeave={() => setHoveredRow(null)}
              className="p-6 sm:p-8 grid grid-cols-[50px_1fr] md:grid-cols-[80px_1fr_140px] gap-4 items-center bg-white/40 transition-all duration-300 group cursor-pointer border border-transparent hover:border-amber-500"
              style={{ backgroundColor: hoveredRow === 5 ? 'rgba(245, 158, 11, 0.04)' : 'rgba(255, 255, 255, 0.4)' }}
            >
              <div className="flex flex-col items-center justify-center font-mono opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
                <span className="text-[#B91C1C] text-lg font-bold tracking-wider">05</span>
              </div>
              <div className="pr-4 opacity-70 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-lg md:text-xl font-serif text-[1A1414] mb-1 font-bold select-none">Relationships</h3>
                <p className="text-stone-600 text-[14px] md:text-[15px] leading-relaxed font-sans max-w-xl">
                  Communication under real stakes. Conflict without collapse or control. Staying independent inside a partnership.
                </p>
              </div>
              <div className="col-span-2 md:col-span-1 flex justify-start md:justify-end pt-2 md:pt-0 transition-all duration-300">
                <span className={`text-[10px] font-mono tracking-[0.18em] px-4 py-1.5 rounded-[2px] uppercase select-none font-bold transition-all duration-300 ${
                  hoveredRow === 5 
                    ? 'border border-white text-[#FF4D4D] bg-white/15 shadow-[0_0_12px_rgba(255,255,255,0.25)] scale-[1.02]' 
                    : 'border border-stone-400/40 text-[#9C4A4A] bg-white/5 shadow-none'
                }`}>
                  LOCKED
                </span>
              </div>
            </div>

            {/* LEVEL 06 - LOCKED */}
            <div 
              onMouseEnter={() => setHoveredRow(6)}
              onMouseLeave={() => setHoveredRow(null)}
              className="p-6 sm:p-8 grid grid-cols-[50px_1fr] md:grid-cols-[80px_1fr_140px] gap-4 items-center bg-transparent transition-all duration-300 group cursor-pointer border border-transparent hover:border-amber-500"
              style={{ backgroundColor: hoveredRow === 6 ? 'rgba(245, 158, 11, 0.04)' : 'transparent' }}
            >
              <div className="flex flex-col items-center justify-center font-mono opacity-60 relative z-30 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
                <span className="text-[#B91C1C] text-lg font-bold tracking-wider select-none">06</span>
              </div>
              <div className="pr-4 opacity-[0.65] relative z-30 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-lg md:text-xl font-serif text-[#1A1414] mb-1 font-bold select-none">
                  Identity & Mindset
                </h3>
                <p className="text-stone-600 text-[14px] md:text-[14.5px] leading-relaxed font-sans max-w-xl select-none">
                  Self-respect that doesn't depend on outcomes. Handling rejection clean. Becoming interesting instead of performing it.
                </p>
              </div>
              <div className="col-span-2 md:col-span-1 flex justify-start md:justify-end pt-2 md:pt-0 relative z-30 transition-all duration-300">
                <span className={`text-[10px] font-mono tracking-[0.18em] px-4 py-1.5 rounded-[2px] uppercase select-none font-bold transition-all duration-300 ${
                  hoveredRow === 6 
                    ? 'border border-white text-[#FF4D4D] bg-white/15 shadow-[0_0_12px_rgba(255,255,255,0.25)] scale-[1.02]' 
                    : 'border border-stone-400/40 text-[#9C4A4A] bg-white/5 shadow-none'
                }`}>
                  LOCKED
                </span>
              </div>
            </div>

          

    {/* ================= BOTTOM FEATURE STATS GRID (COMPLETELY LIGHT WHITE SURFACE AS PER IMAGE 3) ================= */}
    <div className="w-full max-w-5xl bg-white text-stone-950 py-10 px-4 border-t border-b border-stone-200/60 mt-30">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 divide-x-0 md:divide-x divide-stone-200">
        <div className="flex flex-col items-center justify-center text-center px-7">
          <div className="font-serif text-5xl md:text-6xl text-[#A2231E] font-normal mb-3">6</div>
          <div className="font-mono text-[10px] tracking-[0.25em] text-stone-500 uppercase">SEQUENTIAL LEVELS</div>
        </div>
        <div className="flex flex-col items-center justify-center text-center px-4">
          <div className="font-serif text-5xl md:text-6xl text-[#A2231E] font-normal mb-3">40+</div>
          <div className="font-mono text-[10px] tracking-[0.25em] text-stone-500 uppercase">STRUCTURED LESSONS</div>
        </div>
        <div className="flex flex-col items-center justify-center text-center px-4">
          <div className="font-serif text-5xl md:text-6xl text-[#A2231E] font-normal mb-3">1:1</div>
          <div className="font-mono text-[10px] tracking-[0.25em] text-stone-500 uppercase">Q&A ACCESS</div>
        </div>
        <div className="flex flex-col items-center justify-center text-center px-4">
          <div className="font-serif text-5xl md:text-6xl text-[#A2231E] font-normal mb-3 leading-none flex items-center justify-center h-[60px]">∞</div>
          <div className="font-mono text-[10px] tracking-[0.25em] text-stone-500 uppercase mt-2">LIFETIME ACCESS</div>
        </div>
      </div>
    </div>

  </div>
</section>
     </div>
  )
}

