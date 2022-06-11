import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
export type CategoryType = Category & Document;

@Schema()
export class Category {
  @Prop({required:true})
  name: string;
  @Prop({required:false})
  parentId:Types.ObjectId
  @Prop({required:false})
  discount:number
}


export const CategorySchema = SchemaFactory.createForClass(Category);
