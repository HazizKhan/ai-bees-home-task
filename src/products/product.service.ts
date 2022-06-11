import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Products, ProductsType } from './products.schema';
@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products.name)
    private productModel: Model<ProductsType>,
  ) {}

  async findAll(): Promise<Products[]> {
    return this.productModel.find().exec();
  }
}
