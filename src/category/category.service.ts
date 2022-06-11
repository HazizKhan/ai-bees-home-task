import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
    Category,
    CategoryType
} from './category.schema'
@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private productModel: Model<CategoryType>,
  ) {}

  async findAll(): Promise<Category[]>{
    return this.productModel.find().exec()
  }
}