import React from "react";
import Link from "next/link";
import A1 from "@/components/A1";
import A2 from "@/components/A2";
import A3 from "@/components/A3";
import A4 from "@/components/A4";
import VideoComponent from "@/components/VideoComponent";
import Desc from "@/components/Desc";
import Scroller from "@/components/Scroller"
import A5 from "@/components/A5";



export default function Header() {
  return (
    <div>
    <header className="flex justify-between items-center p-6 bg-white shadow-md fixed w-full pb-10 top-0 z-50">
      <nav className="space-x-8 text-gray-600 text-lg">
        <Link href="#home" className="hover:text-black">HOME</Link>
        <Link href="#about" className="hover:text-black">ABOUT</Link>
        <Link href="#portfolio" className="hover:text-black">PORTFOLIO</Link>
      </nav>
      <div className="text-2xl text-black font-bold">GregRoss</div>
      <nav className="space-x-8 text-gray-600 text-lg">
        <Link href="#experience" className="hover:text-black">EXPERIENCE</Link>
        <Link href="#journal" className="hover:text-black">JOURNAL</Link>
        <Link href="#contact" className="hover:text-black">CONTACT</Link>
      </nav>
    </header>
     <div className="flex space-x-2 pt-5 mt-28">
     <A1/>
     <A2/>
     <A3/>
     <A4/>
     </div>
     <div>
      <A5/>
     </div>
     <div>
      <Desc/>
     </div>
     <div className="items-center pt-5 h-full w-full">
      <VideoComponent/>
      </div>
      <div className="mt-20">
      <Scroller/>
      </div>
     </div>
  );
}
