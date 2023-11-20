import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/schemas/product_schema';
import { ONG } from 'src/schemas/ong_schema';



Injectable()
export class GiveUpOnProductService{
    constructor(
        @InjectModel(ONG.name) private readonly ongModel:Model<ONG>,
        @InjectModel(Product.name) private readonly productModel:Model<Product>
    ) {}
    
    async GiveUpOnProduct(productId:string,ongId:string): Promise<ONG> {
        const ong = await this.ongModel.findById(ongId);
        const product = await this.productModel.findById(productId)

        if (!ong) {
            throw new NotFoundException('ONG não encontrado');
        }
        ong.interesses.splice(ong.interesses.indexOf(product),1)
        await ong.save();
        return ong
    }
}