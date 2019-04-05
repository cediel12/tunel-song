import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { albumDto } from './dto/album.dto';
import { albumInterface } from './interface/album.interface';

@Injectable()
export class albumService
{
    constructor(@Inject('ALBUM_MODEL') private readonly album: Model<albumInterface>)
    {
    }

    public async createAlbum(data: albumDto):Promise<albumInterface>
    {
        let album = new this.album(data);
        return await album.save();
    }
}