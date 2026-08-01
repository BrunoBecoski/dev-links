<h1 align="center">DevLinks</h1>

<p align="center">
 <img alt="cover" src=".github/cover.png" width="100%" />
</p>

> DevLinks é um agregador de links responsivos com a troca de tema (Dark / Light Mode) e gerenciamento de conteúdo dinâmico via arquivos Markdown.

<p align="center">
 <img alt="preview" src=".github/preview.gif" width="100%" />
</p>

## 🚀 Funcionalidades

- 📱 **Layout Totalmente Responsivo:** Adaptado para dispositivos móveis e desktop.
- 🌓 **Tema Claro/Escuro:** Alternância de temas com salvamento automático no `localStorage` para manter a preferência do usuário.
- 📝 **Conteúdo via Markdown:** Links e informações gerenciados através de arquivos Markdown tratados com `gray-matter`.

## ⚙️ Como Personalizar o Conteúdo

Você pode alterar todas as informações exibidas no app sem mexer no código da aplicação. Basta editar o arquivo `src/app/content.md`:

```yaml
---
  avatar: "/avatar.png"
  name: "@brunobecoski"
  links:
    - title: "Inscreva-se no NLW"
      url:  "/url"
    - title: "Baixe meu e-book"
      url: "/ebook" 
    - title: "Veja meu portfólio"
      url: "/portifolio" 
    - title: "Conheça meu curso"
      url: "/curso"
  socials:
    - name: "github"
      url: "/github"
    - name: "instagram"
      url: "/instagram" 
    - name: "youtube"
      url: "/youtube" 
    - name: "linkedin"
      url: "/linkedin" 
---
```

## 🛠️ Tecnologias e Ferramentas

- [Next.js 16](https://nextjs.org) - Framework React para alta performance e renderização otimizada
- [React 19](https://react.dev) - Biblioteca para construção de interfaces
- [TypeScript](https://www.typescriptlang.org) - Tipagem estática para JavaScript
- [Tailwind CSS v4](https://tailwindcss.com) - Estilização baseada em utilitários
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Parser para leitura de dados de front-matter em arquivos Markdown

## 🚀 Como Executar o Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
* [Node.js](https://nodejs.org/)
* [PNPM](https://pnpm.io/)

### Passo a Passo

1. **Clone o repositório:**
  ```bash
    git clone https://github.com/BrunoBecoski/dev-links
    cd dev-links
  ```

2.  **Instale as dependências:**
  ```bash
    pnpm install
  ```

3.  **Inicie o servidor de desenvolvimento:**
  ```bash
    pnpm dev
  ```

Acesse http://localhost:3000 no seu navegador para ver a aplicação rodando.
