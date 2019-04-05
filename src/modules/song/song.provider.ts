import { Connection } from 'mongoose';
import { songSchema } from './schema/song.schema';

export const songProviders = [
    {
      provide: 'SONG_MODEL',
      useFactory: (connection: Connection) => connection.model('song', songSchema),
      inject: ['MONGODB_CONNECTION'],
    },
  ];