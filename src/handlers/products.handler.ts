import e, { NextFunction, Request, Response } from "express";
import { ProductModel } from '../models/products.model';
import mongoose from "mongoose";


export const createProducts = async (req: Request, response: Response, next: NextFunction) => {
    try {
        const product = new ProductModel(req.body);
        const result = await product.save();
        response.status(201).json(result);
    } catch (error) {
        // Check if it's a Mongoose ValidationError
        if (error instanceof mongoose.Error.ValidationError) {
            const messages = Object.values(error.errors).map(e => e.message);
            response.status(400).json({ error: 'Validation Failed', details: messages });
            return
        }
        
        // Handle Duplicate Key Error
        const mongoError = error as { code?: number; keyPattern?: Record<string, any> };
        if (mongoError.code === 11000) {
            const field = Object.keys(mongoError.keyPattern || {})[0];
            response.status(409).json({
                error: 'Duplicate Key',
                message: `An entry with the same '${field}' already exists.`,
            });
            return
        }
        next(error);
    }
};

export const getProducts = async (req: Request, response: Response, next: NextFunction) => {
    try {
        const { category } = req.query
        const filter: any = {}
        if (category) {
            filter.category = category;
        }
        var products = await ProductModel.find(filter);
        response.status(200).json(products)
    } catch (error) {
        next(error)
    }
}

export const getProductByID = async (req: Request, response: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        if (!id) {
            response.status(400).json({ message: "Product ID is required" });
            return
        }
        var product = await ProductModel.findById(id);
        response.status(200).json(product)
    } catch (error) {
        next(error)
    }
}

export const deleteProductByID = async (req: Request, response: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        if (!id) {
            response.status(400).json({ message: "Product ID is required" });
            return
        }

        const result = await ProductModel.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            response.status(404).json({ message: "Product not found" });
            return
        }

        response.sendStatus(204); // No Content, delete success
    } catch (error) {
        next(error);
    }
};