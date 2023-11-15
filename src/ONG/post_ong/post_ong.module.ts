import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ONG, ONGSchema } from 'src/schemas/ong_schema';
import { PostONGController } from './post_ong.controller';
import { PostONGService } from './post_ong.service';

@Module({
  imports: [MongooseModule.forFeature([{name:ONG.name, schema:ONGSchema}])],
  controllers: [PostONGController],
  providers: [PostONGService],
})
export class PostONGModule{}