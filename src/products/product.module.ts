import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product, ProductSchema } from './product.schema';

const MODEL = MongooseModule.forFeature([
  {
    name: Product.name,
    schema: ProductSchema,
    collection: 'products',
  },
]);

@Module({
  imports: [MODEL],
  providers: [ProductService],
  exports: [ProductService, MODEL],
  controllers: [ProductController],
})
export class ProductModule {}
