const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/cart", require("./routes/cartRoutes"));
app.use("/api/v1/order", require("./routes/orderRoutes"));
app.use("/api/v1/product", require("./routes/productRoutes"));

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("db  connection successful"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 2000, () =>
  console.log(`...listening to port ${process.env.PORT}`)
);
