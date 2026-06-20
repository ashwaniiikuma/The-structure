import Link from "next/link";
import React from "react";
const Navbar = () => {

  return (
<nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/100 via-black/50 to-transparent px-8 md:px-14 py-6 select-none">
      {/* TOP BAR */}
      <div className='flex justify-between items-center'>
        
        {/* LOGO */}
         <Link href="/" className="text-[20px] pr-4 tracking-wide uppercase font-serif select-none cursor-pointer text-black items-center tracking-normal">
                 THE <span className="text-[#b91c1c]"> STANDARD</span></Link> 

        {/* DESKTOP MENU */}
        <ul className='hidden md:flex mr-5 items-center gap-8 text-[11px] font-mono ml-6   tracking-[0.2em] text-stone-300'>
         
          <div className='flex items-center gap-4' >
          
          </div>
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/philosiphy"  className="hover:text-white transition-colors"><li>Philosiphy</li></Link>

              <Link href="/structure" className="hover:text-white transition-colors">The Structure</Link>


          <Link href="/enroll"  className="hover:text-white transition-colors"><li>Enroll now</li></Link>
    </ul>
                <div className="text-[12px] font-mono tracking-[0.2em] text-stone-600 uppercase hidden sm:block" >A MEN'S MANUAL</div>

     </div>
             
    
          
          

      
    
    </nav>
  )
  
}
export default Navbar