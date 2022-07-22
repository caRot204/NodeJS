import express from "express";
import { Add, List, Read } from "../controller/category";

const router = express.Router();

router.get("/category", List);
router.get("/category/:id", Read);
router.post("/category", Add);

export default router;