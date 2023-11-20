import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ONG, ONGSchema } from 'src/schemas/ong_schema';
import { GiveUpOnProductService } from './desist_product.service';
import { GiveUpProductController } from './desist_product.controller';
import { Product, ProductSchema } from 'src/schemas/product_schema';

@Module({
  imports: [MongooseModule.forFeature([{name:ONG.name, schema:ONGSchema}]),
    MongooseModule.forFeature([{name:Product.name, schema:ProductSchema}])],
  controllers: [GiveUpProductController],
  providers: [GiveUpOnProductService],
})
export class GiveUpProductModule{}