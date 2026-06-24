import Link from "next/link";
import React from "react";
const Navbar = () => {

  return (
<nav className="fixed top-0 left-0 w-full z-50 bg-[#faf7f2] to-transparent px-8 md:px-14 py-5 select-none">
      {/* TOP BAR */}
      <div className='flex justify-between items-center'>
        
        {/* LOGO */}
         <Link href="/" className="text-[25px] pr-4 leading-[1.15]  font-serif font-semibold  italic select-none  cursor-pointer text-black items-center tracking-tight">
                Dating with Gracie</Link> 

        {/* DESKTOP MENU */}
        <ul className='hidden md:flex mr-5 items-center gap-8 text-[12px] font-mono ml-6   tracking-[0.2em] text-slate-800'>
         
          <div className='flex items-center gap-4' >
          
          </div>
                            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <Link href="/philosiphy"  className="hover:text-slate-900 transition-colors"><li>Philosiphy</li></Link>

              <Link href="/structure" className="hover:text-slate-900 transition-colors">The Structure</Link>


          <Link href="/enroll"  className="hover:text-slate-900 transition-colors"><li>Enroll now</li></Link>
    </ul>
                <div className="text-[12px] font-mono tracking-[0.2em] text-stone-600 uppercase hidden sm:block" >A MEN'S MANUAL</div>

     </div>
             
    
          
          

      
    
    </nav>
  )
  
}
export default Navbar