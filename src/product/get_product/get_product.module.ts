import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from 'src/schemas/product_schema';
import { GetProductsController } from './get_product.controller';
import { GetProductsServices } from './get_product.service';

@Module({
  imports: [MongooseModule.forFeature([{name:Product.name, schema:ProductSchema}])],
  controllers: [GetProductsController],
  providers: [GetProductsServices],
})
export class GetProductsModule{}