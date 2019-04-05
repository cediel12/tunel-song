import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

import { songService } from './song.service';
import { songDto } from './dto/song.dto';

@Controller('Song')
export class songController {
  
    constructor(private readonly song: songService )
    {
    }

    @Post('/CreateSong')
    public async createArtist(@Body() body:songDto, @Res() res: Response)
    {
        if(body!=undefined)
        {
            let artist = await this.song.createSong(body);
            if(artist)
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