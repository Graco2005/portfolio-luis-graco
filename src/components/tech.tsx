"use client";

import { motion } from "framer-motion";
import { Code2, LayoutTemplate, Server, Smartphone, Database, Wrench, Star } from "lucide-react";

type TechItem = {
  name: string;
  icon: any;
  projects?: string;
  isMain?: boolean;
};

type TechCategory = {
  title: string;
  items: TechItem[];
};

const techCategories: TechCategory[] = [
  {
    title: "Linguagens",
    items: [
      { name: "Python", icon: Code2, projects: "Chatbot de Atendimento · Automação", isMain: true },
      { name: "JavaScript", icon: Code2, projects: "E-Commerce · Dashboard", isMain: true },
      { name: "Java", icon: Code2, projects: "Sistema de Reservas", isMain: true },
      { name: "SQL", icon: Database, projects: "Consultas · Migrações", isMain: true },
    ]
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: LayoutTemplate, projects: "E-Commerce · Dashboard", isMain: true },
      { name: "Next.js", icon: LayoutTemplate, projects: "E-Commerce" },
      { name: "HTML", icon: LayoutTemplate },
      { name: "CSS", icon: LayoutTemplate },
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: Server, projects: "API de Autenticação" },
      { name: "Spring Boot", icon: Server, projects: "Sistema de Reservas" },
      { name: "APIs REST", icon: Server, projects: "Múltiplos projetos" },
      { name: "LangChain", icon: Server, projects: "Chatbot IA" },
    ]
  },
  {
    title: "Mobile",
    items: [
      { name: "React Native", icon: Smartphone, projects: "App de Finanças" },
      { name: "Expo", icon: Smartphone, projects: "App de Finanças" },
    ]
  },
  {
    title: "Banco de Dados",
    items: [
      { name: "MySQL", icon: Database, projects: "Sistema de Reservas" },
      { name: "Firebase", icon: Database, projects: "App de Finanças" },
    ]
  },
  {
    title: "Ferramentas",
    items: [
      { name: "Git", icon: Wrench },
      { name: "GitHub", icon: Wrench },
      { name: "VS Code", icon: Wrench },
      { name: "IntelliJ IDEA", icon: Wrench },
      { name: "GitHub Codespaces", icon: Wrench },
    ]
  }
];

export function Tech() {
  // Coletar as tecnologias principais
  const mainTechs = techCategories
    .flatMap((cat) => cat.items)
    .filter((tech) => tech.isMain);

  return (
    <section id="tech" className="py-24 relative bg-background">
      <div className="container mx-auto px-4 md:px-6">
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

        {/* Principais Tecnologias (Destaque) */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Star size={20} className="text-foreground fill-foreground" />
            Principais Tecnologias
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {mainTechs.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-foreground text-background p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg shadow-black/10 cursor-default"
              >
                <tech.icon size={32} strokeWidth={1.5} className="mb-4 opacity-90" />
                <span className="font-bold text-lg tracking-tight">{tech.name}</span>
                {tech.projects && (
                  <span className="text-xs text-background/70 mt-2 font-medium line-clamp-2">
                    {tech.projects}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Grade de Categorias */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12 max-w-6xl mx-auto">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            >
              <h3 className="text-lg font-bold mb-6 text-foreground/80 tracking-wide uppercase text-sm border-b border-black/5 pb-2">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.03 }}
                    className="group bg-white p-4 rounded-xl border border-black/5 hover:border-black/20 hover:shadow-md flex flex-col cursor-default"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-card rounded-lg text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                        <tech.icon size={18} />
                      </div>
                      <span className="font-semibold text-foreground text-sm">
                        {tech.name}
                      </span>
                    </div>
                    {tech.projects && (
                      <div className="text-xs text-foreground/50 font-medium pl-11 group-hover:text-foreground/70 transition-colors duration-300 line-clamp-1">
                        {tech.projects}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
