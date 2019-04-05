import { Connection } from 'mongoose';
import { albumSchema } from './schema/album.schema';

export const albumProviders = [
    {
      provide: 'ALBUM_MODEL',
      useFactory: (connection: Connection) => connection.model('album', albumSchema),
      inject: ['MONGODB_CONNECTION'],
    },
  ];