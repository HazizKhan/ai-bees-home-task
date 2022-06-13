import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @UseGuards(JwtAuthGuard)
  @Get('all')
  async findAll(@Res() res: Response) {
    try {
      const products = await this.categoryService.findAll();
      res.send(products);
    } catch {
      res.status(400).send({ message: 'Something went Wrong' });
    }
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(): string {
    return 'hello from category controller';
  }
}
