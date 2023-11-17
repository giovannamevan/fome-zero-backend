import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginONGController } from './login_ong.controller';
import { LoginONGService } from './login_ong.service';
import { ONG, ONGSchema } from 'src/schemas/ong_schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ONG.name, schema: ONGSchema }])],
  controllers: [LoginONGController],
  providers: [LoginONGService],
})
export class LoginONGModule { }