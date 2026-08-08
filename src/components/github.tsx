"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, Users, BookOpen, Clock } from "lucide-react";
import { Github as GithubIcon } from "@/components/icons";
import Link from "next/link";

type GithubData = {
  followers: number;
  public_repos: number;
  avatar_url: string;
  login: string;
};

type RepoData = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
};

export function Github() {
  const [profile, setProfile] = useState<GithubData | null>(null);
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGithubData() {
      try {
        const username = "Graco2005";
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`)
        ]);

        if (profileRes.ok && reposRes.ok) {
          const profileData = await profileRes.json();
          const reposData = await reposRes.json();
          setProfile(profileData);
          setRepos(reposData);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do GitHub", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGithubData();
  }, []);

  return (
    <section className="py-24 relative bg-card">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <GithubIcon size={48} className="text-foreground" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Atividade no GitHub</h2>
          <div className="w-16 h-0.5 bg-foreground mx-auto" />
        </motion.div>

        {loading ? (
          <div className="flex justify-center">
            <div className="w-8 h-8 border-4 border-black/10 border-t-foreground rounded-full animate-spin" />
          </div>
        ) : profile ? (
          <div className="max-w-6xl mx-auto">
            {/* Profile Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl border border-black/5 shadow-sm mb-12"
            >
              <img 
                src={profile.avatar_url} 
                alt={profile.login} 
                className="w-24 h-24 rounded-full border border-black/10 grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold text-foreground tracking-tight">@{profile.login}</h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Users size={18} />
                    <span className="font-semibold text-foreground">{profile.followers}</span> seguidores
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <BookOpen size={18} />
                    <span className="font-semibold text-foreground">{profile.public_repos}</span> repositórios
                  </div>
                </div>
              </div>
              <Link
                href={`https://github.com/${profile.login}`}
                target="_blank"
                className="px-6 py-3 bg-white border border-black/10 hover:border-black/30 hover:bg-black/5 text-foreground font-medium rounded-full transition-all"
              >
                Ver Perfil Completo
              </Link>
            </motion.div>

            {/* Repos Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {repos.map((repo, i) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-black/5 hover:border-black/15 hover:shadow-md transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Link 
                      href={repo.html_url}
                      target="_blank"
                      className="text-xl font-bold text-foreground tracking-tight group-hover:text-foreground/80 transition-colors line-clamp-1"
                    >
                      {repo.name}
                    </Link>
                    <Link href={repo.html_url} target="_blank" className="text-foreground/40 hover:text-foreground">
                      <GithubIcon size={20} />
                    </Link>
                  </div>
                  
                  <p className="text-foreground/60 text-sm mb-6 flex-1 line-clamp-2 font-light">
                    {repo.description || "Nenhuma descrição fornecida."}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs font-semibold text-foreground/50 border-t border-black/5 pt-4">
                    <div className="flex items-center gap-4">
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
                          {repo.language}
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Star size={14} />
                        {repo.stargazers_count}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={14} />
                        {repo.forks_count}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
