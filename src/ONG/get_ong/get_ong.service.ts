import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ONG } from 'src/schemas/ong_schema';

@Injectable()
export class GetONGService {
  constructor(
    @InjectModel(ONG.name)
    private ONGModel: Model<ONG>,
  ) {}

  async findAllONGS(): Promise<ONG[]> {
    const ongs = await this.ONGModel.find().populate('interesses').exec()
    return ongs
  }

  async findONGById(id: string): Promise<ONG> {
    const populatedONG = await this.ONGModel.findById(id).populate('interesses').exec();
    return populatedONG;
  }
}
