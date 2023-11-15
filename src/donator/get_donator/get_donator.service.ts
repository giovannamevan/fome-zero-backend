import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Donator } from 'src/schemas/donator_schema';

@Injectable()
export class GetDonatorService {
  constructor(
    @InjectModel(Donator.name)
    private donatorModel: Model<Donator>,
  ) {}

  async findAllDonators(): Promise<Donator[]> {
    return await this.donatorModel.find().populate('produtos').exec();
  }

  async findDonatorById(id: string): Promise<Donator> {
    const populatedDonator = await this.donatorModel.findById(id).populate('produtos').exec();
    return populatedDonator;
  }
}
