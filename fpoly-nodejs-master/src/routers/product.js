import express from "express";
import { Add, List, Read, Remove, Update } from "../controller/product";

const router = express.Router();

router.get("/products", List);
router.get("/products/:id", Read);
router.post("/products", Add);
router.delete("/products/:id", Remove);
router.patch("/products/:id", Update)

export default router;