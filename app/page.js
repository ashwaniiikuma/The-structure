import Image from "next/image";

export default function Home(){

    return(
      <>
     <section className="relative w-full min-h-screen bg-[#FAFAFA] pt-38 pb-16 px-6 md:px-10 flex flex-col items-center">
  
  {/* 1. TOP SUB-LABEL */}
  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,800;1,800&display=swap');
    .custom-editorial-font {
      font-family: 'Playfair Display', Georgia, serif;
    }
  `}} />

  <div className="text-[11px] font-mono tracking-[0.4em] text-[#A2231E] uppercase mb-8 text-center font-normal">
    — CHAPTER ZERO – BEGIN HERE —
  </div>

  {/* 2. MAIN PREMIUM TYPOGRAPHY HEADING */}
  <h1 className="custom-editorial-font text-4xl sm:text-6xl md:text-6xl lg:text-[70px]  font-normal tracking-tight text-stone-950 text-center leading-[1.05] max-w-5xl select-none">
    She walks in already armed. <br />
    <span className="text-[#A2231E] italic font-normal block mt-2 tracking-wide">
      Build yours.
    </span>
  </h1>

  {/* 3. PARAGRAPH BRIEF DESCRIPTION */}
  <p className="text-stone-500 text-center text-lg md:text-1xl max-w-2xl mx-auto mt-10 leading-relaxed tracking-tight font-sans px-13">
    Not tactics. Not lines. A structured path to the kind of presence, 
    conversation, and self-respect that can't be faked — built level by 
    level, starting from wherever you are now.
  </p>

  {/* ================= VIDEO BRIEFING CONTAINER ================= */}
  <div className="w-full max-w-3xl mx-auto mt-20 px-2 sm:px-4">
    {/* Video Meta Tags Header */}
<style dangerouslySetInnerHTML={{__html: `
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
  .sharp-military-font {
    font-family: 'Share Tech Mono', monospace;
  }
`}} />

    <div className="flex justify-between sharp-military-font items-center  text-[12px] tracking-[0.12em] text-[#A2231E] uppercase mb-4 px-1">
      <div>FILE_001 — ORIENTATION</div>
      <div>RUNTIME 00:42</div>
    </div>
    
    {/* Main Video Box with exact overlay mask effect */}
    <div className="relative aspect-video w-full bg-[#f9ecec] border border-stone-200/80 rounded-sm flex items-center justify-center overflow-hidden shadow-sm group cursor-pointer">
      
      {/* Classified Tag Overlay */}
      <div className="absolute top-4 left-4 border sharp-military-font border-[#7A1414] text-[#7A1414] text-[9.5px] font-mono tracking-[0.16em] uppercase px-2.5 py-1 bg-white/90 backdrop-blur-sm z-10">
        CLASSIFIED — OPEN ON UNLOCK
      </div>
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[percent:42%] via-white/70 to-transparent opacity-80 pointer-events-none mix-blend-overlay transform scale-150 rotate-6" />

      {/* Red Play Button Circle */}
      <button className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#A2231E] bg-[#f8f2f2] easy-in-out text-[#A2231E] flex items-center justify-center shadow-md transform group-hover:scale-105 hover:smooth  transition-all duration-300 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 translate-x-0.5">
          <path d="M5 3l16 9-16 9V3z" />
        </svg>
      </button>

      {/* Subtle Linear Light Diagonal Stripe to replicate image glare */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
    </div>

    {/* Video Caption Footer */}
    <div className="mt-4 sharp-military-font font-mono text-[12px] tracking-wide text-stone-700 text-left px-1">
      Opening briefing — what this manual is, and who it's for.
    </div>

    {/* Elegant Centered Scroll Pointer Down */}
    <div className="text-center mt-16 font-mono text-[11px] tracking-[0.3em] text-[#964A4A] uppercase select-none">
      READ THE BRIEF 
      <div className="w-[1px] h-12 bg-gradient-to-b  from-[#A2231E] via-[#964A4A] to-transparent animate-pulse  mx-auto mt-4 transition-all duration-200 group-hover:h-14"></div>
    </div>

  </div>

  
</section>

<section className="w-full bg-[#FAFAFA] py-24 px-6 md:px-5 flex flex-col items-center border-t border-stone-200/70">
  
  {/* 1. SECTION LABEL */}
  <div className="text-[14px] font-mono tracking-[0.2em] text-[#A2231E] uppercase mb-6 text-center font-medium select-none">
    BEFORE WE START
  </div>

  {/* 2. CORE STATEMENT HEADING */}
  <h2 className="font-fraunces  font-serif text-3xl sm:text-3xl md:text-[40px] font-semibold -tracking-normal text-stone-950 text-center leading-tight mb-18 select-none">
    Be honest with yourself.
  </h2>

  {/* 3. REFLECTION POINTERS LIST CONTAINER */}
  <div className="w-full max-w-3xl mx-auto flex flex-col">
    
    {/* ROW I */}
    <div className="grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr] items-start py-6 border-b border-t border-stone-200/70">
      <div className="text-[#A2231E] italic font-serif text-lg font-medium select-none md:text-xl">i.</div>
      <p className="text-[#1A1414] text-[15px] md:text-[17.5px] leading-relaxed font-sans tracking-normal">
        You freeze the moment a conversation matters — with someone you're actually <span className="text-[#A2231E] font-medium">attracted to</span>, not just making small talk.
      </p>
    </div>

    {/* ROW II */}
    <div className="grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr] items-start py-6 border-b border-stone-200/70">
      <div className="text-[#A2231E] italic font-serif text-lg font-medium select-none md:text-xl">ii.</div>
      <p className="text-[#1A1414] text-[15px] md:text-[17.5px] leading-relaxed font-sans tracking-normal">
        You've read the advice. Watched the videos. None of it <span className="text-[#A2231E] font-medium">holds up</span> in the actual moment.
      </p>
    </div>

    {/* ROW III */}
    <div className="grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr] items-start py-6 border-b border-stone-200/70">
      <div className="text-[#A2231E] italic font-serif text-lg font-medium select-none md:text-xl">iii.</div>
      <p className="text-[#1A1414] text-[15px] md:text-[17.5px] leading-relaxed font-sans tracking-normal">
        Rejection doesn't just sting — it <span className="text-[#A2231E] font-medium">derails you</span> for days.
      </p>
    </div>

    {/* ROW IV */}
    <div className="grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr] items-start py-6 border-b border-stone-200/70">
      <div className="text-[#A2231E] italic font-serif text-lg font-medium select-none md:text-xl">iv.</div>
      <p className="text-[#1A1414] text-[15px] md:text-[17.5px] leading-relaxed font-sans tracking-normal">
        You want a structured way to build this skill — not <span className="text-[#A2231E] font-medium">random tips</span> with no order to them.
      </p>
    </div>

    {/* ROW V */}
    <div className="grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr] items-start py-6 border-b border-stone-200/70">
      <div className="text-[#A2231E] italic font-serif text-lg font-medium select-none md:text-xl">v.</div>
      <p className="text-[#1A1414] text-[15px] md:text-[17.5px] leading-relaxed font-sans tracking-normal">
        You're not looking for tricks. You want to actually become someone <span className="text-[#A2231E] font-medium">worth knowing</span>.
      </p>
    </div>

  </div>
</section>

{/* ================= SECTION 3: THE REFRAME SPLIT GRID ================= */}
<section className="w-full bg-white py-28 px-5 md:px-12 lg:px-24 border-t border-stone-300/30">
  <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-start">
    
    {/* 👈 LEFT SIDE COLUMN: CONCEPT VISUAL + QUOTE STATEMENT */}
    <div className="flex flex-col w-full">
      {/* Editorial Minimalist Box Minimal Mask Container */}
      <div className="w-full aspect-[4/5] sm:aspect-[1.1/1.2] lg:aspect-[4/4.8] bg-[#F7F2F0]  shadow-sm border border-stone-300 flex items-center justify-center relative overflow-hidden mb-8">
        <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/5 py-10 via-transparent to-transparent pointer-events-none" />
        {/* Placeholder if you insert internal asset image block later */}
      <div className="' font-serif text-stone-950 font-black italic text-xl md:text-[18px] leading-relaxed max-w-md pr-4 mt-60 md:mt-100  tracking-wide select-none">
        "Confidence that has to perform isn't confidence. It's a costume. This is about what's underneath it."
      </div>
      </div>

      {/* Italic Highlight Accent Quote Box */}
      
    </div>

    {/* 👉 RIGHT SIDE COLUMN: EDITORIAL CONTENT GRID */}
    <div className="flex flex-col justify-start lg:pt-20">
      
      {/* Small Dynamic Meta Tag Label */}
      <div className="text-[12px] font-mono tracking-[0.33em] text-[#A2231E] uppercase mb-5 font-normal select-none">
        THE REFRAME
      </div>

      {/* Main Bold Accent Header Statement */}
<h2 
  className="font-fraunces font-serif text-3xl sm:text-4xl lg:text-[33px] tracking-wide text-[#1A1414] mb-10 select-none max-w-lg" 
  style={{ fontWeight: 550, leading: '1.05', lineHeight: '1.3' }}
>
  
        This isn't about outsmarting anyone.
      </h2>

      {/* Editorial Description Section Wrapper */}
      <div className="space-y-5 font-sans text-[13px] md:text-[17px] text-stone-600 leading-relaxed tracking-medium max-w-xl">
        <p>
          Most advice in this space teaches you to treat people like puzzles — lines to deploy, tests to pass, reactions to engineer. It might work for a night. It doesn't hold up, because <span className="text-stone-950 font-semibold">it's not actually you.</span>
        </p>

        <p>
          The Standard is built differently. Every level trains a real skill — presence, conversation, reading a room, handling rejection — the same way you'd train a lift: progressively, with technique, until it's load-bearing.
        </p>

        <p className="pt-4 text-stone-950">
          No script to memorize. <span className="font-semibold">Just less to fake.</span>
        </p>
      </div>

    </div>

  </div>
</section>

{/* ================= SECTION 4: THE STRUCTURE (DYNAMIC ILLUMINATION FLOW) ================= */}
<section className="w-full bg-white text-stone-900 py-28 px-4 sm:px-6 md:px-12 border-t border-stone-300/20 relative overflow-hidden">
  
  {/* ✨ COOLEST GRADIENT BACKGROUND LAYER ✨
    Yeh background layer level 03 ke paas exact dark strip zone banayegi aur upar-niche white rakhegi.
  */}
<div 
  className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.98] z-30"
  style={{
    background: 'linear-gradient(to bottom, #FFFFFF 0%, #F9F9F9 2%, #D0D0D0 10%, #8A8A8A 25%, #121212 45%, #121212 46%, #8A8A8A 62%, #D0D0D0 75%, #D0D0D0 82%, #FFFFFF 95%, #FFFFFF 100%)'
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

    {/* ================= LEVELS SYSTEM TABLE STACK ================= */}
    <div className="w-full max-w-4xl  bg-[#FBF6F4]/50  backdrop-blur-md rounded-sm divide-y divide-stone-200 mb-28 shadow-sm">
      
      {/* LEVEL 01 - UNLOCKED */}
      <div className="p-6 sm:p-8 grid grid-cols-[50px_1fr]  hover:bg-amber-50 border hover:border-yellow-400 md:grid-cols-[80px_1fr_140px] gap-4 items-center bg-white/40">
        <div className="flex flex-col items-center justify-center font-mono">
          <span className="text-[#B91C1C] text-lg font-bold tracking-wider">01</span>
        </div>
        <div className="pr-4">
          <h3 className="text-lg md:text-xl font-serif text-[#1A1414] mb-1 font-bold select-none">Foundations</h3>
          <p className="text-stone-500 text-[14px] md:text-[15px] leading-relaxed font-sans max-w-xl">
            Body language, posture, eye contact, the baseline conversational habits that signal calm before you say a word.
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 flex justify-start md:justify-end pt-2 md:pt-0">
          <span className="text-[10px] font-mono tracking-[0.15em] border border-[#A2231E] text-[#A2231E] px-4 py-1.5 rounded-sm uppercase bg-[#A2231E]/5 select-none font-medium">
            UNLOCKED
          </span>
        </div>
      </div>

      {/* LEVEL 02 - LOCKED (STARTS RECEIVING GENTLE SHADOW) */}
      <div className="p-6 sm:p-8 grid grid-cols-[50px_1fr] md:grid-cols-[80px_1fr_140px] hover:bg-amber-50 border hover:border-yellow-200 gap-4 items-center bg-transparent mix-blend-darken">
        <div className="flex flex-col items-center justify-center font-mono opacity-80">
          <span className="text-[#B91C1C] text-lg font-bold tracking-wider">02</span>
        </div>
        <div className="pr-4 opacity-80">
          <h3 className="text-lg md:text-xl  font-serif text-[#1A1414] mb-1 font-bold select-none">Approach & Conversation</h3>
          <p className="text-stone-600 text-[14px] md:text-[15px] leading-relaxed font-sans max-w-xl">
            Starting a conversation without a script. Reading real interest versus politeness. Handling silence without panic.
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 flex justify-start md:justify-end pt-2 md:pt-0 opacity-80">
          <span className="text-[10px] font-mono tracking-[0.15em] border border-stone-800 text-[#9C4A4A] px-4 py-1.5 rounded-sm uppercase select-none font-medium">
            LOCKED
          </span>
        </div>
      </div>

      {/* LEVEL 03 - THE MAX DARK CENTER STRIP ZONING (HIGH CONTRAST WHITE TEXT ON INVERT GRID) */}
      <div className="p-6 sm:p-8 grid grid-cols-[50px_1fr] md:grid-cols-[60px_1fr_140px] hover:bg-amber-50 gap-4 border hover:border-yellow-400 items-center   backdrop-blur-sm">
       <div className="flex flex-col items-center justify-center font-mono relative z-30">
        <span className="text-[#B91C1C] text-lg font-bold tracking-wider">03</span>
      </div>

      {/* Description Text - Brought to front layer */}
      <div className="pr-4 relative z-30">
        <h3 className="text-lg md:text-xl font-serif text-[1A1414] mb-1 font-bold select-none">
          Building Connection
        </h3>
        <p className="text-[#6B5F5D] text-[14px] md:text-[15px] leading-relaxed font-sans max-w-xl opacity-95">
          Moving past small talk. Storytelling, humor, genuine curiosity, and the emotional range most men never train.
        </p>
      </div>

      {/* Status Badge - Brought to front layer */}
      <div className="col-span-2 md:col-span-1 flex justify-start md:justify-end pt-2 md:pt-0 relative z-30">
  <span className="text-[10px] font-mono tracking-[0.2em] border border-slate-600 text-[#C15A5A] px-4 py-1.5 rounded-[2px] uppercase bg-white/10 select-none font-bold shadow-[0_0_10px_rgba(255,255,255,0.08)] transition-all duration-300">
    LOCKED
  </span>
</div>
    </div>
      

      {/* LEVEL 04 - LOCKED (EXITING THE SHADOW GRADIENT) */}
      <div className="p-6 sm:p-8 grid grid-cols-[50px_1fr] md:grid-cols-[80px_1fr_140px] hover:bg-amber-50 gap-4 border hover:border-yellow-400 items-center bg-transparent">
        <div className="flex flex-col items-center justify-center font-mono opacity-80">
          <span className="text-[#B91C1C] text-lg font-bold tracking-wider">04</span>
        </div>
        <div className="pr-4 opacity-80">
          <h3 className="text-lg md:text-xl font-serif text-[#1A1414] mb-1 font-bold select-none">Dating & Texting</h3>
          <p className="text-stone-600 text-[14px] md:text-[15px] leading-relaxed font-sans max-w-xl">
            Planning dates that don't feel like interviews. Texting with intention instead of anxiety. Reading the room on pacing.
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 flex justify-start md:justify-end pt-2 md:pt-0 opacity-80">
          <span className="text-[10px] font-mono tracking-[0.15em] border border-stone-600  text-[#9C4A4A] px-4 py-1.5 rounded-sm uppercase select-none font-medium">
            LOCKED
          </span>
        </div>
      </div>

      {/* LEVEL 05 - LOCKED (PURE LIGHT BASELINE RE-ENTRY) */}
      <div className="p-6 sm:p-8 grid grid-cols-[50px_1fr] md:grid-cols-[80px_1fr_140px] hover:bg-amber-50 border hover:border-yellow-200 gap-4 items-center bg-white/40">
        <div className="flex flex-col items-center justify-center font-mono opacity-70">
<span className="text-[#A2231E] text-lg font-bold tracking-wider opacity-90 select-none">
  03
</span>
        </div>
        <div className="pr-4 opacity-70">
          <h3 className="text-lg md:text-xl font-serif text-[1A1414] mb-1 font-bold select-none">Relationships</h3>
          <p className="text-stone-600 text-[14px] md:text-[15px] leading-relaxed font-sans max-w-xl">
            Communication under real stakes. Conflict without collapse or control. Staying independent inside a partnership.
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 flex justify-start md:justify-end pt-2 md:pt-0 opacity-70">
          <span className="text-[10px] font-mono tracking-[0.15em] border border-stone-800 text-[#9C4A4A] px-4 py-1.5 rounded-sm uppercase select-none font-medium">
            LOCKED
          </span>
        </div>
      </div>

      {/* LEVEL 06 - LOCKED */}
      {/* ================= LEVEL 06: CLEAN STANDARDIZED MUTE ROW ================= */}
      <div className="p-6 sm:p-8 grid grid-cols-[50px_1fr] md:grid-cols-[80px_1fr_140px] hover:bg-amber-50  hover:border-yellow-100 shadow-amber-200 gap-4 items-center bg-transparent mix-blend-darken">
  
  {/* Left Side Numbering (Halka faded look texture matching the bottom layer) */}
  <div className="flex flex-col items-center justify-center font-mono opacity-60 relative z-30">
    <span className="text-[#B91C1C] text-lg font-bold tracking-wider select-none">06</span>
  </div>

  {/* Center Text Details */}
  <div className="pr-4 opacity-[0.65] relative z-30">
    <h3 className="text-lg md:text-xl font-serif text-[#1A1414] mb-1 font-bold select-none">
      Identity & Mindset
    </h3>
    <p className="text-stone-600 text-[14px] md:text-[14.5px] leading-relaxed font-sans max-w-xl select-none">
      Self-respect that doesn't depend on outcomes. Handling rejection clean. Becoming interesting instead of performing it.
    </p>
  </div>

  {/* Right Side Status Badge Box */}
  <div className="col-span-2 md:col-span-1 flex justify-start md:justify-end pt-2 md:pt-0 opacity-60 relative z-30">
    <span className="text-[10px] font-mono tracking-[0.18em] border border-stone-800 text-[#9C4A4A] px-4 py-1.5 rounded-[2px] uppercase select-none font-medium bg-white/5">
      LOCKED
    </span>
  </div>

</div>

    </div>

    {/* ================= BOTTOM FEATURE STATS GRID (COMPLETELY LIGHT WHITE SURFACE AS PER IMAGE 3) ================= */}
    <div className="w-full max-w-5xl bg-white text-stone-950 py-16 px-4 border-t border-b border-stone-200/60 mt-4">
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

<section className="w-full bg-white py-5 px-4 sm:px-6 lg:px-8 flex flex-col items-center select-none">
      
      {/* ================= ENROLLMENT HEADER ================= */}
      <div className="text-center mb-12">
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

</>

    )
}