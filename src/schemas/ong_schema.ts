import { Product } from './product_schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'

export type ONGDocument = mongoose.HydratedDocument<ONG>

@Schema()
export class ONG {
  @Prop({ required: false})
  nome_organizacao: string;

  @Prop({ required: false})
  email: string

  @Prop({ required: false})
  senha: string;

  @Prop({ required: true })
  tipo_interessado: string;

  @Prop({ required: false })
  imagem: string;

  @Prop({ required: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
  interesses: Product[];
}

export const ONGSchema = SchemaFactory.createForClass(ONG)