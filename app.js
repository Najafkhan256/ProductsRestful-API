require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connection");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
app.use(cors());
const PRODUCTS_ROUTES = require("./routes/productsRoute");
app.get("/", (req, res) => {
  res.send("HELLO FROM SERVER");
});

app.use("/api/products", PRODUCTS_ROUTES);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    // await PRODUCTS_ROUTES.deleteMany();
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  } catch (error) {
    console.error("👉", error);
  }
};

start();
