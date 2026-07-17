# Nome do Projeto

Breve descrição do sistema.

---

# Objetivo

Descreva o objetivo principal do sistema.

---

# Funcionalidades

Liste as principais funcionalidades do sistema

---

# Público-alvo

Descreva quem utilizará o sistema.

---

# Tecnologias Utilizadas

## Front-end

- React
- Tailwind CSS
- Vite
- ...

## Back-end

- Node.js
- Express
- Prisma ORM
- ...

## Banco de Dados

- MySQL
- XAMPP
- ...

---

# Arquitetura do Projeto

```
Projeto

- backend
  - prisma
  - src
    - controllers
    - routes
    - services
    - middlewares
    - models
    - server.js
  - package.json
  - .env

- frontend
  - public
  - src
    - assets
    - components
    - contexts
    - hooks
    - layouts
    - pages
    - routes
    - services
    - styles
    - App.jsx
  - package.json
  - vite.config.js

- README.md
```

---

# Requisitos

## Software

- Node.js
- npm
- Git
- XAMPP
- VS Code
- MySQL Workbench

---

## Instalar dependências

### Front-end

```bash
cd frontend
npm install
```

### Back-end

```bash
cd backend
npm install
```

---

# Configuração

## Arquivo .env

```env
DATABASE_URL=""
PORT=
```

---

# Banco de Dados

Nome do banco:
Usuário:
Senha:
Porta: 3306

# Scripts

## Front-end

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Back-end

```bash
npm install
npm run dev
```

Prisma

```bash
npx prisma generate
npx prisma migrate dev
npx prisma db push
npx prisma studio
```
