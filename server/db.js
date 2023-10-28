import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  min: 0,
  max: 5,
  acquireTimeoutMillis: 60000,
  idleTimeoutMillis: 600000,
});

pool.connect((err) => {
  if (err) throw err;

  console.log("Connected to database successfully!");
});
