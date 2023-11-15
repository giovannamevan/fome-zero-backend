import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Donator, DonatorSchema } from 'src/schemas/donator_schema';
import { Product, ProductSchema } from 'src/schemas/product_schema';
import { PatchProductService } from './patch_product.service';
import { PatchProductController } from './patch_product.controller';
import { ONG, ONGSchema } from 'src/schemas/ong_schema';

@Module({
  imports: [ MongooseModule.forFeature([{name:Product.name, schema:ProductSchema}]),
    MongooseModule.forFeature([{name:Donator.name, schema:DonatorSchema}]),
    MongooseModule.forFeature([{name:ONG.name, schema:ONGSchema}])],
  controllers: [PatchProductController],
  providers: [PatchProductService],
})
export class PatchProductModule{}