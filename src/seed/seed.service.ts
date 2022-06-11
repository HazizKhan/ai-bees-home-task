import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Command } from 'nestjs-command';
import { Category, CategoryType } from 'src/category/category.schema';

import { CategoryService } from 'src/category/category.service';
import { ProductService } from 'src/products/product.service';
import { Product, ProductType } from 'src/products/product.schema';
import { products as mockProducts } from 'src/mock/products';
import {
  baseCategories,
  childCategories,
  childSiblingCategories,
  subChildCategories,
} from 'src/mock/categories';

@Injectable()
export class SeedService {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly productService: ProductService,
    @InjectModel(Category.name) private categoryModel: Model<CategoryType>,
    @InjectModel(Product.name) private productModel: Model<ProductType>,
  ) {}
  @Command({
    command: 'add:dummy',
    describe: 'Add dummy data to the DB',
  })
  async create() {
    const categories: CategoryType[] = [];
    for (let i = 0; i < baseCategories.length; i++) {
      const base = new this.categoryModel(baseCategories[i]);
      categories.push(base);
      if (childCategories[i]) {
        const child = new this.categoryModel(childCategories[i]);
        const sibling = new this.categoryModel(childSiblingCategories[i]);
        child.parentId = base._id;
        sibling.parentId = base._id;
        categories.push(child, sibling);
        if (subChildCategories[i]) {
          const subChild = new this.categoryModel(subChildCategories[i]);
          subChild.parentId = child._id;
          categories.push(subChild);
        }
      }
    }
    const products = mockProducts.map((mockProduct, i) => {
      const product = new this.productModel(mockProduct);
      product.categoryId = categories[i % categories.length]._id;
      return product;
    });
    await this.categoryService.addMany(categories);
    await this.productService.addMany(products);
    console.log('Seed Completed!!');
  }
}
