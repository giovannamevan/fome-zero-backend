import { Injectable, NotFoundException } from '@nestjs/common';
import { Donator } from 'src/schemas/donator_schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewProductDto } from 'src/DTO´s/new_product.dto';
import { Product } from 'src/schemas/product_schema';



Injectable()
export class PostDonatorProductService{
    constructor(
        @InjectModel(Donator.name) private readonly donatorModel:Model<Donator>,
        @InjectModel(Product.name) private readonly productModel:Model<Product>
    ) {}
    
    async postDonatorProduct(postData:NewProductDto): Promise<Donator> {
        const donator = await this.donatorModel.findById(postData.donatorId);

        if (!donator) {
            throw new NotFoundException('Doador não encontrado');
        }

        const newProduct = new this.productModel({...postData,telefone_contato:donator.telefone, endereco:donator.endereco,donator:postData.donatorId })
        const savedProduct = await newProduct.save();
        donator.produtos.push(savedProduct)
        await donator.save()
        return donator
    }
}