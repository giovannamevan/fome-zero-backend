import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Product } from './product_schema';
import * as mongoose from 'mongoose'

export type DonatorDocument = mongoose.HydratedDocument<Donator>

@Schema()
export class Donator {
  @Prop({ required: false })
  nome_empresa: string;

  @Prop({ required: false })
  endereco: string

  @Prop({ required: false })
  email: string;

  @Prop({ required: false })
  telefone: string;

  @Prop({ required: false })
  senha: string;

  @Prop({ required: false })
  imagem: string;

  @Prop({ required: false, type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
  produtos: Product[];
}

export const DonatorSchema = SchemaFactory.createForClass(Donator)