const Product = require("../DB/ProductModel.js")

const createProduct = async(req, res) => {
    const {name, price, category} = req.body;

    const data = new Product({name, price, category})
    await data.save()
    console.log(data)
}

const allProduct = async(req, res) => {
    const data = await Product.find()
    res.json({message: "All Products", data})
}

module.exports = {createProduct, allProduct}