import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EditProductDto } from 'src/DTO´s/edit_product.dto';
import { Donator } from 'src/schemas/donator_schema';
import { Product } from 'src/schemas/product_schema';

@Injectable()
export class PatchProductService{
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
    @InjectModel(Donator.name) private donatorModel: Model<Donator>,
  ) {}

  async patchProduct(newInfo:EditProductDto): Promise<Product> {
    const donator = await this.donatorModel.findById(newInfo.donatorId);

    if (!donator) {
            throw new NotFoundException('Doador não encontrado');
    }

    const patchStruct:Partial<Product> = {
        endereco:donator.endereco,
        telefone_contato:donator.telefone,
        ...newInfo
    }

    await this.productModel.findByIdAndUpdate(newInfo.productId,patchStruct).populate('donator', 'ongs').exec()
    const patchedProduct = await this.productModel.findById(newInfo.productId).populate('donator', 'ongs')
    console.log(patchedProduct)
    return patchedProduct
  }

}

