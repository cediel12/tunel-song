import { Module } from '@nestjs/common';
import { mongoDBProviders } from './mongo.providers';

@Module({
    providers: [...mongoDBProviders],
    exports: [...mongoDBProviders],
})

export class commonModule{}