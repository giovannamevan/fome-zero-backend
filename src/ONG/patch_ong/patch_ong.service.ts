import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EditONGDto } from 'src/DTO´s/edit_ong.dto';
import { ONG } from 'src/schemas/ong_schema';

@Injectable()
export class EditONGService {
  constructor(
    @InjectModel(ONG.name)
    private readonly loginONGModel: Model<ONG>,
  ) { }

  async editONG(ongData: EditONGDto): Promise<ONG> {
    const edittedONG = await this.loginONGModel.findByIdAndUpdate(ongData.ONGId, {...ongData}).exec()
    const ongToReturn = await this.loginONGModel.findById(ongData.ONGId)
    return ongToReturn
  }

}
