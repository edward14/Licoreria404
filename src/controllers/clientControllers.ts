import { Request, Response } from "express";
import Client from "../models/Client";

// Registrar un nuevo cliente
export const registerClient = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body;

        // Verificar si el correo ya está registrado
        const existingClient = await Client.findOne({ email });
        if (existingClient) {
            res.status(400).json({ message: "El correo electrónico ya está registrado" });
            return;
        }

        // Crear un nuevo cliente
        const newClient = new Client({ name, email, password });
        await newClient.save();
        res.status(201).json({ message: "Cliente registrado correctamente", client: newClient });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Error desconocido";
        res.status(500).json({ error: errorMessage });
    }
};

// Obtener todos los clientes
export const getAllClients = async (req: Request, res: Response): Promise<void> => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Error desconocido";
        res.status(500).json({ error: errorMessage });
    }
};

// Obtener un cliente por su ID
export const getClientById = async (req: Request, res: Response): Promise<void> => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            res.status(404).json({ message: "Cliente no encontrado" });
            return;
        }
        res.status(200).json(client);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Error desconocido";
        res.status(500).json({ error: errorMessage });
    }
};
