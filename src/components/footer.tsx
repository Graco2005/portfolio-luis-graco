"use client";

import { Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-black/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2">
            <Link href="#home" className="text-xl font-bold tracking-tight text-foreground">
              Graco.dev
            </Link>
          </div>

          <p className="text-sm text-foreground/60 flex items-center gap-1 font-light">
            Desenvolvido com <Heart size={14} className="text-foreground fill-current mx-1" /> por Graco © {currentYear}
          </p>

          <div className="flex gap-6 text-sm font-medium">
            <Link href="#about" className="text-foreground/60 hover:text-foreground transition-colors">
              Sobre
            </Link>
            <Link href="#projects" className="text-foreground/60 hover:text-foreground transition-colors">
              Projetos
            </Link>
            <Link href="#contact" className="text-foreground/60 hover:text-foreground transition-colors">
              Contato
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
