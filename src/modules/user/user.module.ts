import { Module } from '@nestjs/common';

import { userController } from './user.controller';
import { userService } from './user.service';
import { commonModule } from '../common/common.module';
import { userProviders } from './user.providers';

@Module({
    imports: [commonModule],
    controllers: [userController],
    providers: [userService,...userProviders],
})

export class userModule{}