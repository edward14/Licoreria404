import { Router } from "express";
import { addProduct, getAllProducts } from "../controllers/productControllers";

const router = Router();

// Ruta para agregar un producto
router.post("/", addProduct);

// Ruta para obtener todos los productos
router.get("/", getAllProducts);

export default router;
