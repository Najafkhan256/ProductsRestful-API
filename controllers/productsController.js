const ProductModel = require("../models/productModel");

const getAllProducts = async (req, res) => {
  const productsData = await ProductModel.find(req.query);
  res.status(200).json({ productsData });
};
const getAllProductsTesting = async (req, res) => {
  const productsData = await ProductModel.find(req.query);
  res.status(200).json({ productsData });
};

module.exports = { getAllProducts, getAllProductsTesting };
