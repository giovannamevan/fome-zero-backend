import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ONG, ONGSchema } from 'src/schemas/ong_schema';
import { GetONGInterestsController } from './get_ong_interests.controller';
import { GetONGInterestsService } from './get_ong_interests.service';

@Module({
  imports: [MongooseModule.forFeature([{name:ONG.name, schema:ONGSchema}])],
  controllers: [GetONGInterestsController],
  providers: [GetONGInterestsService],
})
export class GetONGInterestsModule{}