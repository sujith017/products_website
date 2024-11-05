import express from "express";

import { getproduct, postproduct, deleteproduct , putproduct} from "../controller/product.controller.js";

const router = express.Router();


router.get("/" ,getproduct);

router.post("/", postproduct);

router.delete("/:id", deleteproduct);

router.put("/:id", putproduct);

export default router;