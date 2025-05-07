# 🪐 Astronautical Aurora – Task Manager

A lightweight task management app built with **Astro**, **Svelte**, **Prisma**, **Tailwind CSS**, and **Astro Actions**.

---

## 🚀 Features

- ✅ Create, update, delete tasks
- 🏷️ Filter by priority (LOW, MEDIUM, HIGH)
- 📅 Set due dates
- ✅ Mark tasks as completed
- ⚙️ Type-safe server actions with Zod
- 🔍 Fully typed Prisma ORM
- 🧪 Vitest unit testing
- 🧰 SQLite local DB (for simplicity)

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
git clone https://github.com/your-user/astronautical-aurora.git
cd astronautical-aurora

# 2. Install dependencies
npm install

# 4. Create the .env file with the following content:
'DATABASE_URL="file:./dev.db"'

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

# Open Prisma Studio to view/edit your local DB
npx prisma studio

# Build the optimized production version
npm run build
```
