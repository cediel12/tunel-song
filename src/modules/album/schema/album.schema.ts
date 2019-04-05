import * as mongoose from 'mongoose';

export const albumSchema = new mongoose.Schema({
    title: String,
    description: String,
    year: Number,
    image: String,
    artist:{ type: mongoose.Schema.ObjectId, ref: 'artist' }
});