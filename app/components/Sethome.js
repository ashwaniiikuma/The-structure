"use client"

import React from 'react';

export default function Home() {

  

 const clientReviews = [
    {
      id: 1,
      name: 'Alejandro M.',
      role: 'DWG Member',
      rating: 5,
      title: 'Absolutely transformed my profile',
      text: "Since updating my profile with the photo rules from the program, I've been getting consistent matches daily. I actually landed a amazing first date this week! This community completely changed the game for me."
    },
    {
      id: 2,
      name: 'John Doe',
      role: 'DWG Member',
      rating: 5,
      title: 'The text frameworks work like magic',
      text: "Followed the exact texting frame taught in Module 3. No more endless small talk or getting ghosted. Kept it casual, moved off the app quickly, and we have our second date lined up for Friday."
    },
    {
      id: 3,
      name: 'Ryan K.',
      role: 'DWG Member',
      rating: 5,
      title: 'Incredible confidence boost',
      text: "The mindset shifts alone are worth the investment. I used to freeze up talking to new people, but the step-by-step approach instructions made it seamless. Highly recommend this program."
    }
  ];
  return (
    <>
      {/* Client ka naya Navbar */}

      {/* Section 1: Hero Section */}
      <section className="bg-[#ffffff] text-black pt-2 md:pt-33 pb-6  md:pb-16  px-4 md:px-8 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* 1. Top Badge / Pill */}
          <div className="inline-flex items-center gap-2 bg-black text-white px-15 py-0.58 md:px-20 md:py-0.59  rounded-xl mb-4 shadow-sm border border-stone-800">
            <span className="h-5 w-5  rounded-full bg-[#22c55e] animate-pulse"></span>
            <span className="text-sm  md:text-xl flex  font-serif tracking-tight uppercase font-medium">

              APPROACH WOMEN WITH CONFIDENCE
            </span>
          </div>

          {/* 2. Main Title Heading */}
          <h1 className="text-[33px] font-bold  md:text-[43px] tracking-wide py-3 text-stone-900 leading-[1.15] mb-8 max-w-3xl">
            How To Start Conversations & <br className="hidden md:inline" /> Land Dates With Women IRL
          </h1>

          {/* 3. Video Container Wrapper */}
          <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl hover:shadow-pluse border-b-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] border-blue-500/30 bg-black relative group mb-10">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Yahan real video embed link lagana
              title="Introduction Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* 4. Call To Action Button */}

<button className="inline-flex font-sans items-center justify-center gap-3 bg-[#940715] text-[#ffffff] text-xl md:text-1xl font-semibold px-9 py-2 rounded-xl shadow-lg hover:bg-[#700000] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 normal-case tracking-normal">
            Gracie, I Want Access
            <svg 
              className="w-5 h-5 bg-white text-[#b91c1c] rounded-full p-0.5" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>

        </div>
      </section>


      <div className="w-full max-w-5xl mx-auto px-10 pt-1 font-sans">
      {/* Outer Card with Thin Border and Light Cream Background */}
      <div className="bg-[#FAF7F2] border-2 border-slate-500 rounded-sm p-5 md:p-4 flex flex-col items-center relative">
        
        {/* Top Mini-Heading */}
        <span className="text-black font-semibold text-lg md:text-2xl text-center mb-1 tracking-normal  leading-[1.15]  font-sans">
          Approaching Women With Confidence Course
        </span>

        {/* Main Serif Bold Heading */}
        <h2 className="text-2xl md:text-4xl font-serif font-black text-center leading-[1.25]  text-black mb-6 tracking-tight uppercase">
          YOU'LL LEARN:
        </h2>

        {/* Content Layout Grid (Left: Features, Right: Mockups) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 md:gap-20 py-1 items-center w-full max-w-3xl">
          
          {/* Left Column: Bullet List */}
          <div className="md:col-span-6 space-y-2 md:space-y-2">
            {/* Point 1 */}
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">✅</span>
              <p className="text-lg md:text-2xl text-black font-normal leading-tight">
                Exactly what to say
              </p>
            </div>

            {/* Point 2 */}
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">✅</span>
              <p className="text-lg md:text-2xl text-black font-normal leading-tight">
                How to overcome the fear in the moment
              </p>
            </div>

            {/* Point 3 */}
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">✅</span>
              <p className="text-lg md:text-2xl text-black font-normal leading-tight">
                How to open and actually get her number
              </p>
            </div>
          </div>

          {/* Right Column: Devices Mockup Placeholder */}
          <div className="md:col-span-6 flex justify-center items-center relative mt-6 md:mt-0">
            {/* 
                Yahan aap apni laptop aur mobile ki mockups images laga sakte hain. 
                Abhi ke liye layout perfect rakhne ke liye ek demo box/image tag diya hai.
            */}
            <div className="relative w-full max-w-sm md:max-w-md aspect-[16/10]">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/642aaa6c666ae63f90a87cfb/0a491841-2ca9-48f5-ae7b-8f049ea730ec/Minimal+Website+Template+for+Therapists.png" 
                alt="Course Mockup Devices" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback agar image path na mile toh box sahi dikhe
                  e.target.style.display = 'none';
                }}
              />
              {/* Fallback Placeholder (Sirf test karne ke liye jab tak real image na ho) */}
           
            </div>
          </div>

        </div>

      </div>

    </div>
    
    <div className='w-full mx-w-3xl items-center justify-center text-center mt-2 px-5 md:px-40 py-3'>
<h2 className="text-3xl md:text-[2.45rem] font-[500] tracking-tight text-stone-900 mt-4 mb-6 leading-[1.2] font-serif text-center block w-full select-none">
  Grab My Course and Frameworks Here
</h2>              
          <div className="bg-white border  border-stone-100 items-center justify-center  rounded-lg shadow-sm overflow-hidden pb-5">
            <div className="flex items-center border-b-[3px] border-[#1b62ff] relative">
      
      {/* Step 1 (Active Step) */}
      <div className="flex-1 py-3 px-2 flex flex-col items-center relative bg-white">
        <span className="text-xs md:text-sm font-bold text-[#0056e0]">Your Information</span>
        <span className="text-[10px] md:text-xs text-stone-500 mt-0.5">Where do we send the course?</span>
        
        {/* Active Blue Indicator Arrow */}
        <div className="absolute -bottom-[4px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#1b62ff]"></div>
      </div>
      
      {/* Middle Vertical Divider */}
      <div className="w-[1px] h-8 "></div>
      
      {/* Step 2 (Inactive Step) */}
      <div className="flex-1 py-3 px-2 flex flex-col items-center  bg-white ">
        <span className="text-xs md:text-sm font-bold text-[#3962a4]">Your Information</span>
        <span className="text-[10px] md:text-xs text-stone-500 mt-0.5">Finalize my order</span>
      </div>
    </div>

    {/* Form Inputs Fields */}
    <form onSubmit={(e) => e.preventDefault()} className="p-4 md:p-6  space-y-2">
      
      {/* Full Name input */}
      <div className="w-full">
        <input 
          type="text" 
          placeholder="Full Name..." 
          required 
          className="w-full p-3.5 border py-2 border-stone-200 rounded focus:outline-none focus:border-[#1b62ff] text-base placeholder-stone-400 transition-colors"
        />
      </div>

      {/* Email Address input */}
      <div className="w-full">
        <input 
          type="email" 
          placeholder="Email Address..." 
          required 
          className="w-full p-3.5 border py-2 border-stone-200 rounded focus:outline-none focus:border-[#1b62ff] text-base placeholder-stone-400 transition-colors"
        />
      </div>
      
      {/* Phone input with Indian Flag Dropdown UI */}
      <div className="relative flex items-center w-full">
        <div className="absolute left-4 flex items-center gap-1.5 pointer-events-none select-none">
          <img 
            src="https://flagcdn.com/w20/in.png" 
            alt="India Flag" 
            className="w-5 h-auto rounded-sm object-contain" 
          />
          <span className="text-[9px] text-stone-500">▼</span>
        </div>
        <input 
          type="tel" 
          placeholder="Phone Number..." 
          required 
          className="w-full p-3.5 pl-16 py-2 border border-stone-200 rounded focus:outline-none focus:border-[#1b62ff] text-base placeholder-stone-400 transition-colors"
        />
      </div>

      {/* Bright Blue CTA Button */}
      <button 
        type="submit" 
        className="w-full py-2  bg-[#1b62ff] hover:bg-[#004be5] text-white font-bold text-base md:text-lg p-4 rounded-md shadow-sm transition-colors mt-2"
      >
        Go To Step #2 (Grab it while it's still $49!)
      </button>
    </form>

    {/* Privacy Note Footer */}
    <p className="text-[11px] text-stone-400 tracking-wide">
      We Respect Your Privacy & Information.
    </p>
  </div>
          </div>
    
    
        {/* =========================================================
    SECTION 2: COURSE CURRICULUM (MODULE BY MODULE)
   ========================================================= */}
<section className="w-full bg-[#FAF9F6] py-20 mt-20 px-4 md:px-20 border-t border-stone-200/60">
  <div className="max-w-4xl mx-auto">
    
    {/* Small Red Section Tracker */}
    <span className="text-[10px] md:text-xs font-normal tracking-[0.1em] text-[#b91c1c] uppercase block mb-5">
      What's Inside
    </span>

    {/* Main Serif Section Title */}
    <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-stone-900 mb-14 font-serif leading-[1.15]">
      Everything you'll learn, module by module.
    </h2>

    {/* Modules Stack List */}
    <div className="border-t border-stone-200 mt-5 py-10 divide-y divide-stone-200">
      
      {[
        {
          num: 1,
          title: "Welcome to Approaching Women With Confidence",
          desc: "How to get the most out of this course, who it's for, and the one rule you need to follow if you actually want this to work."
        },
        {
          num: 2,
          title: "The Misconceptions",
          desc: "Most men have been taught the wrong things about approaching, and those beliefs are the very thing holding them back. I dismantle the most common myths so you can stop operating off bad information and start fresh."
        },
        {
          num: 3,
          title: "Overcoming the Fear",
          desc: "The fear is real, and pretending it isn't doesn't work. I get into why it shows up, what's actually happening in your body and mind, and how to move through it instead of letting it freeze you in place."
        },
        {
          num: 4,
          title: "How to Get Her to Notice You",
          desc: "Before you say a single word, she's already forming an impression. I cover presence, body language, and positioning: the non-verbal fundamentals that make you someone worth noticing before you even open your mouth."
        },
        {
          num: 5,
          title: "Signs She Wants You to Approach",
          desc: "No more standing there second-guessing yourself. I walk you through the real signals women send when they're open to being approached, so you can stop overthinking and start reading the room with confidence."
        },
        {
          num: 6,
          title: "One Liners / Pickup Lines",
          desc: "The lines you've seen online don't work, and I explain exactly why. Instead, I'll show you what to actually say to open a conversation that feels natural and genuine, not rehearsed or cringe-worthy."
        },
        {
          num: 7,
          title: "Landing Her Number",
          desc: "Getting her number isn't luck. It's a skill. I give you the exact framework for transitioning from a great conversation to a confident ask, so you walk away with a number that actually leads somewhere."
        }
      ].map((module) => (
        <div 
          key={module.num} 
          className="py-8 first:pt-0 last:pb-0 flex flex-col md:flex-row items-start gap-4 md:gap-8"
        >
          {/* Module Number badge and Title Block */}
          <div className="flex items-start gap-4 flex-1 max-w-md w-full">
            {/* Red Circle Badge */}
            <span className="flex-shrink-0 w-7 h-7 bg-[#b91c1c] text-white text-xs font-medium rounded-full flex items-center justify-center font-sans mt-0.5">
              {module.num}
            </span>
            
            {/* Module Headings */}
            <h3 className="text-lg font-semibold font-serif tracking-tight text-stone-900 leading-snug">
              {module.title}
            </h3>
          </div>

          {/* Module Description Paragraph */}
          <div className="flex-1 text-stone-600 font-sans text-[16px] leading-relaxed md:pt-0.5">
            <p>{module.desc}</p>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>

{/* =========================================================
    SECTION 4: STUDENT TESTIMONIALS MASONRY GRID
   ========================================================= */}
<section className="w-full bg-[#ffffff] py-25 px-4 md:px-8 border-t border-stone-200/60">
  
   <div className="text-center mx-auto max-w-2xl mb-16">
      <h2 className="text-3xl md:text-4xl font-[600] tracking-normal text-stone-900 items-center justify-center font-serif leading-[1.2] mb-3">
        Hear From Other Students In The DWG Program
      </h2>
      <p className="text-sm md:text-xl items-center tracking-normal justify-center font-bold text-stone-800">
        Our Most <span className="text-[#c59d5f]">Recent Students</span>
      </p>
    </div>

  
  <div className=" max-w-6xl mx-auto">
    
    {/* Heading Block */}
   
    {/* Two-Column Layout Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      
      {/* ----------------- LEFT COLUMN ----------------- */}
      <div className="flex flex-col gap-6">
        
        {/* Card 1: Steven */}
        <div className="bg-white rounded-xl border border-stone-200/80 shadow-sm overflow-hidden p-4">
          <div className="relative aspect-[16/10] bg-black rounded-lg overflow-hidden flex items-center justify-center">
            {/* Custom Teal Play Button Overlay */}
          
            {/* Placeholder / Dummy Background Text to simulate video frame */}
            <div className="absolute inset-0 flex items-center justify-around px-4 opacity-70 bg-stone-900 text-white text-xs">
            <video src="/4863237-hd_1066_1920_25fps.mp4"
             controls 
      preload="auto"
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            ></video>
            </div>
          </div>

          <div className="mt-5 px-1 pb-2">
            <p className="text-stone-600 font-serif italic text-[14px] leading-relaxed">
              "I've learned so much... starting with the apps, learning how best to use them, how to set up my profile, your profile review and the feedback from the others about it, incredibly helpful."
            </p>
            <div className="mt-4 flex items-center justify-center gap-1 text-[10px] tracking-widest font-bold text-[#c59d5f] uppercase">
              <span>—</span> <span>STEVEN</span>
            </div>
          </div>
        </div>


     <div className="bg-white rounded-xl border border-stone-200/80 shadow-sm overflow-hidden p-4">
          <div className="relative aspect-[16/10] bg-black rounded-lg overflow-hidden flex items-center justify-center">
            {/* Custom Teal Play Button Overlay */}
          
            {/* Placeholder / Dummy Background Text to simulate video frame */}
            <div className="absolute inset-0 flex items-center justify-around px-4 opacity-70 bg-stone-900 text-white text-xs">
            <video src="/265641.mp4"
             controls 
      preload="auto"
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            ></video>
            </div>
          </div>

          <div className="mt-5 px-1 pb-2">
            <p className="text-stone-600 font-serif italic text-[14px] leading-relaxed">
              "I've learned so much... starting with the apps, learning how best to use them, how to set up my profile, your profile review and the feedback from the others about it, incredibly helpful."
            </p>
            <div className="mt-4 flex items-center justify-center gap-1 text-[10px] tracking-widest font-bold text-[#c59d5f] uppercase">
              <span>—</span> <span>STEVEN</span>
            </div>
          </div>
        </div>

        {/* Card 2: John */}
        <div className="bg-white rounded-xl border border-stone-200/80 shadow-sm overflow-hidden p-4">
          <div className="relative aspect-[16/10] bg-black rounded-lg overflow-hidden flex items-center justify-center">
         
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztjofcYcl-mSJJxnvwyMXcOx3o0Bz1jxKQmgq8NpLGA&s=10" alt="" />
          </div>
          <div className="mt-5 px-1 pb-2">
            <p className="text-stone-600 font-serif italic text-[14px] leading-relaxed">
              "There's a lot of helpful guys in there that you know have gone through a lot of the same frustrations that I have in dating and it's nice to have that community just so you know that you're not alone. You know I've even gotten to know a lot of the guys on a personal level. And it's really been a cool experience to see that I'm not alone in all of this."
            </p>
            <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] tracking-widest font-bold text-[#c59d5f] uppercase">
              <span>—</span> <span>JOHN</span>
            </div>
          </div>
        </div>

        {/* Card 3: Jimmy (Image with Pink Tag) */}
        <div className="bg-white rounded-xl border border-stone-200/80 shadow-sm overflow-hidden p-4">
          <div className="relative rounded-lg overflow-hidden bg-stone-100">
           <img src="https://images.squarespace-cdn.com/content/v1/5b927c78aa49a17bb535bc3d/1717288874623-84ZHS53IUMD5CR49AZHI/image-asset.jpeg" alt="" />
            
            {/* Hand-drawn style Pink Badge */}
            <div className="absolute bottom-3 left-0 bg-[#f5d6d6] text-[#8c2d2d] font-serif italic font-bold px-4 py-1.5 text-sm shadow-sm rounded-r">
              Jimmy and his GF
            </div>
          </div>
          <div className="mt-5 px-1 pb-2">
            <p className="text-stone-600 font-serif italic text-[14px] leading-relaxed">
              "I am not only better at dating, but more in control of my thoughts and a more confident man. If you are intentional, willing to use Gracie's advice and step out of your comfort zone you will be amazed what you can do!"
            </p>
            <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] tracking-widest font-bold text-[#c59d5f] uppercase">
              <span>—</span> <span>JIMMY</span>
            </div>
          </div>
        </div>

        {/* Card 4: Derk */}
        <div className="bg-white rounded-xl border border-stone-200/80 shadow-sm overflow-hidden p-4">
          <div className="relative aspect-[3/4] bg-stone-800 rounded-lg overflow-hidden flex items-center justify-center">
           <video 
      src="/13931584-uhd_2160_3840_24fps.mp4" 
      controls 
      preload="auto"
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
    ></video>
            <span className="absolute text-white/50 text-xs">[Derk Vertical Video]</span>
            
          </div>
          <div className="mt-5 px-1 pb-2">
            <p className="text-stone-600 font-serif italic text-[14px] leading-relaxed">
              "Joining the Dating with Gracie community is one of the best decisions I've made in my life. It helped me grow not only in my dating life but also as a man, and I love it."
            </p>
            <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] tracking-widest font-bold text-[#c59d5f] uppercase">
              <span>—</span> <span>DERK</span>
            </div>
          </div>
        </div>

      </div>

      {/* ----------------- RIGHT COLUMN ----------------- */}
      <div className="flex flex-col gap-6">
        
        {/* Card 1: Joe */}
        <div className="bg-white rounded-xl border border-stone-200/80 shadow-sm overflow-hidden p-4">
          <div className="relative aspect-[16/10] bg-black rounded-lg overflow-hidden flex items-center justify-center">

<video 
      src="https://www.w3schools.com/html/mov_bbb.mp4" 
      controls 
      preload="auto"
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
    >
      Your browser does not support the video tag.
    </video>            
         </div>

          <div className="mt-5 px-1 pb-2">
            <p className="text-stone-600 font-serif italic text-[14px] leading-relaxed">
              "This is gonna be my first girlfriend. Hopefully, only girlfriend ever. I just can't believe it. I'm stunned. Totally shocked. It's so surreal. This still still doesn't feel real."
            </p>
            <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] tracking-widest font-bold text-[#c59d5f] uppercase">
              <span>—</span> <span>JOE</span>
            </div>
          </div>
        </div>

        {/* Card 2: Vertical Video (0:30) */}
        <div className="bg-white rounded-xl border border-stone-200/80 shadow-sm overflow-hidden p-4">
    <div className="relative aspect-[3/4] bg-stone-700 rounded-lg overflow-hidden flex items-center justify-center">
    
    {/* Clean Responsive Iframe Container */}
 <video 
      src="/245932 (1).mp4" 
      controls 
      preload="auto"
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg z-10"
    >
      Your browser does not support the video tag.
    </video>

    {/* Placeholder Text (Will sit behind the video, safe backup) */}
    <span className="absolute text-white/50 text-xs z-0">[Vertical Student Video]</span>
    
    {/* Bottom Custom Bar Overlayed with higher z-index if you want it visible */}
   
    
  </div>
</div>

 <div className="bg-white rounded-xl border border-stone-200/80 shadow-sm overflow-hidden p-4">
          <div className="relative w-full h-full rounded-lg overflow-hidden bg-stone-100">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuOY58KP3kUt-xHkUnzLNRf4E4bNDNi7efqhqycPYlwxuQRcmrgoAYlqGl&s=10" alt="" />
            
            {/* Hand-drawn style Pink Badge */}
            <div className="absolute bottom-3 left-0 bg-[#f5d6d6] text-[#8c2d2d] font-serif italic font-bold px-4 py-1.5 text-sm shadow-sm rounded-r">
              Erick and his GF
            </div>
          </div>
          <div className="mt-5 px-1 pb-2">
            <p className="text-stone-600 font-serif italic text-[14px] leading-relaxed">
        "I was not swiping at all, and I was getting lots of, like, quality likes."
            </p>
            <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] tracking-widest font-bold text-[#c59d5f] uppercase">
              <span>—</span> <span>Erick</span>
            </div>
          </div>
        </div>

        {/* Card 3: Erick (Large Standing Image) */}
        <div className="bg-white rounded-xl border border-stone-200/80 shadow-sm overflow-hidden p-4">
          <div className="relative rounded-lg overflow-hidden bg-stone-100">
           <img src="https://i.insider.com/5c3cf1b4bde70f5fea08964c?width=944&format=jpeg" alt="" />
            <div className="absolute top-3 right-4 bg-[#f5d6d6] text-[#8c2d2d] font-serif italic font-bold px-4 py-1.5 text-sm shadow-sm rounded">
              Erick and his GF
            </div>
          </div>
          <div className="mt-5 px-1 pb-2">
            <p className="text-stone-600 font-serif italic text-[14px] leading-relaxed">
"I'm no longer single, so thank you very very much for all of your help."            </p>
            <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] tracking-widest font-bold text-[#c59d5f] uppercase">
              <span>—</span> <span>JULAIN</span>
            </div>
          </div>
        </div>

        {/* Card 4: Christopher */}
        <div className="bg-white rounded-xl border border-stone-200/80 shadow-sm overflow-hidden p-4">
          <div className="relative aspect-[4/3] bg-stone-200 rounded-lg overflow-hidden flex items-center justify-center text-stone-500 text-xs">
              <img src="https://media.istockphoto.com/id/1300273437/photo/and-then-you-came-along-and-turned-my-life-around.jpg?s=612x612&w=0&k=20&c=WwAX1gWbGKv8CclSBsdJ7u-o06impCeUS4De2k5-BZI=" alt="" />
          </div>
          <div className="mt-5 px-1 pb-2">
            <p className="text-stone-600 font-serif italic text-[14px] leading-relaxed">
              "In 90 days, I went from barely getting any matches and having no second dates to 24 dates — 10 of them seconds or thirds. The most powerful thing this community gave me is the ability to choose, and not just be chosen. Dating has gone from debilitating to fun and exciting."
            </p>
            <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] tracking-widest font-bold text-[#c59d5f] uppercase">
              <span>—</span> <span>CHRISTOPHER</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>

 <section className='w-full py-18 px-6 bg-[#fdcfb] border-t border-slate-200'>
  <div className='max-w-6xl mx-auto'>

    {/* section Header */}
    <div className='text-center mb-16'>
      <h2 className='text-3xl md:text-4xl font-[600] tracking-normal text-stone-900 font-serif leading-[1.2] mb-3'>
        What Our Student Say About Us
      </h2>
      <p className='text-sm py-3 md:text-balance font-sans font-semibold text-stone-500 tracking-wide uppercase'>
        Real Experiences. <span className='text-[#c59d5f]'>Real Success Stories.</span>
      </p>

    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {clientReviews.map((review) =>(
        <div
        key={review.id}
        className='bg-white rounded-2xl border border-stone-200/80 p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between'
        >
            <div>
              <div className='flex items-center text-amber-500 mb-4'>
                
                {[...Array(review.rating)].map((_, i)=>(

               
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                     ))}
              </div>
              {/* Reviw title */}
              <h3 className='text-base font-bold text-stone-900 font-sans'>
                "{review.title}"
              </h3>

              {/* Review paragraph */}
              <p className='text-stone-600 text-sm leading-relaxed font-normal'>
                {review.text}
              </p>
            </div>

            {/* user Info Footer */}
            <div className='mt-6 border border-t border-stone-200 flex items-center gap-3'>
              <div className='w-9 h-9 bg-screen-100 text-stone-700 font-bold rounded-full flex item-center justify-center text-sm'>
                {review.name[0]}
              </div>
            </div>
            <h4 className='text-sm font-semibold text-stone-800 leading-none'>{review.name}</h4>
            <span className='text-xs text-stone-400 mt-1 block'>{review.role}</span>
        </div>

      ))}
    </div>

  </div>

  <div className='w-full mx-auto mt-25 mb-0 text-center items-center justify-center'>


          <button className="inline-flex font-sans items-center justify-center gap-3 bg-[#940715] text-[#ffffff] text-xl md:text-1xl font-semibold px-9 py-2 rounded-xl shadow-lg hover:bg-[#700000] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 normal-case tracking-normal">
            Gracie, I Want Access
            <svg 
              className="w-5 h-5 bg-white text-[#b91c1c] rounded-full p-0.5" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>
            </div>
 </section>



    </>
  );
}