# 🪐 Astronautical Aurora – Task Manager

A lightweight task management app built with **Astro**, **Svelte**, **Prisma**, **Tailwind CSS**, and **Astro Actions**.

---

## 🚀 Features

- Create, update, delete tasks
- Filter by priority (LOW, MEDIUM, HIGH)
- Set due dates
- Mark tasks as completed
- Type-safe server actions with Zod
- Fully typed Prisma ORM
- Vitest unit testing
- SQLite local DB (for simplicity)

---

## 🛠️ Tech Stack

- [Astro](https://astro.build/)
- [Svelte](https://svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma ORM](https://www.prisma.io/)
- [Zod](https://github.com/colinhacks/zod)
- [Vitest](https://vitest.dev/)

---

## 📦 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/AlexandraBeseda/astronautical-aurora.git
cd astronautical-aurora

# 2. Install dependencies
npm install

# 4. Create the .env file with the following content:
'DATABASE_URL="file:./dev.db"'
'OPENAI_API_KEY="sk-proj..."'
#check your billing plan on openAI

# 5. Generate Prisma client from schema
npx prisma generate

# 6. Run DB migrations and start local SQLite DB
npx prisma migrate dev --name init
#If the dev.db file is not created, create it manually in the project root or at the path specified in DATABASE_URL and repeat the command:
# npx prisma migrate dev --name init

# 7. Start the development server
npm run dev

# Run unit tests using Vitest
npm run test

# Open Prisma Studio to view/edit your local DB on localhost:5000
npx prisma studio

# Build the optimized production version
npm run build


## Developer Notes

About the tech stack — I didn’t know most of the tools before,
but setting everything up turned out to be fast and easy.
I managed to install all the dependencies and configure the project quickly.
Good documentation, YouTube tutorials, and ChatGPT with the right prompts helped a lot.

The most difficult part was functionality updating an existing task.
I used to work with React, so at first, I wanted to use client-side navigation like in React.
But this project uses server-side rendering (SSR), so I had to change how I think about page updates.
After watching a few examples on YouTube, I understood how to do it, and it became much easier.

For the UI, Tailwind CSS was also quite easy to use.
With a few ChatGPT tips, I could build the layout without problems.

Overall, this was a very interesting task.
I had never used Tailwind CSS, Svelte, Astro, SQLite, or Prisma before, but everything was simpler than I expected.

The OpenAI integration was quick because I had some experience with it before.
The only issue now is that I don’t have a paid OpenAI key.
If you also don’t have one, I’ve added a commented-out fallback in the code.

```
