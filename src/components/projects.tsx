"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, MousePointerClick } from "lucide-react";
import { Github } from "@/components/icons";
import Link from "next/link";

const categories = ["Todos", "Frontend", "Backend", "IA", "Mobile", "Banco de Dados"];

type Project = {
  id: number;
  title: string;
  category: string[];
  description: string;
  techs: string[];
  github: string;
  live: string;
  images?: string[];
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Plataforma",
    category: ["Frontend"],
    description: "Um e-commerce completo com carrinho de compras, integração de pagamentos e painel administrativo.",
    techs: ["React", "Next.js", "Tailwind CSS"],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "API de Autenticação",
    category: ["Backend"],
    description: "Serviço de autenticação robusto usando JWT, OAuth2 e refresh tokens.",
    techs: ["Node.js", "Express", "PostgreSQL"],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Chatbot de Atendimento",  
    category: ["IA"],
    description: "Assistente virtual integrado com OpenAI para responder dúvidas frequentes de clientes.",
    techs: ["Python", "LangChain", "OpenAI"],
    github: "https://github.com/Graco2005/chatbot-atendimento",
    live: "#",
    images: ["/assets/chatbot_atendimento_img1.jpg", "/assets/chatbot_atendimento_img2.png"]
  },
  {
    id: 4,
    title: "Bookly",
    category: ["Frontend", "Mobile", "Banco de Dados"],
    description: "Organize suas leituras, descubra novos títulos e registre resenhas. O Bookly é o espaço ideal para você acompanhar seu progresso literário dia a dia.",
    techs: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
    github: "#",
    live: "#",
    images: ["/assets/bookly_interface.png"]
  },
  {
    id: 5,
    title: "Sistema de Reservas",
    category: ["Backend"],
    description: "API para reserva de mesas em restaurantes com controle de concorrência.",
    techs: ["Java", "Spring Boot", "MySQL"],
    github: "#",
    live: "#"
  },
  {
    id: 6,
    title: "Dashboard Analítico",
    category: ["Frontend"],
    description: "Painel interativo para visualização de dados de vendas em tempo real.",
    techs: ["React", "Recharts", "TypeScript"],
    github: "#",
    live: "#"
  },
  {
    id: 7,
    title: "Acessa",
    category: ["Frontend", "Mobile", "Banco de Dados"],
    description: "Aplicativo mobile de acessibilidade com tela mapa, avaliação, pontos de interesse, notificação e perfil de usuário.",
    techs: ["React Native", "Expo", "Firebase"],
    github: "https://github.com/Graco2005/acessa-app-acessibilidade",
    live: "#",
    images: ["/assets/acessa.png"]
  },
  {
    id: 8,
    title: "Charge",
    category: ["Frontend", "Mobile"],
    description: "Web app client-side para registro e monitoramento de cargas de treino, focado em arquitetura enxuta, alta performance e sem autenticação.",
    techs: ["Html", "Css", "JavaScript"],
    github: "https://github.com/Graco2005/app-charge",
    live: "https://graco2005.github.io/app-charge/",
    images: ["/assets/new_charge_icon.png", "/assets/charge_interface.png"]
  },
  {
    id: 9,
    title: "Kraken",
    category: ["Backend"],
    description: "Motor de testes de carga HTTP com interface gráfica, desenvolvido em Java 21 utilizando Virtual Threads, Swing e métricas HdrHistogram.",
    techs: ["Java", "Swing", "HdrHistogram"],
    github: "https://github.com/Graco2005/kraken",
    live: "#",
    images: ["/assets/kraken_icon.png", "/assets/kraken_interface.png"]
  }
];

function ProjectCard({ project }: { project: Project }) {
  const [imageIndex, setImageIndex] = useState(0);

  const hasImages = project.images && project.images.length > 0;
  const isMultipleImages = project.images && project.images.length > 1;

  const nextImage = () => {
    if (isMultipleImages) {
      setImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col bg-white rounded-3xl border border-black/5 hover:border-black/15 overflow-hidden hover:shadow-xl transition-all duration-500"
    >
      {/* Image Placeholder */}
      <div 
        className={`h-56 relative bg-card flex items-center justify-center overflow-hidden border-b border-black/5 ${isMultipleImages ? 'cursor-pointer' : ''}`}
        onClick={nextImage}
        title={isMultipleImages ? "Clique para trocar a imagem" : undefined}
      >
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
        
        {isMultipleImages && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-foreground/80 px-2.5 py-1 rounded-full text-[10px] font-bold shadow-sm z-20 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <MousePointerClick size={12} />
            <span>Trocar Imagem</span>
          </div>
        )}

        {hasImages ? (
          <AnimatePresence mode="wait">
            <motion.img
              key={imageIndex}
              src={project.images![imageIndex]}
              alt={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
            />
          </AnimatePresence>
        ) : (
          <div className="text-foreground/20 font-semibold tracking-widest text-xs z-0 transition-transform duration-700 group-hover:scale-110">
            IMAGEM DO PROJETO
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-foreground/80 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-foreground/60 mb-6 flex-1 leading-relaxed font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techs.map(tech => (
            <span key={tech} className="text-[11px] font-semibold px-2.5 py-1 bg-card rounded-md border border-black/5 text-foreground/70">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-black/5">
          {project.github && project.github !== "#" && (
            <Link
              href={project.github}
              className="text-foreground/60 hover:text-foreground transition-colors p-2 -ml-2 rounded-full hover:bg-black/5"
              aria-label="Código Fonte"
              target="_blank"
            >
              <Github size={20} />
            </Link>
          )}
          {project.live && project.live !== "#" && (
            <Link
              href={project.live}
              className="text-foreground/60 hover:text-foreground transition-colors p-2 rounded-full hover:bg-black/5"
              aria-label="Projeto Online"
              target="_blank"
            >
              <ExternalLink size={20} />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos"
    ? projectsData
    : projectsData.filter(p => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-24 relative bg-card">
      <div className="container mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Galeria de Projetos</h2>
          <div className="w-16 h-0.5 bg-foreground mx-auto" />
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
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
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
