import { Module } from '@nestjs/common';

import { songController } from './song.controller';
import { songService } from './song.service';
import { songProviders } from './song.provider';
import { commonModule } from './../common/common.module';

@Module({
    imports: [commonModule],
    controllers: [songController],
    providers: [songService, ...songProviders],
})
export class songModule{}