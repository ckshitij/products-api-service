import mongoose, { Schema, Document } from "mongoose";
import { IProduct, Category, Currency } from '../interfaces/products.intefaces';


type ProductDocument = IProduct & Document;

var productSchema = new Schema<ProductDocument>({
    name: { type: String, required: true, trim: true, unique: true },
    description: { type: String, required: true, trim: true },
    quantity: { type: String, required: true, min: 0 },
    category: {
        type: String,
        enum: Object.values(Category),
        required: true
    },
    isAvailable: { type: Boolean, default: true },
    price: { type: Number, required: true, min: 0 },
    currency: {
        type: String,
        enum: Object.values(Currency),
        required: true
    }
}, {
    timestamps: true
});

// Optional: Add an index for faster queries (e.g., on category)
productSchema.index({ category: 1 });

export const ProductModel = mongoose.model<ProductDocument>('Product', productSchema);
