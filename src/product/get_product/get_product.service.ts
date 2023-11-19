import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ONG } from 'src/schemas/ong_schema';
import { Product } from 'src/schemas/product_schema';

@Injectable()
export class GetProductsServices {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
    @InjectModel(ONG.name) private ongModel: Model<ONG>,
  ) { }

  async findAllProducts(): Promise<Product[]> {
    const products = await this.productModel.find().populate('donator').populate('ongs').exec()
    return products
  }

  async findProductById(id: string): Promise<Product> {
    const populatedProduct = await this.productModel.findById(id).populate('donator').populate('ongs').exec();
    return populatedProduct;
  }

  async findAvailableProducts(): Promise<Product[]> {
    const allOngs = await this.ongModel.find().populate('interesses')
    let allInterests = []
    allOngs.forEach(ong => {
      ong.interesses.forEach(interesse => {
        allInterests.push(interesse)
      })
    })

    const allProducts = await this.findAllProducts()
    const filteredProducts = allProducts.filter(product => allInterests.indexOf(product) === -1)
    return filteredProducts

  }

}