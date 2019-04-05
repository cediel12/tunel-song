import { Document } from 'mongoose';

export interface albumInterface extends Document
{
    readonly title : string;
    readonly description : string;
    readonly year : number;
    readonly image : string;
}