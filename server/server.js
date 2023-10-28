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

app.post("/signUp_form", async (req, res) => {
  const name = tokenizeString(req.body.username);
  const password = md5(req.body.pwd1);
  const email = req.body.email;
  var isPresent;

  console.log(name + " " + password + " " + email);
  // we execute 2 queries here to update our tables
  // first query to check wther a user is already present with a given account
  pool.query(`select * from users where email = '${email}'`, (result, err) => {
    if (err) throw err;
    console.log(result.rows[0]);
    isPresent = result.rows[0];
  });

  // other queries to update in table
  // if isPresent is undefined insert (undefined !== null)
  if (isPresent) res.send("Account already registered.");
  else {
    pool.query(
      `insert into users(firstname,lastname,email) values($1,$2,$3)`,
      [name[0], name.length > 1 ? name[1] : name[0], email],
      (err) => {
        if (err) throw err;
      }
    );
  }

  // now fetch uuid from users and insert pass in credentials
  var user;
  pool.query(
    `insert into credentials(hasher,password_hash) values($1,$2)`,
    ["md5", password],
    (err, result) => {
      if (err) throw err;
      console.log(result.rows[0]);
    }
  );
});

app.listen(port, () => console.log(`Server started at port ${port}`));
