import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Donator } from 'src/schemas/donator_schema';
import { ONG } from 'src/schemas/ong_schema';
import { Product } from 'src/schemas/product_schema';

@Injectable()
export class GetONGInterestsService{
  constructor(
    @InjectModel(ONG.name)
    private ONGModel: Model<ONG>,
  ) {}


  async findONGInterests(id: string): Promise<Product[]> {
    const foundONG = await this.ONGModel.findById(id).populate("produtos").exec();
    return foundONG.interesses
  }
}
