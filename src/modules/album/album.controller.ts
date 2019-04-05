import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { albumService } from './album.service';
import { albumDto } from './dto/album.dto';

@Controller('Album')
export class albumController
{
    constructor(private readonly album : albumService)
    {
    }

    @Post('/CreateAlbum')
    public async createAlbum(@Body() body:albumDto, @Res() res: Response){
        if(body!=undefined)
        {
            let album = await this.album.createAlbum(body);
            if(album)
            {
                res.status(HttpStatus.OK).json({data: true, state: 'OK'});
            }
            else
            {
                res.status(HttpStatus.NO_CONTENT).json({data:false, state: 'NO DATA'});
            }
        }
        else
        {
            res.status(HttpStatus.BAD_REQUEST).json({ state: 'ERROR', description: 'Payload incompleto.'});
        }
    }
}