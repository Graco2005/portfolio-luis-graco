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
};

const certCategories = ["Todos", "Programação", "IA", "Cloud", "Design"];

const certificates: Certificate[] = [
  {
    id: "1",
    title: "Desenvolvimento Web Completo",
    issuer: "Udemy",
    date: "2023",
    hours: 100,
    category: "Programação",
    image: "/cert-placeholder.jpg",
    link: "#",
    file: "/cert-web.pdf"
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
  }
];

export function Certifications() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredCerts = activeCategory === "Todos"
    ? certificates
    : certificates.filter(cert => cert.category === activeCategory);

  return (
    <section id="certifications" className="py-24 relative bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
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
                <div className="h-48 relative bg-card flex items-center justify-center border-b border-black/5">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <div className="text-foreground/20 font-semibold tracking-widest text-xs z-0 transition-transform duration-700 group-hover:scale-110">
                    IMAGEM DO CERTIFICADO
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm z-20">
                    {cert.hours}h
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="text-foreground/50 font-bold text-xs mb-3 tracking-widest uppercase">{cert.issuer}</div>
                  <h3 className="font-bold text-xl text-foreground mb-6 leading-tight group-hover:text-foreground/80 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="flex justify-between items-center mb-8 text-sm font-medium text-foreground/60">
                    <span>{cert.date}</span>
                    <span className="px-3 py-1 bg-card rounded-md border border-black/5">{cert.category}</span>
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
