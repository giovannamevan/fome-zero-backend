import { Module } from '@nestjs/common';
import { Donator, DonatorSchema } from 'src/schemas/donator_schema';
import { MongooseModule } from '@nestjs/mongoose';
import { EditDonatorService } from './patch_donator.service';
import { EditDonatorController } from './patch_donator.controller';
import { Product, ProductSchema } from 'src/schemas/product_schema';

@Module({
  imports: [MongooseModule.forFeature([{name:Donator.name, schema:DonatorSchema}]),
  MongooseModule.forFeature([{name:Product.name, schema:ProductSchema}])],
  controllers: [EditDonatorController],
  providers: [EditDonatorService],
})
export class EditDonatorModule{}