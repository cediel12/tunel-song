import { Connection } from 'mongoose';
import { userSchema } from './schema/user.schema';

export const userProviders = [
    {
      provide: 'USER_MODEL',
      useFactory: (connection: Connection) => connection.model('user', userSchema),
      inject: ['MONGODB_CONNECTION'],
    },
  ];