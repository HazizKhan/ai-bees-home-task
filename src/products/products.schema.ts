import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
export type ProductsType = Products & Document;

@Schema()
export class Products {
  @Prop({required:true})
  name: string;
  @Prop({required:true})
  categoryId:Types.ObjectId
  @Prop({required:false})
  discount:number
}

export const ProductSchema = SchemaFactory.createForClass(Products);
