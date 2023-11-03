import express from "express";
import bodyParser from "body-parser";
import { pool } from "./db.js";
import cors from "cors";
import md5 from "md5";
import { sendMail } from "./services/sendMail.js";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const prisma = new PrismaClient();
const port = 3001;

const options = {
  origins: "http://localhost:3000",
};

app.use(cors(options));

app.get("/", (req, res) => {
  res.send("On the server");
});

app.get("/products", async (req, res) => {
  // findMany returns all the rows specified in arguments of function
  //as no argument is specified we get all rows
  const allProducts = await prisma.products.findMany();
  console.log(allProducts);
  res.send(allProducts);
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

app.get("/brands", async (req, res) => {
  pool.query(
    "select distinct brand_name from product_details",
    (err, result) => {
      if (err) throw err;
      res.send(result.rows);
    }
  );
});

app.get("/getUser", (req, res) => {
  const email = String(req.query.mail);
  pool.query(`select * from users where email = '${email}'`, (err, result) => {
    if (err) throw err;

    res.send(result.rows);
  });
});

app.post("/new_user", (req, res) => {
  const name = req.body.username.split(" ");
  const fname = name[0];
  const lname = name.length > 1 ? name[1] : name[0];
  const email = req.body.email;
  const pass = md5(req.body.pwd1);

  pool.query(
    "insert into users(first_name,last_name,email,password_hash,hasher) values($1,$2,$3,$4,$5)",
    [fname, lname, email, pass, "md5"],
    (err) => {
      if (err) throw err;

      res.send("User registered successfully. ");
    }
  );
});

app.post("/user_login", (req, res) => {});

app.get("/sendmail", sendMail);

app.listen(port, () => console.log(`Server started at port ${port}`));

export default app;
