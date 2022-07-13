import express from 'express';
import { add, list } from '../controller/category';


const router = express.Router();

router.get("/category", list);
// router.get("/category/:id", read);
router.post("/category", add);


export default router; 