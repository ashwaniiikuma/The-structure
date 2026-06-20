import React from 'react'

const page = () => {
  return (
    <section className=" min-h-screen w-full bg-white py-5 px-4 sm:px-6 lg:px-8 flex flex-col items-center select-none">
      
      {/* ================= ENROLLMENT HEADER ================= */}
      <div className="text-center mb-12 mt-16">
        <span className="text-[13px] font-mono tracking-[0.2em] text-[#A2231E]/80 uppercase block mb-4">
          ENROLLMENT
        </span>
        <h2 className="font-serif font-fraunces py-3 text-[35px] font-semibold text-[#1A1414]  tracking-normal">
          Start at Level One.
        </h2>
      </div>

      {/* ================= MAIN MANUAL ACCESS CARD ================= */}
      <div className="w-full max-w-md bg-[#FAFAFA] border border-stone-200 shadow-[0_4px_25px_rgba(0,0,0,0.02)] rounded-sm p-8 sm:p-12 text-center relative overflow-hidden mb-28">
        {/* Subtle Top Accent Line */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#A2231E]/40 to-transparent" />

        <span className="text-[10px] font-mono tracking-[0.25em] text-[#A2231E] uppercase font-bold block mb-6">
          FULL MANUAL ACCESS
        </span>

        {/* Pricing Layout */}
        <div className="flex items-baseline justify-center gap-3 mb-10">
          <span className="font-serif font-Fraunces text-5xl sm:text-6xl font-bold text-[#1A1414]">$297</span>
          <span className="font-serif text-lg text-stone-400 line-through tracking-tight">$497</span>
        </div>

        {/* Features List */}
        <div className="text-left max-w-xs mx-auto space-y-2 mb-10">
          <div className="flex items-start gap-3 text-[16px] sm:text-[15px] text-stone-700 font-sans">
            <span className="text-[#A2231E] mt-[2px]">—</span>
            <p>All 6 levels, unlocked in sequence</p>
          </div>
          <div className="flex items-start gap-3 text-[16px] sm:text-[15px] text-stone-700 font-sans">
            <span className="text-[#A2231E] mt-[2px]">—</span>
            <p>Lifetime access — no recurring fee</p>
          </div>
          <div className="flex items-start gap-3 text-[16px] sm:text-[15px] text-stone-700 font-sans">
            <span className="text-[#A2231E] mt-[2px]">—</span>
            <p>Direct Q&A access</p>
          </div>
          <div className="flex items-start gap-3 text-[16px] sm:text-[15px] text-stone-700 font-sans">
            <span className="text-[#A2231E] mt-[2px]">—</span>
            <p>Private community of members</p>
          </div>
          <div className="flex items-start gap-3 text-[16px] sm:text-[15px] text-stone-700 font-sans">
            <span className="text-[#A2231E] mt-[2px]">—</span>
            <p>Free updates as new lessons are added</p>
          </div>
        </div>

        {/* Action Button */}
       <button className="w-full bg-[#B91C1C] hover:bg-[#9A1616] text-white font-mono text-[12px] font-bold tracking-[0.2em] uppercase py-4 px-6 rounded-sm mb-6 transition-all duration-500 ease-out transform hover:-translate-y-1 hover:shadow-xl active:scale-98 animate-fade-in-up">
  BEGIN LEVEL ONE
</button>

        {/* Disclaimer note under button */}
        <p className="text-[14px] font-mono   text-[#A2231E]/80 max-w-md mx-auto leading-relaxed  tracking-normal">
          One-time payment. Price increases as new cohorts open.
        </p>
      </div>

      {/* ================= CLEAN MINIMALIST FOOTER ================= */}
      <footer className="w-full max-w-3xl text-center border-t border-stone-200/60 pt-12 px-4">
        <h4 className="font-serif text-lg font-bold tracking-wide mb-3 text-stone-900 uppercase">
          THE<span className="text-[#B91C1C]">STANDARD</span>
        </h4>
        <p className="text-[14px] text-stone-600 leading-relaxed font-sans max-w-lg mx-auto">
          Educational content only. Results depend on individual effort and circumstance. This program does not guarantee outcomes.
        </p>
      </footer>

    </section>
  )
}

export default page
