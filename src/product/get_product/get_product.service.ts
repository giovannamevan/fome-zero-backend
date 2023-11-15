import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/schemas/product_schema';

@Injectable()
export class GetProductsServices{
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) {}

  async findAllProducts(): Promise<Product[]> {
    const ongs = await this.productModel.find().populate('donator').populate('ongs').exec()
    return ongs
  }

  async findProductById(id: string): Promise<Product> {
    const populatedONG = await this.productModel.findById(id).populate('donator').populate('ongs').exec();
    return populatedONG;
  }
}
