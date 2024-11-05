import express from "express";

import dotenv from "dotenv";

import { connectdb } from "./config/db.js";

import productRoutes from "./route/product.route.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
 

app.use(express.json());

app.use("/api/products",productRoutes);

app.listen(PORT, () => {
    connectdb();
    console.log("started at http://localhost:"+PORT);
});
