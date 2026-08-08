"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Frontend",
    items: [
      { name: "React", level: 90, desc: "Biblioteca para interfaces" },
      { name: "Next.js", level: 85, desc: "Framework React" },
      { name: "TypeScript", level: 80, desc: "Tipagem estática" },
      { name: "Tailwind CSS", level: 95, desc: "Estilização utilitária" },
      { name: "JavaScript", level: 90, desc: "Linguagem principal" },
      { name: "HTML/CSS", level: 95, desc: "Base da web" },
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 75, desc: "Ambiente de execução" },
      { name: "Python", level: 70, desc: "Scripts e IA" },
    ]
  },
  {
    title: "Banco de Dados",
    items: [
      { name: "PostgreSQL", level: 80, desc: "Relacional avançado" },
      { name: "MySQL", level: 75, desc: "Relacional padrão" },
    ]
  },
  {
    title: "Ferramentas & Outras",
    items: [
      { name: "Git / GitHub", level: 90, desc: "Versionamento" },
      { name: "VS Code", level: 95, desc: "Editor de código" },
      { name: "Figma", level: 60, desc: "Design de interfaces" },
      { name: "Docker", level: 65, desc: "Containers" },
      { name: "Linux", level: 75, desc: "Sistema Operacional" },
    ]
  }
];

export function Tech() {
  return (
    <section id="tech" className="py-24 relative bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Tecnologias</h2>
          <div className="w-16 h-0.5 bg-foreground mx-auto" />
          <p className="mt-6 text-foreground/60 max-w-2xl mx-auto font-light text-lg">
            Minhas ferramentas de trabalho. Estou sempre buscando me aprofundar nas tecnologias que utilizo e aprender novas que possam agregar valor aos projetos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl border border-black/5 hover:border-black/10 hover:shadow-sm transition-all"
            >
              <h3 className="text-xl font-bold mb-8 text-foreground tracking-tight">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.items.map((tech, techIndex) => (
                  <div key={tech.name} className="group">
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <div className="font-semibold text-foreground text-sm tracking-wide">{tech.name}</div>
                        <div className="text-xs text-foreground/50 mt-0.5">{tech.desc}</div>
                      </div>
                      <span className="text-xs font-bold text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-foreground rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (techIndex * 0.1), ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
