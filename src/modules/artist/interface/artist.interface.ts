import { Document } from 'mongoose';

export interface artistInterface extends Document
{
    readonly name : string;
    readonly description : string;
    readonly image : string;
    
}
