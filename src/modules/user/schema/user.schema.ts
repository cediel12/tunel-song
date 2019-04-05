import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    role: String,
    image: String
});