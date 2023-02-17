require("dotenv").config();
const connectDB = require("./db/connection");
const ProductModel = require("./models/productModel");

const ProductJson = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await ProductModel.create(ProductJson);
    console.log("SUccess");
  } catch (error) {
    console.log(error);
  }
};

start();
