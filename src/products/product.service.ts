import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Product, ProductType } from './product.schema';
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<ProductType>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async addMany(docs: Array<Product>) {
    return this.productModel.insertMany(docs);
  }

  async getDiscount(productId: string) {
    const id = new Types.ObjectId(productId);
    return this.productModel.aggregate([
      {
        $match: { _id: id },
      },
      {
        $addFields: {
          categoryId: {
            $cond: {
              if: { $gte: ['$discount', 0] },
              then: null,
              else: '$categoryId',
            },
          },
        },
      },
      {
        $graphLookup: {
          from: 'categories',
          startWith: '$categoryId',
          connectFromField: 'parentId',
          connectToField: '_id',
          as: 'hierarchy',
          depthField: 'level',
        },
      },
      {
        $addFields: {
          el: {
            $filter: {
              input: '$hierarchy',
              as: 'item',
              cond: { $gt: ['$$item.discount', 0] },
            },
          },
        },
      },
      { $sort: { 'el.level': -1 } },
      {
        $project: {
          discount: {
            $cond: {
              if: { $gte: ['$discount', 0] },
              then: '$discount',
              else: { $arrayElemAt: ['$el.discount', 0] },
            },
          },
        },
      },
    ]);
  }
}
