import { Module } from '@nestjs/common';
import { PostONGModule } from './post_ong/post_ong.module';
import { GetONGModule } from './get_ong/get_ong.module';
import { EditONGModule } from './patch_ong/patch_ong.module';
import { GetONGInterestsModule } from './get_ong_interests/get_ong_interests.module';
import { LoginONGModule } from './login_ong/login_ong.module';
import { AddONGInterestModule } from './add_ong_interests/add_ong_interests.module';
import { GiveUpProductModule } from './desist_product/desist_product.module';


@Module({
  imports: [
    PostONGModule,
    GetONGModule,
    EditONGModule,
    GetONGInterestsModule,
    LoginONGModule,
    AddONGInterestModule,
    GiveUpProductModule
  ],
  controllers: [],
  providers: [],

})
export class OngModule { }