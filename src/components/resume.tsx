"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import Link from "next/link";

export function Resume() {
  return (
    <section className="py-24 relative bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-[2.5rem] border border-black/5 shadow-xl p-8 md:p-16 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <FileText size={200} />
            </div>
            
            <div className="relative z-10">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-16 h-16 bg-card rounded-full border border-black/5 flex items-center justify-center mx-auto mb-6 shadow-sm"
              >
                <FileText className="text-foreground" size={24} />
              </motion.div>
              
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
                Quer saber mais detalhes?
              </h2>
              
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Baixe meu currículo completo em formato PDF para ver meu histórico profissional detalhado, todas as competências técnicas e trajetória acadêmica.
              </p>
              
              <Link 
                href="/index.html"
                target="_blank"
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-all duration-300 shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] transform hover:-translate-y-1"
              >
                <Download size={20} />
                Baixar Currículo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
