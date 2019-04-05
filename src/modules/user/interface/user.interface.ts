import { Document } from 'mongoose';

export interface userInterface extends Document
{
    readonly name: string;
    readonly surname: string;
    readonly email: string;
    readonly password: string;
    readonly role: string;
    readonly image: string;
}