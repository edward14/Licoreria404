import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI as string);
        console.log(`Conectado a la base de datos: ${conn.connection.host}`);
    } catch (error) {
        console.error("Error al conectar a la base de datos", error);
        process.exit(1);
    }
};

export default connectDB;
