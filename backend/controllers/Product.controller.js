import Product from "../models/Product.model.js";
import mongoose from 'mongoose';


export const getProducts = async (req, res) => {
    try {
        const allProducts = await Product.find({});
        res.status(200).json({
            success: true,
            data: allProducts
        })
    } catch (error) {
        console.log("error in get api", error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}

export const createProduct = async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({
            success: false,
            message: "Please provide all field"
        })
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({
            success: true,
            data: newProduct
        })
    } catch (error) {
        console.error("error in create product", error)
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            success: false,
            message: "Product Not Found"
        })
    }
    try {
        if (id) {
            await Product.findByIdAndDelete(id)
            return res.status(200).json({
                success: true,
                message: "Product deleted successfully"
            })
        }

    } catch (error) {
        console.log("error in delete", error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            success: false,
            message: "Product Not Found"
        })
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({
            success: true,
            data: updatedProduct
        })
    } catch (error) {
        console.log("error in update api", error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}