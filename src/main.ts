import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { AppModule } from './modules/app.module';
import { mode, appName, appHost, appPrefix, appPort } from './environment/environment';

async function bootstrap() 
{
  const logger = new Logger('HttpsServer');
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(appPrefix);
  await app.listen(appPort,() => {
    logger.log(
      (mode)?
        `${appName} => Server running on ${appHost}:${appPort}/${appPrefix}/`: 
        `${appName} => Modo Development => ${appHost}:${appPort}/${appPrefix}/`
    );
  });
}
bootstrap();
