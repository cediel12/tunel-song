import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { songInterface } from './interface/song.interface'; 
import { songDto } from './dto/song.dto';

@Injectable()
export class songService
{
    constructor(@Inject('SONG_MODEL') private readonly song: Model<songInterface>)
    {
    }

    public async createSong(data: songDto): Promise<songInterface>
    {
        const artist = new this.song(data);
        return await artist.save();
    }
}