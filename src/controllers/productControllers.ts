import { Request, Response } from "express";
import Product from "../models/Product";

// Controlador para agregar un producto
export const addProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, category, price, stock, description, imageUrl } = req.body;
        
        const newProduct = new Product({ name, category, price, stock, description, imageUrl });
        await newProduct.save();
        
        res.status(201).json({ message: "Producto creado correctamente", product: newProduct });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Error desconocido";
        res.status(500).json({ error: errorMessage });
    }
};

// Controlador para obtener todos los productos
export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Error desconocido";
        res.status(500).json({ error: errorMessage });
    }
};
