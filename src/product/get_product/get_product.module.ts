import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from 'src/schemas/product_schema';
import { GetProductsController } from './get_product.controller';
import { GetProductsServices } from './get_product.service';
import { ONG, ONGSchema } from 'src/schemas/ong_schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  MongooseModule.forFeature([{ name: ONG.name, schema: ONGSchema }])],
  controllers: [GetProductsController],
  providers: [GetProductsServices],
})
export class GetProductsModule { }