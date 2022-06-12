import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(): string {
    return 'hello from category controller';
  }
}
