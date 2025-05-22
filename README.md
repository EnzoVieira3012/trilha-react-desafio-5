# Meu Blog em Next.js 🚀

# Instruções para criar e rodar o projeto de forma simples e rápida.

# Passo 1: Clonar o Repositório
git clone https://github.com/seu-usuario/meu-blog.git
cd meu-blog

# Passo 2: Instalar Dependências
npm install
# ou (se preferir usar Yarn)
yarn install

# Passo 3: Rodar o Projeto Localmente
npm run dev
# Acesse o projeto no navegador: http://localhost:3000

# Passo 4: Estrutura de Diretórios
# Aqui está como o projeto está organizado:
# ├── components/         # Componentes reutilizáveis
# │   ├── Footer.js       # Rodapé do site
# │   ├── Header.js       # Cabeçalho do site
# │   └── Layout.js       # Layout principal do site
# ├── pages/              # Arquivos de páginas
# │   ├── posts/          # Páginas dinâmicas de posts
# │   │   └── [id].js     # Página de post individual
# │   ├── _app.js         # Componente raiz do Next.js
# │   └── index.js        # Página inicial do blog
# ├── public/             # Arquivos estáticos (imagens, ícones, etc.)
# ├── styles/             # Arquivos de estilos globais
# │   └── globals.css     # Estilização global com Tailwind CSS
# └── utils/              # Funções utilitárias (opcional)

# Passo 5: Deploy Fácil

## Deploy na Vercel
# Faça login na Vercel e conecte o repositório:
# 1. Acesse https://vercel.com/
# 2. Clique em "New Project" e conecte seu repositório.
# 3. Clique em "Deploy".

## Deploy na Netlify
# Faça login na Netlify e conecte o repositório:
# 1. Acesse https://netlify.com/
# 2. Clique em "Add New Site" e conecte seu repositório.
# 3. Clique em "Deploy".

# Passo 6: Configurações Adicionais

## Configurar o Tema Claro/Escuro
# O projeto já suporta tema claro/escuro. Você pode alternar clicando no botão no canto superior direito.

## Adicionar Novos Posts
# Os posts estão localizados na pasta `/posts`. Para adicionar um novo post:
# 1. Crie um novo arquivo .mdx na pasta `/posts`.
# 2. Use o formato abaixo para o conteúdo:
# ---
# title: "Título do Post"
# description: "Descrição do Post"
# date: "2023-01-01"
# ---
# Conteúdo do post aqui.

# Passo 7: Licença
# Este projeto está sob a licença MIT.
# Você pode usá-lo, modificá-lo e distribuí-lo livremente.

# Pronto! 🚀 Seu blog já está funcionando.