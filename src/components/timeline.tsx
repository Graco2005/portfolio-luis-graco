"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timelineData = [
  {
    type: "education",
    title: "Ciência da Computação",
    org: "Universidade XYZ",
    date: "2023 - Presente",
    desc: "Bacharelado focado em engenharia de software, algoritmos e inteligência artificial."
  },
  {
    type: "work",
    title: "Desenvolvedor Frontend Jr",
    org: "Tech Startup",
    date: "Jan 2024 - Atual",
    desc: "Desenvolvimento de interfaces escaláveis usando React, Next.js e Tailwind CSS."
  },
  {
    type: "education",
    title: "Técnico em Informática",
    org: "Instituto Federal",
    date: "2020 - 2022",
    desc: "Formação técnica integrada ao ensino médio, focada em fundamentos de TI."
  }
];

export function Timeline() {
  return (
    <section className="py-24 relative bg-card">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Trajetória</h2>
          <div className="w-16 h-0.5 bg-foreground mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Main Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-black/10" />

          <div className="space-y-12">
            {timelineData.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center shadow-sm z-10 text-foreground">
                    {item.type === "work" ? <Briefcase size={18} /> : <GraduationCap size={18} />}
                  </div>

                  {/* Card */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${isEven ? "md:pl-12" : "md:pr-12"}`}>
                    <div className="bg-white p-6 rounded-2xl border border-black/5 hover:border-black/15 shadow-sm hover:shadow-md transition-all duration-300">
                      <span className="text-xs font-bold text-foreground/50 tracking-wider uppercase mb-2 block">{item.date}</span>
                      <h3 className="text-xl font-bold text-foreground tracking-tight">{item.title}</h3>
                      <h4 className="text-foreground/70 font-medium text-sm mb-3">{item.org}</h4>
                      <p className="text-sm text-foreground/60 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
