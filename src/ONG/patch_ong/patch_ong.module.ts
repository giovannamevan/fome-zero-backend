import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ONG, ONGSchema } from 'src/schemas/ong_schema';
import { GetOngController } from '../get_ong/get_ong.controller';
import { EditONGController } from './patch_ong.controller';
import { EditONGService } from './patch_ong.service';

@Module({
  imports: [MongooseModule.forFeature([{name:ONG.name, schema:ONGSchema}])],
  controllers: [EditONGController],
  providers: [EditONGService],
})
export class EditONGModule{}