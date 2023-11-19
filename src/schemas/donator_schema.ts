import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Product } from './product_schema';
import * as mongoose from 'mongoose'

export type DonatorDocument = mongoose.HydratedDocument<Donator>

@Schema()
export class Donator {
  @Prop({ required: true })
  nome_empresa: string;

  @Prop({ required: true })
  endereco: string

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  telefone: string;

  @Prop({ required: true })
  senha: string;

  @Prop({ required: false })
  imagem: string;

  @Prop({ required: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
  produtos: Product[];
}

export const DonatorSchema = SchemaFactory.createForClass(Donator)