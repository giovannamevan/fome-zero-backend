import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from 'src/schemas/product_schema';
import { DeleteProductController } from './delete_product.controller';
import { DeleteProductService } from './delete_product.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
    controllers: [DeleteProductController],
    providers: [DeleteProductService],
})
export class DeleteProductModule { }