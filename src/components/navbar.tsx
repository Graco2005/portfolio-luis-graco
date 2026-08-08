"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Início", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Projetos", href: "#projects" },
  { name: "Certificações", href: "#certifications" },
  { name: "Tecnologias", href: "#tech" },
  { name: "Currículo", href: "#resume" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-black/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="text-xl font-bold tracking-tight text-foreground relative group">
            Graco.dev
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/60 hover:text-foreground relative group transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-6 py-2.5 text-sm font-medium text-foreground bg-white border border-foreground/20 rounded-full hover:bg-foreground hover:text-white transition-all duration-300 shadow-[0_4px_14px_0_rgb(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transform hover:-translate-y-0.5"
            >
              Entrar em contato
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden border-t border-black/5"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-black/5">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex justify-center px-4 py-3 text-sm font-medium text-white bg-foreground rounded-lg"
                >
                  Entrar em contato
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
