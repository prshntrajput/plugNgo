import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env' });

export default defineConfig({
  schema: "./db/schema.js",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://plugNgo_owner:AgqXQ5xywrh9@ep-empty-scene-a570tqo5.us-east-2.aws.neon.tech/plugNgo?sslmode=require",
  },
});