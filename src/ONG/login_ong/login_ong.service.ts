import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDonatorDTO } from '../../DTO´s/login_donator.dto';
import { ONG } from 'src/schemas/ong_schema';
import { LoginONGDto } from 'src/DTO´s/login_ong.dto';

@Injectable()
export class LoginONGService{
    constructor(
        @InjectModel(ONG.name)
        private readonly loginONGodel:Model<ONG>,
    ) {}

  async loginONG(donatorData: LoginONGDto): Promise<ONG> {
    
    return this.loginONGodel.findOne({email:donatorData.email,senha:donatorData.senha});
  }

}

