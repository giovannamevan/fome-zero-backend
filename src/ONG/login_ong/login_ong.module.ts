import { Module } from '@nestjs/common';
import { Donator, DonatorSchema } from 'src/schemas/donator_schema';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginONGController } from './login_ong.controller';
import { LoginONGService } from './login_ong.service';
import { ONG, ONGSchema } from 'src/schemas/ong_schema';
import { ONGModule } from '../ONG.module';

@Module({
  imports: [MongooseModule.forFeature([{name:ONG.name, schema:ONGSchema}])],
  controllers: [LoginONGController],
  providers: [LoginONGService],
})
export class LoginONGModule{}