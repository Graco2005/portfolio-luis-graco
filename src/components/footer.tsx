"use client";

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
            Desenvolvido por Graco © {currentYear}
          </p>

          <div className="text-sm font-medium text-foreground/40 font-mono">
            v1.7.0
          </div>

        </div>
      </div>
    </footer>
  );
}
