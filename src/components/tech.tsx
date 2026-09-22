"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Wrench, ChevronDown, MonitorSmartphone, Server, Database } from "lucide-react";
import { 
  FaPython, 
  FaJava, 
  FaReact, 
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiNextdotjs,
  SiSpringboot,
  SiMysql,
  SiFirebase,
  SiTypescript
} from "react-icons/si";
import { BiCoinStack } from "react-icons/bi";

type TechItem = {
  id: string;
  name: string;
  icon: any;
  projects?: string;
  description?: string;
};

// As principais tecnologias ganham destaque e descrição
const mainTechs: TechItem[] = [
  { 
    id: "java",
    name: "Java", 
    icon: FaJava, 
    projects: "Sistema de Reservas, Motor Kraken", 
    description: "Linguagem robusta orientada a objetos. Utilizo para construir backends escaláveis, microsserviços e aplicações multithread de alta performance." 
  },
  { 
    id: "python",
    name: "Python", 
    icon: FaPython, 
    projects: "Chatbot de Atendimento, Automações", 
    description: "Minha escolha principal para scripts rápidos, análise de dados e integrações com Inteligência Artificial e LLMs." 
  },
  { 
    id: "javascript",
    name: "JavaScript/TS", 
    icon: SiJavascript, 
    projects: "E-Commerce, Dashboard, Acessa, Charge", 
    description: "Essencial para o desenvolvimento frontend e backend. Gosto de usar TypeScript para garantir tipagem estática e maior confiabilidade." 
  },
  { 
    id: "react",
    name: "React & Native", 
    icon: FaReact, 
    projects: "E-Commerce, Dashboard, App Finanças, Acessa", 
    description: "Biblioteca frontend que mais utilizo para criar interfaces dinâmicas, responsivas e aplicativos mobile nativos." 
  },
  { 
    id: "sql",
    name: "SQL", 
    icon: BiCoinStack, 
    projects: "Consultas, Migrações, Sistema de Reservas", 
    description: "Fundamental para modelagem de dados relacionais, otimização de consultas e manutenção de integridade nas informações." 
  }
];

const otherTools = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "MySQL", icon: SiMysql },
  { name: "Firebase", icon: SiFirebase },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub }
];

export function Tech() {
  const [selectedTech, setSelectedTech] = useState<string>(mainTechs[0].id);

  const activeTech = mainTechs.find(t => t.id === selectedTech);

  return (
    <section id="tech" className="py-24 relative bg-background">
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Tech Stack</h2>
          <div className="w-16 h-0.5 bg-foreground mx-auto" />
          <p className="mt-6 text-foreground/60 max-w-2xl mx-auto font-light text-lg">
            Tecnologias e ferramentas que utilizo no desenvolvimento dos meus projetos, focando naquelas em que aplico em cenários reais.
          </p>
        </motion.div>

        {/* Principais Tecnologias (Interativas) */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-xl font-bold text-foreground mb-8 flex items-center justify-center gap-2">
            <Star size={20} className="text-foreground fill-foreground" />
            Principais Tecnologias
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-8">
            {mainTechs.map((tech) => {
              const isSelected = selectedTech === tech.id;
              const Icon = tech.icon;
              return (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTech(tech.id)}
                  className={`relative p-4 md:p-6 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 border 
                    ${isSelected 
                      ? "bg-foreground text-background shadow-lg shadow-black/10 border-foreground scale-[1.02]" 
                      : "bg-white text-foreground hover:bg-black/5 border-black/5 hover:border-black/15"
                    }`}
                >
                  <Icon size={32} className={`mb-3 ${isSelected ? 'opacity-100' : 'opacity-70'}`} />
                  <span className={`font-bold text-sm md:text-base tracking-tight ${isSelected ? '' : 'text-foreground/80'}`}>
                    {tech.name}
                  </span>
                  
                  {/* Arrow Indicator for selected */}
                  {isSelected && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-foreground"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Área de Detalhes da Tecnologia Selecionada */}
          <AnimatePresence mode="wait">
            {activeTech && (
              <motion.div
                key={activeTech.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                  <activeTech.icon size={160} />
                </div>
                
                <div className="relative z-10 max-w-3xl">
                  <h4 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                    <activeTech.icon size={28} />
                    {activeTech.name}
                  </h4>
                  <p className="text-foreground/70 text-lg leading-relaxed font-light mb-6">
                    {activeTech.description}
                  </p>
                  
                  <div className="bg-card p-5 rounded-xl border border-black/5 inline-block">
                    <span className="block text-xs font-bold uppercase tracking-wider text-foreground/50 mb-2">Projetos Relacionados</span>
                    <span className="font-medium text-foreground/90">{activeTech.projects}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Outras Ferramentas */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-foreground mb-8 flex items-center justify-center gap-2">
            <Wrench size={20} className="text-foreground" />
            Outras Ferramentas e Tecnologias
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {otherTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div 
                  key={tool.name}
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-xl border border-black/5 shadow-sm"
                >
                  <Icon size={18} className="text-foreground/70" />
                  <span className="text-sm font-medium text-foreground/80">{tool.name}</span>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
