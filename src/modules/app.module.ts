import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { userModule } from './user/user.module';
import { artistModule } from './artist/artist.module';
import { albumModule } from './album/album.module';
import { songModule } from './song/song.module';

@Module({
  imports: [userModule, artistModule, albumModule, songModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
