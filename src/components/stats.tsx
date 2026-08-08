"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { FolderGit2, Award, Clock, Code } from "lucide-react";
import { Github } from "@/components/icons";

const statsData = [
  { label: "Projetos", value: 25, icon: <FolderGit2 className="text-foreground w-6 h-6" />, suffix: "+" },
  { label: "Certificados", value: 12, icon: <Award className="text-foreground w-6 h-6" />, suffix: "" },
  { label: "Horas de Estudo", value: 1500, icon: <Clock className="text-foreground w-6 h-6" />, suffix: "+" },
  { label: "Tecnologias", value: 15, icon: <Code className="text-foreground w-6 h-6" />, suffix: "+" },
  { label: "Contribuições", value: 450, icon: <Github className="text-foreground w-6 h-6" />, suffix: "+" },
];

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, inView, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Stats() {
  return (
    <section className="py-20 bg-background border-t border-b border-black/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-4 bg-white p-6 rounded-2xl border border-black/5 shadow-sm hover:shadow-md hover:border-black/10 transition-all min-w-[160px]"
            >
              <div className="p-3 bg-card rounded-xl border border-black/5">
                {stat.icon}
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-foreground tracking-tight flex items-center justify-center">
                  <Counter from={0} to={stat.value} />
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-xs font-semibold text-foreground/50 mt-1 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
