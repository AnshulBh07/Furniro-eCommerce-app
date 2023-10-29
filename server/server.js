import express from "express";
import bodyParser from "body-parser";
import { pool } from "./db.js";
import cors from "cors";
import { tokenizeString } from "./services/tokenize.js";
import md5 from "md5";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const port = 3001;

const options = {
  origins: "http://localhost:3000",
};

app.use(cors(options));

app.get("/", (req, res) => {
  res.send("On the server");
});

app.get("/products", async (req, res) => {
  await pool.query("select * from products", (err, result) => {
    if (err) throw err;
    res.send(result.rows);
  });
});

app.get("/product_details/:sku", async (req, res) => {
  const value = String(req.params.sku);
  await pool.query(
    `select * from products a inner join product_details b on a.sku = b.sku where a.sku = '${value}'`,
    (err, result) => {
      if (err) throw err;
      res.send(result.rows);
    }
  );
});

app.get("/related_products", async (req, res) => {
  const category = String(req.query.category);

  await pool.query(
    `Select * from products where category = '${category}'`,
    (err, result) => {
      if (err) throw err;
      res.send(result.rows);
    }
  );
});

app.get("/categories", async (req, res) => {
  await pool.query("select distinct category from products", (err, result) => {
    if (err) throw err;
    res.send(result.rows);
  });
});

app.get("/room_types", async (req, res) => {
  pool.query(
    "select distinct room_type from product_details",
    (err, result) => {
      if (err) throw err;
      res.send(result.rows);
    }
  );
});

app.listen(port, () => console.log(`Server started at port ${port}`));
