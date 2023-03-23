import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //允许跨域
  app.enableCors();
  await app.listen(3000);
  //热重载
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
