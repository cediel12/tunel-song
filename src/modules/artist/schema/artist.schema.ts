import * as mongoose from 'mongoose';

export const artistSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String
});