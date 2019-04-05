import { Document } from 'mongoose';

export interface songInterface extends Document
{
    readonly number : number;
    readonly name : string;
    readonly file : string;
    readonly duration : number;
}