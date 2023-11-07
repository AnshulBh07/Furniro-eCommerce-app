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
const port = 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.send("On the server");
});

app.get("/api/products", async (req, res) => {
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

app.get("/api/product_details/:sku", async (req, res) => {
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

app.get("/api/related_products", async (req, res) => {
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

app.get("/api/categories", async (req, res) => {
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

app.get("/api/room_types", async (req, res) => {
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

app.get("/api/brands", async (req, res) => {
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

app.get("/api/getUser", async (req, res) => {
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

app.post("/api/new_user", async (req, res) => {
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

    res.send("Sign up successfull!.");
  } catch (err) {
    if (err) console.error(err);
  }
});

app.get("/api/user_address", async (req, res) => {
  const { user_id } = req.query;

  try {
    const all_adresess = await prisma.address.findMany({
      where: { user_id: user_id },
    });
    res.send(all_adresess);
  } catch (err) {
    console.error(err);
  }
});

// request to update user details
app.patch("/api/update_user", async (req, res) => {
  const { username, mobile, dob, company, bio, user_id } = req.body;
  const name_arr = username.split(" ");
  const date = new Date(dob);
  console.log(date);

  try {
    const update_user_details = await prisma.users.update({
      where: { user_id: user_id },
      data: {
        first_name: name_arr[0],
        last_name:
          name_arr[0] !== name_arr[1] && name_arr[1].length > 0
            ? name_arr[1]
            : "",
        phone: mobile,
        company: company,
        bio: bio,
        dob: date,
      },
    });

    res.send("ok");
  } catch (err) {
    console.error(err);
  }
});

// to insert new address related to a user_id
app.put("/api/add_address", async (req, res) => {
  const {
    username,
    mobile,
    zipcode,
    address_line1,
    address_line2,
    country,
    state,
    city,
    type,
    use_default,
    user_id,
  } = req.body;
  const pin = Number(zipcode);

  try {
    const result = await prisma.address.create({
      data: {
        user_id: user_id,
        name: username,
        mobile_no: mobile,
        address_line1: address_line1,
        address_line2: address_line2,
        pin_code: pin,
        country: country,
        state: state,
        city: city,
        type: type,
        use_default: use_default,
      },
    });
    res.send("ok");
  } catch (err) {
    console.error(err);
  }
});

// a simple delete request to delete the address
app.delete("/api/delete_address", async (req, res) => {
  //the ordering of req,res does matter in function arguments
  const { address_id } = req.query;
  const id = Number(address_id);

  try {
    const result = await prisma.address.delete({
      where: { address_id: id },
    });

    res.send("deleted");
  } catch (err) {
    console.error(err);
  }
});

app.get("/api/sendmail", sendMail);

app.listen(port, () => console.log(`Server started at port ${port}`));

export default app;
