import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  acquireTimeoutMillis: 6000,
  idleTimeoutMillis: 60000,
});

pool.connect((err) => {
  if (err) throw err;

  console.log("Connected to database successfully!");
});
