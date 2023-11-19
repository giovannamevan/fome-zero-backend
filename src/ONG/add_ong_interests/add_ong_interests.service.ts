import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ONG } from 'src/schemas/ong_schema';
import { Product } from 'src/schemas/product_schema';

Injectable()
export class PostONGInterestService {
    constructor(
        @InjectModel(ONG.name) private readonly postONGInterestRepository: Model<ONG>,
        @InjectModel(Product.name) private readonly getProductRepository: Model<Product>,
    ) { }

    async postOngInterest(product_id: string, ong_id: string): Promise<ONG> {
        const ongToUpdate = await this.postONGInterestRepository.findById(ong_id)
        const productToAdd = await this.getProductRepository.findById(product_id)
        ongToUpdate.interesses.forEach(interesse => {
            let alreadyThere = false
            if (interesse === productToAdd) {

                console.log("ja tem esse produto")
                alreadyThere = true
                return
            }
        })
        console.log("ja tem esse produto")
        ongToUpdate.interesses.push(productToAdd)
        await ongToUpdate.save()
        return ongToUpdate
    }
}