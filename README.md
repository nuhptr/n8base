# 🧩 n8base

A modern n8n automatization, component-driven web application built with **Next.js 15**, **React 19**, **Tailwind CSS v4**, **Radix UI**, and **shadcn/ui** — focused on scalability, performance, and experience.

---

## 🚀 Tech Stack

| Category             | Technology                                                                 |
| -------------------- | -------------------------------------------------------------------------- |
| Framework            | [Next.js 15](https://nextjs.org/)                                          |
| Language             | [TypeScript](https://www.typescriptlang.org/)                              |
| UI Library           | [React 19](https://react.dev/)                                             |
| Styling              | [Tailwind CSS v4](https://tailwindcss.com/docs/theme)                      |
| Components           | [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com) |
| Validation           | [Zod](https://zod.dev/) + [React Hook Form](https://react-hook-form.com/)  |
| Charts               | [Recharts](https://recharts.org/)                                          |
| Carousel             | [Embla Carousel](https://www.embla-carousel.com/)                          |
| Animations           | [tw-animate-css](https://www.npmjs.com/package/tw-animate-css)             |
| Linting & Formatting | [Biome](https://biomejs.dev/)                                              |
| Package Manager      | [Bun](https://bun.sh/)                                                     |

---

## 🧱 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/nuhptr/n8base.git
cd n8base
```

### Install Dependencies

```bash
bash bun install
```

### Add all shadcn components

```bash
bunx shadcn@latest add --all
```

## ⛳️ Prisma

Install dependencies

```bash
bun install prisma tsx --save-dev
bun install @prisma/client
```

Then init prisma

```bash
bunx prisma init
```

## 🧠 Form Handling & Validation

Use react-hook-form for form state management.
Integrate with zod for schema-based validation:

```ts
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
    email: z.string().email(),
})

const form = useForm({
    resolver: zodResolver(schema),
})
```

## 🧩 License

This project is licensed under the MIT License.
Feel free to use and modify it for your own projects.
