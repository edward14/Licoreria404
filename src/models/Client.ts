import mongoose, { Schema, Document } from "mongoose";

interface IClient extends Document {
    name: string;
    email: string;
    password: string;
}

const ClientSchema: Schema = new Schema<IClient>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

export default mongoose.model<IClient>("Client", ClientSchema);
