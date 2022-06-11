import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsService } from './product.service';
import { ProductController } from './products.controller';
import { Products, ProductSchema } from './products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Products.name,
        schema: ProductSchema,
        collection: 'products',
      },
    ]),
  ],
  providers: [ProductsService],
  exports: [ProductsService],
  controllers: [ProductController],
})
export class ProductsModule {}
