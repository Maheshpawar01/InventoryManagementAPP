import { Schema, model } from 'mongoose';


export interface IProduct {
name: string;
price: number;
stock: number;
category: string;
}


const ProductSchema = new Schema<IProduct>({
name: { type: String, required: true, trim: true },
price: { type: Number, required: true, min: 0 },
stock: { type: Number, required: true, min: 0 },
category: { type: String, required: true }
}, { timestamps: true });


export default model<IProduct>('Product', ProductSchema);