import { Injectable } from '@nestjs/common';
import { appName } from './../environment/environment';

@Injectable()
export class AppService {
  getHello(): string {
    return `Bienvenido a ${appName}, Esperamos disfrute de nuestros servicios.`;
  }
}
