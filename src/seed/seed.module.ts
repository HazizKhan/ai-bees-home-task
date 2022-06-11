import { Module } from '@nestjs/common';
import { CategoryModule } from 'src/category/category.module';
import { ProductModule } from 'src/products/product.module';
import { SeedService } from './seed.service';

@Module({
  imports: [ProductModule, CategoryModule],
  providers: [SeedService],
})
export class SeedModule {}
