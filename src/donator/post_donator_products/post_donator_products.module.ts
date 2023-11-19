import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Donator, DonatorSchema } from 'src/schemas/donator_schema';
import { Product, ProductSchema } from 'src/schemas/product_schema';
import { PostDonatorProductService } from './post_donator_products.service';
import { PostDonatorProductController } from './post_donator_products.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  MongooseModule.forFeature([{ name: Donator.name, schema: DonatorSchema }])],
  controllers: [PostDonatorProductController],
  providers: [PostDonatorProductService],
})
export class PostDonatorProductModule { }