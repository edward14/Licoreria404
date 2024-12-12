import mongoose, { Schema, Document } from "mongoose";

interface IProduct extends Document {
    name: string;
    category: string;
    price: number;
    stock: number;
    description: string;
    imageUrl?: string;
}

const ProductSchema: Schema = new Schema<IProduct>({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
});

export default mongoose.model<IProduct>("Product", ProductSchema);
