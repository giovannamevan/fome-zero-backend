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

    async postOngInterest(product_id: string, ong_id: string): Promise<ONG | false> {
        const ongToUpdate = await this.postONGInterestRepository.findById(ong_id)
        const productToAdd = await this.getProductRepository.findById(product_id)
        let alreadyThere = false
        ongToUpdate.interesses.forEach(interesse => {
            if (interesse === productToAdd) {

                console.log("ja tem esse produto")
                alreadyThere = true
                return
            }
        })
        console.log("ja tem esse produto")
        if (!alreadyThere) {
            ongToUpdate.interesses.push(productToAdd)
            await ongToUpdate.save()
            return ongToUpdate

        }
        return false 
    }
}