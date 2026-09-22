"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  hours: number;
  category: string;
  image: string;
  link: string;
  file: string;
  status?: "completed" | "in_progress";
  progress?: number;
};

const certCategories = ["Todos", "Programação", "IA", "Cloud", "Design", "Outros"];

const certificates: Certificate[] = [
  {
    id: "1",
    title: "Java Completo + Projetos",
    issuer: "Udemy",
    date: "2026",
    hours: 65,
    category: "Programação",
    image: "/assets/curso_java_imagem.png",
    link: "#",
    file: "/cert-web.pdf",
    status: "in_progress",
    progress: 29
  },
  {
    id: "2",
    title: "Fundamentos de Inteligência Artificial",
    issuer: "Microsoft",
    date: "2024",
    hours: 40,
    category: "IA",
    image: "/cert-placeholder.jpg",
    link: "#",
    file: "/cert-ia.pdf"
  },
  {
    id: "3",
    title: "AWS Cloud Practitioner",
    issuer: "Amazon",
    date: "2024",
    hours: 20,
    category: "Cloud",
    image: "/cert-placeholder.jpg",
    link: "#",
    file: "/cert-aws.pdf"
  },
  {
    id: "4",
    title: "Curso Python 3 do básico ao avançado",
    issuer: "Udemy",
    date: "2026",
    hours: 140,
    category: "Programação",
    image: "/assets/curso_python_imagem.png",
    link: "#",
    file: "/cert-ia.pdf",
    status: "in_progress",
    progress: 23
  },
  {
    id: "5",
    title: "Introdução ao Excel",
    issuer: "Enap",
    date: "2026",
    hours: 25,
    category: "Outros",
    image: "/assets/curso_introducao_excel.png",
    link: "#",
    file: "/assets/introducao_ao_excel_turma_jul2026_certificado.pdf",
    status: "completed"
  }
];

export function Certifications() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredCerts = activeCategory === "Todos"
    ? certificates
    : certificates.filter(cert => cert.category === activeCategory);

  return (
    <section id="certifications" className="py-24 relative bg-background">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Certificações</h2>
          <div className="w-16 h-0.5 bg-foreground mx-auto" />
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {certCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-foreground text-background shadow-md"
                  : "bg-white text-foreground/70 border border-black/5 hover:border-black/20 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-3xl border border-black/5 hover:border-black/15 overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col"
              >
                {/* Image Placeholder */}
                <div className="h-48 relative bg-card flex items-center justify-center border-b border-black/5 overflow-hidden">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                  
                  {cert.image && !cert.image.includes("placeholder") ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="text-foreground/20 font-semibold tracking-widest text-xs z-0 transition-transform duration-700 group-hover:scale-110">
                      IMAGEM DO CURSO/CERTIFICADO
                    </div>
                  )}

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm z-20">
                    {cert.hours}h
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="text-foreground/50 font-bold text-xs mb-3 tracking-widest uppercase">{cert.issuer}</div>
                  <h3 className="font-bold text-xl text-foreground mb-6 leading-tight group-hover:text-foreground/80 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="flex justify-between items-center mb-8 text-sm font-medium text-foreground/60 gap-4">
                    {cert.status === "in_progress" ? (
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs uppercase tracking-wider font-bold">Em andamento</span>
                          <span className="text-xs font-bold text-foreground">{cert.progress}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }} 
                            whileInView={{ width: `${cert.progress}%` }} 
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            className="h-full bg-foreground rounded-full" 
                          />
                        </div>
                      </div>
                    ) : (
                      <span>{cert.date}</span>
                    )}
                    <span className="px-3 py-1 bg-card rounded-md border border-black/5 whitespace-nowrap">{cert.category}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <Link 
                      href={cert.file}
                      target="_blank"
                      className="flex items-center justify-center gap-2 px-3 py-2.5 bg-card hover:bg-black/5 text-foreground text-sm font-medium rounded-xl transition-colors border border-black/5"
                    >
                      <Download size={16} />
                      PDF
                    </Link>
                    <Link 
                      href={cert.link}
                      target="_blank"
                      className="flex items-center justify-center gap-2 px-3 py-2.5 bg-foreground text-background text-sm font-medium rounded-xl hover:bg-foreground/90 transition-colors shadow-sm"
                    >
                      <ExternalLink size={16} />
                      Validar
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
