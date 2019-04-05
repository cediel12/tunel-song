import { Connection } from 'mongoose';
import { artistSchema } from './schema/artist.schema';

export const artistProviders = [
    {
      provide: 'ARTIST_MODEL',
      useFactory: (connection: Connection) => connection.model('artist', artistSchema),
      inject: ['MONGODB_CONNECTION'],
    },
  ];