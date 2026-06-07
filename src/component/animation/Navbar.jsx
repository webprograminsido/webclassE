"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Info,
  Image as ImageIcon,
  Sparkles,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek transisi background saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Varanda", icon: <Home size={20} />, href: "#home" },
    { name: "Kona ba", icon: <Info size={20} />, href: "#about" },
    { name: "Estrutura", icon: <Info size={20} />, href: "#structure" },
    { name: "Foto", icon: <ImageIcon size={20} />, href: "#image" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999999] transition-all duration-500 font-poppins ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-green-500/30 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo ho Glow & Border Animasi */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative">
              <div className="absolute -inset-1.5 bg-green-500 rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative w-12 h-12 bg-slate-900 border border-green-400/50 rounded-xl flex items-center justify-center text-green-400 font-black text-2xl shadow-2xl">
                E
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white group-hover:text-green-400 transition-colors">
                FAMILIA E
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-[1px] w-5 bg-green-500 animate-pulse"></span>
                <span className="text-[10px] text-green-400 font-bold tracking-[0.2em] uppercase">
                  Estudante
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Menu - Modern Hover */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative text-sm font-medium text-gray-300 hover:text-white transition-all"
                >
                  <span className="flex items-center gap-2">{item.name}</span>
                  {/* Underline Animation */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#4ade80]"></span>
                </a>
              ))}

              {/* Button CTA Premium */}
              <button className="relative overflow-hidden group bg-green-500 text-black px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(74,222,128,0.3)]">
                <span className="relative z-10">EL FAMILIA</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-green-400 transition-colors"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Slide & Blur */}
      <div
        className={`md:hidden fixed inset-0 z-[-1] bg-black/95 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`group flex flex-col items-center gap-2 text-4xl font-black text-white hover:text-green-400 transition-all ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-green-500 text-xs font-mono tracking-[0.5em]">
                0{index + 1}
              </span>
              {item.name}
              <div className="w-0 h-1 bg-green-500 group-hover:w-full transition-all duration-300"></div>
            </a>
          ))}
          <div className="mt-10 opacity-30 text-[10px] tracking-[0.8em] text-white uppercase">
            Habelun amizade ho ambisaun
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
