import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/schemas/product_schema';

Injectable()
export class DeleteProductService {
    constructor(
        @InjectModel(Product.name)
        private readonly deleteProductRepository: Model<Product>,
    ) { }

    async deleteProduct(idToDelete: string): Promise<Product> {
        const newONG = await this.deleteProductRepository.findByIdAndDelete(idToDelete)
        return newONG
    }
}