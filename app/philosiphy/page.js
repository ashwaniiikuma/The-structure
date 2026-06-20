import React from 'react'

const page = () => {
  return (
    <>
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

    </>
  )
}

export default page
