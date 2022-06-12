import { Controller, Get, Param, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productsService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Get('discount/:id')
  async getDiscount(@Res() res: Response, @Param('id') id: string) {
    try {
      const discountDetails = await this.productsService.getDiscount(id);
      if (!discountDetails || !discountDetails.length) {
        res.status(404).send('Product not found!');
        return;
      }
      return res.send({
        data: discountDetails[0].discount
          ? discountDetails[0].discount * 100
          : -1,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send('Invalid response!');
      return;
    }
  }
}
