import { Module } from '@nestjs/common';
import { GetProductsModule } from './get_product/get_product.module';
import { PatchProductModule } from './patch_product/patch_product.module';
import { DeleteProductModule } from './delete_product/delete_product.module';

@Module({
  imports: [
    GetProductsModule,
    PatchProductModule,
    DeleteProductModule
  ],
  controllers: [],
  providers: [],

})
export class ProductModule { }