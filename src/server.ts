import dotenv from "dotenv";
import connectDB from "./utils/db";  // Asegúrate de que este archivo de conexión esté correcto
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 5000;

// Conexión a la base de datos
connectDB();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
