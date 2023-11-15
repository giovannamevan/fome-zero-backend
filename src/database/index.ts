import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://giovannamaria:Ladygio12!@cluster0.mhlgeri.mongodb.net/fome-zero-database')],
})
export class DatabaseModule{}
