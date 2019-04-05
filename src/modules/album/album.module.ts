import { Module } from '@nestjs/common';

import { commonModule } from './../common/common.module';
import { albumProviders } from './album.provider';
import { albumService } from './album.service';
import { albumController } from './album.controller';


@Module({
    imports: [commonModule],
    controllers: [albumController],
    providers: [albumService, ...albumProviders],
})
export class albumModule{}