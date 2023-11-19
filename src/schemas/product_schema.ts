import { Donator } from './donator_schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'
import { ONG } from './ong_schema';

export type ProductDocument = mongoose.HydratedDocument<Product>

@Schema()
export class Product {
  @Prop({ required: true })
  nome_produto: string;

  @Prop({ required: true })
  telefone_contato: string;

  @Prop({ required: true })
  endereco: string;

  @Prop({ required: true })
  quantidade_por_caixa: number;

  @Prop({ required: true })
  quantidade_de_caixas: number;

  @Prop({ required: true })
  validade: string;

  @Prop({ required: false })
  imagem: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Donator' })
  donator: Donator;

  @Prop({ required: false, type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ONG' }] })
  ongs: ONG[];

}

export const ProductSchema = SchemaFactory.createForClass(Product)