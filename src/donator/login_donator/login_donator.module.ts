import { Module } from '@nestjs/common';
import { Donator, DonatorSchema } from 'src/schemas/donator_schema';
import { LoginDonatorController } from './login_donator.controller';
import { LoginDonatorService } from './login_donator.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:Donator.name, schema:DonatorSchema}])],
  controllers: [LoginDonatorController],
  providers: [LoginDonatorService],
})
export class LoginDonatorModule{}