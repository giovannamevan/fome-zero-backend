import { Module } from '@nestjs/common';
import { Donator, DonatorSchema } from 'src/schemas/donator_schema';
import { PostDonatorModule } from './post_donator/post_donator.module';
import { GetDonatorModule } from './get_donator/get_donator.module';
import { LoginDonatorModule } from './login_donator/login_donator.module';
import { GetDonatorProductsModule } from './get_donator_products/get_donator_products.module';
import { PostDonatorProductModule } from './post_donator_products/post_donator_products.module';
import { EditDonatorModule } from './patch_donator/patch_donator.module';


@Module({
  imports: [
  PostDonatorModule,
  GetDonatorModule,
  LoginDonatorModule,
  GetDonatorProductsModule,
  PostDonatorProductModule,
  EditDonatorModule],
  controllers: [],
  providers: [],
  
})
export class DonatorModule{}