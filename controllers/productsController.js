const ProductModel = require("../models/productModel");

const getAllProducts = async (req, res) => {
  const { company } = req.query;
  let queryObj = {};
  try {
    if (company) {
      queryObj.company = company;
    }

    const productsData = await ProductModel.find(queryObj);
    res.status(200).json({ productsData });
  } catch (error) {
    console.log(error);
  }
};
const getAllProductsTesting = async (req, res) => {
  try {
    const productsData = await ProductModel.find(req.query);
    res.status(200).json({ productsData, totalProducts: productsData.length });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllProducts, getAllProductsTesting };
