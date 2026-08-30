# Meu Portfólio Pessoal 🚀

Este é o meu portfólio pessoal, construído para demonstrar minhas habilidades, projetos, trajetória acadêmica e certificações na área de Tecnologia da Informação. O design possui uma estética **Minimalista Premium**, com foco em clean design (preto e branco), espaçamento e micro-interações elegantes.

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes ferramentas modernas do ecossistema front-end:

- **[React](https://reactjs.org/) & [Next.js](https://nextjs.org/)** - (App Router)
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilização utilitária
- **[Framer Motion](https://www.framer.com/motion/)** - Animações e transições fluidas
- **[Lucide React](https://lucide.dev/)** - Ícones
- **Integração com a API do GitHub** - Para exibição do perfil e projetos dinamicamente

## 🌟 Funcionalidades

- **Responsividade total:** Funciona perfeitamente em dispositivos móveis, tablets e desktops.
- **Animações fluidas:** Efeitos de hover sofisticados e transições macias via Framer Motion.
- **Integração Dinâmica com GitHub:** Puxa meus repositórios mais recentes e informações do meu perfil em tempo real.
- **Sistema de Filtro:** Para galerias de Projetos e Certificações.
- **Performance Optimizada:** Utilizando os melhores recursos de otimização de imagem e fontes do Next.js.

## 🚀 Como rodar localmente

Siga os passos abaixo para rodar o projeto na sua máquina:

1. **Clone o repositório:**
```bash
git clone https://github.com/Graco2005/portfolio-luis-graco.git
```

2. **Acesse a pasta do projeto:**
```bash
cd portfolio-luis-graco
```

3. **Instale as dependências:**
```bash
npm install
```

4. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado!

## 📝 Como personalizar os dados

Os dados do site estão estruturados diretamente nos componentes para facilitar a manutenção. Se você quiser usar este portfólio como base:

- **Projetos:** Edite a variável `projectsData` no arquivo `src/components/projects.tsx`.
- **Certificações:** Edite a variável `certificates` no arquivo `src/components/certifications.tsx`.
- **Linha do Tempo:** Edite a variável `timelineData` no arquivo `src/components/timeline.tsx`.
- **Currículo:** Substitua o arquivo `curriculo.pdf` dentro da pasta `public/`.
- **Github:** No arquivo `src/components/github.tsx`, procure por `Graco2005` e substitua pelo seu nome de usuário.

---
