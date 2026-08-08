"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/icons";
import Link from "next/link";

export function FeaturedProject() {
  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Projeto em Destaque</h2>
          <div className="w-16 h-0.5 bg-foreground mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative rounded-3xl overflow-hidden bg-white border border-black/5 hover:border-black/10 hover:shadow-xl transition-all duration-500 flex flex-col lg:flex-row max-w-6xl mx-auto"
        >
          {/* Image Side */}
          <div className="lg:w-1/2 overflow-hidden relative min-h-[350px] lg:min-h-full bg-card flex items-center justify-center border-b lg:border-b-0 lg:border-r border-black/5">
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all z-10 duration-700" />
            <div className="text-foreground/20 font-semibold tracking-widest text-sm z-0">
              IMAGEM DO PROJETO
            </div>
            {/* 
            <Image 
              src="/featured-project.png" 
              alt="Projeto Destaque" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            /> 
            */}
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 p-8 md:p-14 flex flex-col justify-center">
            <div className="text-foreground/50 font-bold text-xs mb-3 tracking-widest uppercase">Destaque</div>
            <h3 className="text-3xl font-extrabold text-foreground mb-6 tracking-tight">Sistema de Gestão Escolar</h3>
            
            <div className="space-y-4 text-foreground/70 mb-10 font-light leading-relaxed">
              <p>
                <strong>O Problema:</strong> Escolas enfrentam dificuldades para gerenciar notas, faltas e comunicação com pais de forma centralizada.
              </p>
              <p>
                <strong>A Solução:</strong> Uma plataforma web responsiva onde professores lançam notas em tempo real e pais recebem notificações automáticas, com dashboards gerenciais para a diretoria.
              </p>
              <p>
                <strong>Arquitetura & Resultados:</strong> Construído com Next.js (App Router) e Node.js no backend. Utiliza PostgreSQL e Prisma. Reduziu o tempo de fechamento de notas em 40%.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-card rounded-md text-xs font-semibold border border-black/5 text-foreground/70">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-auto">
              <Link 
                href="https://github.com/Graco2005" 
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-white border border-black/10 hover:border-black/30 hover:bg-black/5 text-foreground font-medium rounded-full transition-all duration-300"
              >
                <Github size={18} />
                Código Fonte
              </Link>
              <Link 
                href="#" 
                className="flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-all duration-300 shadow-[0_4px_14px_0_rgb(0,0,0,0.1)]"
              >
                <ExternalLink size={18} />
                Live Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
