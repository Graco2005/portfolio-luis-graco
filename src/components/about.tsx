"use client";

import { motion } from "framer-motion";
import { Code2, Target, Lightbulb } from "lucide-react";

const interests = [
  { icon: <Code2 className="text-foreground" size={20} />, title: "Desenvolvimento Web", desc: "Criando interfaces modernas e responsivas com React e Next.js." },
  { icon: <Lightbulb className="text-foreground" size={20} />, title: "Inteligência Artificial", desc: "Explorando Machine Learning e integração de LLMs em aplicações." },
  { icon: <Target className="text-foreground" size={20} />, title: "Arquitetura Limpa", desc: "Foco em código escalável, manutenível e boas práticas." },
];

export function About() {
  return (
    <section id="about" className="py-32 relative bg-card">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Sobre Mim</h2>
          <div className="w-16 h-0.5 bg-foreground mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 text-foreground/80 leading-relaxed text-lg font-light"
          >
            <p>
              Minha jornada na tecnologia começou com a curiosidade de entender como os softwares funcionam por baixo dos panos. Hoje, como estudante de Ciência da Computação, dedico meu tempo a transformar essa curiosidade em soluções reais e escaláveis.
            </p>
            <p>
              Meus principais objetivos profissionais envolvem me tornar um desenvolvedor Full Stack de alto nível, contribuindo para projetos de código aberto e criando produtos que melhorem a vida das pessoas. 
            </p>
            <p>
              Acredito que o aprendizado contínuo é a chave para a inovação. Por isso, estou sempre explorando novas linguagens, frameworks e paradigmas arquiteturais.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-4"
          >
            {interests.map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ x: 5 }}
                className="flex gap-5 p-6 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-card rounded-full border border-black/5 group-hover:border-black/20 transition-colors">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
