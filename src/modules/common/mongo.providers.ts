import * as mongoose from 'mongoose';
import { dbHost, dbPort, dbName } from './../../environment/environment'

export const mongoDBProviders = [
  {
    provide: 'MONGODB_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`,{useNewUrlParser: true}),
  },
];