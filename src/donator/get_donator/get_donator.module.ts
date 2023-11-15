import { Module } from '@nestjs/common';
import { Donator, DonatorSchema } from 'src/schemas/donator_schema';
import { GetDonatorService } from './get_donator.service';
import { GetDonatorController } from './get_donator.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:Donator.name, schema:DonatorSchema}])],
  controllers: [GetDonatorController],
  providers: [GetDonatorService],
})
export class GetDonatorModule{}