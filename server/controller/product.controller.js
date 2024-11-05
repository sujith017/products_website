import Product from "../models/product.model.js";
import mongoose from "mongoose";



export const  getproduct = async (req,res) =>{
    try {
        const Products = await Product.find({});
        res.status(200).json(Products);
    } catch (error) {
        console.log("faild to fetch products ", error.message);
        res.status(400).json({message:"error"});        
    }
}



export const postproduct = async(req, res) => {
    const product = req.body;
    console.log(product);
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({message: "All fields are required"});
    }
    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message:"server error"});
        
    }
}



export const deleteproduct = async(req, res) => {
    const {id} = req.params;
    console.log("id:",id);
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("No product with that id");
    }
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({message:"deleted"});
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message:"server error"});
    }
}



export const putproduct = async (req, res) => {
    const {id} = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("No product with that id");
    }
    try {
        
        const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true});
      
    } catch (error) {
        res.status(500).json({message:"server error"});
    }
}