import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { artistDto } from './dto/artist.dto';
import { artistInterface } from './interface/artist.interface';

@Injectable()
export class artistService
{
    constructor(@Inject('ARTIST_MODEL') private readonly artist: Model<artistInterface>)
    {
    }

    public async createArtist(data: artistDto): Promise<artistInterface>
    {
        const artist = new this.artist(data);
        return await artist.save();
    }
}