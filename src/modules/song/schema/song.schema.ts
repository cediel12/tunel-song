import * as mongoose from 'mongoose';

export const songSchema = new mongoose.Schema({
    number: Number,
    name: String,
    file: String,
    duration: Number,
    album:{ type: mongoose.Schema.ObjectId, ref: 'album'}
});