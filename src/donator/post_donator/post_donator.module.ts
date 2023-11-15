import { Module } from '@nestjs/common';
import { Donator, DonatorSchema } from 'src/schemas/donator_schema';
import { PostDonatorController } from './post_donator.controller';
import { PostDonatorService } from './post_donator.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:Donator.name, schema:DonatorSchema}])],
  controllers: [PostDonatorController],
  providers: [PostDonatorService],
})
export class PostDonatorModule{}