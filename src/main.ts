import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProductsService } from './products/product.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const temp = app.get(ProductsService)
  // console.log(await temp.findAll())
  await app.listen(3000);
}
bootstrap();
