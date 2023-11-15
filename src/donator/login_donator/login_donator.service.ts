import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Donator } from 'src/schemas/donator_schema';
import { LoginDonatorDTO } from '../../DTO´s/login_donator.dto';

@Injectable()
export class LoginDonatorService{
    constructor(
        @InjectModel(Donator.name)
        private readonly loginDonatorModel:Model<Donator>,
    ) {}

  async loginDonator(donatorData: LoginDonatorDTO): Promise<Donator> {
    
    return this.loginDonatorModel.findOne({email:donatorData.email,senha:donatorData.senha});
  }

}
