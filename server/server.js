import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import md5 from "md5";
import { sendMail } from "./services/sendMail.js";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const prisma = new PrismaClient();
const port = process.env.PORT || 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.send("On the server");
});

app.get("/products", async (req, res) => {
  // findMany returns all the rows specified in arguments of function
  //as no argument is specified we get all rows
  try {
    const allProducts = await prisma.products.findMany({
      include: {
        product_details: {
          select: { brand_name: true, room_type: true },
        },
      },
    });

    res.send(allProducts);
  } catch (err) {
    if (err) console.error(err);
  }
});

app.get("/product_details/:sku", async (req, res) => {
  const value = String(req.params.sku);
  // in prisma we can call nested queries as tables are referenced ,we can also set which column to get
  // using select-true method
  try {
    const product_info = await prisma.products.findUnique({
      where: { sku: value },
      include: {
        product_details: true,
      },
    });

    res.send(product_info);
  } catch (err) {
    if (err) console.error(err);
  }
});

app.get("/related_products", async (req, res) => {
  const category = String(req.query.category);

  try {
    const related_items = await prisma.products.findMany({
      where: { category: category },
    });

    res.send(related_items);
  } catch (err) {
    if (err) console.error(err);
  }
});

app.get("/categories", async (req, res) => {
  try {
    const allCategories = await prisma.products.findMany({
      distinct: ["category"],
      select: { category: true },
    });

    res.send(allCategories);
  } catch (err) {
    if (err) console.error(err);
  }
});

app.get("/room_types", async (req, res) => {
  try {
    const allRooms = await prisma.product_details.findMany({
      distinct: ["room_type"],
      select: { room_type: true },
    });

    res.send(allRooms);
  } catch (err) {
    if (err) console.error(err);
  }
});

app.get("/brands", async (req, res) => {
  try {
    const allBrands = await prisma.product_details.findMany({
      distinct: ["brand_name"],
      select: { brand_name: true },
    });

    res.send(allBrands);
  } catch (err) {
    if (err) console.error(err);
  }
});

app.get("/getUser", async (req, res) => {
  const email = String(req.query.mail);

  try {
    const user_info = await prisma.users.findMany({
      where: { email: email },
    });

    res.send(user_info);
  } catch (err) {
    if (err) console.error(err);
  }
});

app.post("/new_user", async (req, res) => {
  const name = req.body.username.split(" ");
  const fname = name[0];
  const lname = name.length > 1 ? name[1] : name[0];
  const email = req.body.email;
  const pass = md5(req.body.pwd1);

  try {
    const userInserted = await prisma.users.create({
      data: {
        first_name: fname,
        last_name: lname,
        email: email,
        password_hash: pass,
        hasher: "md5",
      },
    });
    console.log(userInserted);

    res.send("Sign up successfull!.");
  } catch (err) {
    if (err) console.error(err);
  }
});

app.post("/user_login", (req, res) => {});

app.get("/sendmail", sendMail);

app.listen(port, () => console.log(`Server started at port ${port}`));

export default app;
