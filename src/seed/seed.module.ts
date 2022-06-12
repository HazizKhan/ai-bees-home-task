import { Module } from '@nestjs/common';
import { CategoryModule } from '../category/category.module';
import { ProductModule } from '../products/product.module';
import { SeedService } from './seed.service';

@Module({
  imports: [ProductModule, CategoryModule],
  providers: [SeedService],
})
export class SeedModule {}
