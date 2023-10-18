import express from "express";
import bodyParser from "body-parser";
import pkg from "pg";
import cors from "cors";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const port = 3001;

const options = {
  origins: "http://localhost:3000",
};

app.use(cors(options));

const { Client } = pkg;
const client = new Client({
  user: "postgres",
  password: "2009anshulab",
  host: "localhost",
  database: "FurniroDB",
  port: 5432,
});

client.connect((err) => {
  if (err) throw err;

  console.log("Connected to database successfully!");
});

app.get("/products", (req, res) => {
  client.query("select * from products", (err, result) => {
    if (err) throw err;
    res.send(result.rows);
  });
});

app.get("/product_details/:sku", (req, res) => {
  const value = String(req.params.sku);
  client.query(
    `select * from products a inner join product_details b on a.sku = b.sku where a.sku = '${value}'`,
    (err, result) => {
      if (err) throw err;
      res.send(result.rows);
    }
  );
});

app.get("/related_products", (req, res) => {
  const category = String(req.query.category);
  const sku = String(req.query.sku);

  client.query(
    `Select * from products where category = '${category}'`,
    (err, result) => {
      if (err) throw err;
      res.send(result.rows);
    }
  );
});

app.listen(port, () => console.log(`Server started at port ${port}`));
