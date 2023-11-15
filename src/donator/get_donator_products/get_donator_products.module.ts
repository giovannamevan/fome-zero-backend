import { Module } from '@nestjs/common';
import { Donator, DonatorSchema } from 'src/schemas/donator_schema';
import { GetDonatorProductsService } from './get_donator_products.service';
import { GetDonatorProductsController } from './get_donator_products.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:Donator.name, schema:DonatorSchema}])],
  controllers: [GetDonatorProductsController],
  providers: [GetDonatorProductsService],
})
export class GetDonatorProductsModule{}