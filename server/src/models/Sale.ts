import { Schema, model } from 'mongoose';
import { Types } from 'mongoose';


export interface ISale {
product: Types.ObjectId;
quantity: number;
totalPrice: number;
date: Date;
}


const SaleSchema = new Schema<ISale>({
product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
quantity: { type: Number, required: true, min: 1 },
totalPrice: { type: Number, required: true, min: 0 },
date: { type: Date, default: Date.now }
});


export default model<ISale>('Sale', SaleSchema);