import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getHello(): string {
    return "hello from category controller";
  }
}