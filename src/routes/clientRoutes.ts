import { Router } from "express";
import { registerClient, getAllClients, getClientById } from "../controllers/clientControllers";

const router = Router();

// Ruta para registrar un nuevo cliente
router.post("/register", registerClient);

router.get("/", getAllClients);
router.get("/:id", getClientById);

export default router;
