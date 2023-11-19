import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Donator } from 'src/schemas/donator_schema';
import { Product } from 'src/schemas/product_schema';

@Injectable()
export class GetDonatorProductsService {
  constructor(
    @InjectModel(Donator.name)
    private donatorModel: Model<Donator>,
  ) { }


  async findDonatorProducts(id: string): Promise<Product[]> {
    const foundDonator = await this.donatorModel.findById(id).populate("produtos").exec();
    return foundDonator.produtos
  }
}
