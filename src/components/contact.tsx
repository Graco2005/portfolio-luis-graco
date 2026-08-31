"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "2a5b2857-9ac7-4dd2-bbf3-34b716134206",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Nova mensagem de ${formData.name} pelo Portfólio`,
          from_name: formData.name,
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Ocorreu um erro ao enviar. Tente novamente.");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Erro de conexão. Verifique sua internet e tente novamente.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Vamos Conversar?</h2>
          <div className="w-16 h-0.5 bg-foreground mx-auto" />
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">Informações de Contato</h3>
              <p className="text-foreground/60 font-light leading-relaxed">
                Sinta-se à vontade para entrar em contato. Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de trabalhar juntos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground/50 tracking-wide uppercase">Email</div>
                  <a href="mailto:luisgraconeto@gmail.com" className="text-foreground font-medium hover:underline">luisgraconeto@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground/50 tracking-wide uppercase">Localização</div>
                  <span className="text-foreground font-medium">Fortaleza, Ceará</span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-foreground/50 tracking-wide uppercase mb-4">Redes Sociais</div>
              <div className="flex gap-4">
                <a href="https://github.com/Graco2005" className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors duration-300">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/luis-capistrano-12a508366/" className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl border border-black/5 shadow-sm space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground/70">Seu Nome</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-card border border-black/5 rounded-xl focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                    placeholder="João Silva"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground/70">Seu Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-card border border-black/5 rounded-xl focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                    placeholder="joao@exemplo.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground/70">Sua Mensagem</label>
                <textarea 
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-card border border-black/5 rounded-xl focus:outline-none focus:ring-1 focus:ring-foreground transition-all resize-none"
                  placeholder="Olá, gostaria de falar sobre..."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button 
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full md:w-auto px-8 py-4 font-medium rounded-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] ${
                    status === "success" 
                      ? "bg-green-600 text-white" 
                      : status === "error" 
                      ? "bg-red-600 text-white" 
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  {status === "loading" ? (
                    <div className="w-5 h-5 border-2 border-background/20 border-t-background rounded-full animate-spin" />
                  ) : status === "success" ? (
                    "Mensagem Enviada com Sucesso!"
                  ) : status === "error" ? (
                    "Erro ao Enviar"
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>

                {status === "error" && errorMessage && (
                  <p className="text-sm text-red-500 font-medium">
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
