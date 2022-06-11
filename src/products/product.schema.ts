import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Category } from 'src/category/category.schema';
export type ProductType = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true, ref: Category.name })
  categoryId: Types.ObjectId;
  @Prop({ required: false })
  discount: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
