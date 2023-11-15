import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ONG, ONGSchema } from 'src/schemas/ong_schema';
import { GetOngController } from './get_ong.controller';
import { GetONGService } from './get_ong.service';

@Module({
  imports: [MongooseModule.forFeature([{name:ONG.name, schema:ONGSchema}])],
  controllers: [GetOngController],
  providers: [GetONGService],
})
export class GetONGModule{}