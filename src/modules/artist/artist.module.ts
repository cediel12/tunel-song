import { Module } from '@nestjs/common';

import { artistController } from './artist.controller';
import { artistService } from './artist.service';
import { artistProviders } from './artist.provider';
import { commonModule } from './../common/common.module';

@Module({
    imports: [commonModule],
    controllers: [artistController],
    providers: [artistService, ...artistProviders],
})
export class artistModule{}