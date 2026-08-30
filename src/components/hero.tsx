"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8">
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 space-y-8 text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="inline-block px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-foreground/70 text-sm font-medium"
            >
              Bem-vindo ao meu portfólio
            </motion.div>
            
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]"
            >
              Olá, eu sou <br />
              <span className="text-foreground">
                Graco
              </span>
            </motion.h1>
            
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="text-2xl md:text-3xl font-medium text-foreground/60 tracking-tight"
            >
              Estudante de Ciência da Computação
            </motion.h2>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="text-lg text-foreground/70 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light"
            >
              Apaixonado por desenvolvimento de software, inteligência artificial e criação de soluções que geram impacto real. Estou sempre aprendendo novas tecnologias e transformando conhecimento em projetos práticos.
            </motion.p>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2"
            >
              <Link 
                href="#projects"
                className="group flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_14px_0_rgb(0,0,0,0.1)]"
              >
                Ver Projetos
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              
              {/* Em .html temporariamente enquanto eu vou concluindo o meu currículo */}
              <a 
                href="/index.html" 
                download="index.html"
                className="flex items-center gap-2 px-7 py-3.5 bg-white text-foreground font-medium rounded-full border border-black/10 hover:border-black/30 hover:bg-black/5 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                Baixar Currículo
                <Download size={18} />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
              <div className="absolute inset-0 bg-black/5 rounded-[2rem] md:rounded-[3rem] rotate-6 transition-transform duration-500 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-black/10 rounded-[2rem] md:rounded-[3rem] rotate-3 transition-transform duration-500 group-hover:rotate-6" />
              
              <div className="absolute inset-0 bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden flex items-center justify-center border border-black/10 shadow-xl transition-transform duration-500 group-hover:-translate-y-2">
                
                {/* === FOTO DE PERFIL ADICIONADA === */}
                <Image 
                  src="/perfil.png" // CERTIFIQUE-SE DE QUE O NOME DO ARQUIVO É O MESMO NA PASTA PUBLIC
                  alt="Foto de perfil de Graco"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 16rem, (max-width: 1024px) 20rem, 24rem"
                  priority
                />

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}