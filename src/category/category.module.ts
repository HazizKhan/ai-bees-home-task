import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category, CategorySchema } from './category.schema';
const MODEL = MongooseModule.forFeature([
  {
    name: Category.name,
    schema: CategorySchema,
    collection: 'categories',
  },
]);
@Module({
  imports: [MODEL],
  providers: [CategoryService],
  exports: [CategoryService, MODEL],
  controllers: [CategoryController],
})
export class CategoryModule {}
