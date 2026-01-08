import { defineConfig } from "prisma/config";
import { config } from "dotenv";

config();

export default defineConfig({
  migrations: {
    path: "prisma/migrations",
  },
});
