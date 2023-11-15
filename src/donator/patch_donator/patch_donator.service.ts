import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EditDonatorDto } from 'src/DTO´s/edit_donator.dto';
import { Donator } from 'src/schemas/donator_schema';
import { Product } from 'src/schemas/product_schema';

@Injectable()
export class EditDonatorService{
    constructor(
        @InjectModel(Donator.name) private readonly editDonatorModel:Model<Donator>,
        @InjectModel(Product.name) private readonly productModel:Model<Product>,
    ) {}

  async editDonator(donatorData: EditDonatorDto): Promise<Donator> {
    await this.editDonatorModel.findByIdAndUpdate(donatorData.donatorId,donatorData).exec()
    const edittedDonator = await this.editDonatorModel.findById(donatorData.donatorId)
    const patchProducts:Partial<Product> = {
      donator:edittedDonator.id,
      endereco:edittedDonator.endereco,
      telefone_contato:edittedDonator.telefone
    }
    await this.productModel.updateMany({donator:donatorData.donatorId},patchProducts)
    return edittedDonator
  }

}
