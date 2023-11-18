import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ONG, ONGSchema } from 'src/schemas/ong_schema';
import { AddONGInterestsController } from './add_ong_interests.controller';
import { Product, ProductSchema } from 'src/schemas/product_schema';
import { PostONGInterestService } from './add_ong_interests.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: ONG.name, schema: ONGSchema }]),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
    ],
    controllers: [AddONGInterestsController],
    providers: [PostONGInterestService],
})
export class AddONGInterestModule { }