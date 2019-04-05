import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

import { artistService } from './artist.service';
import { artistDto } from './dto/artist.dto';

@Controller('Artist')
export class artistController
{
    constructor(private readonly artist:artistService)
    {
    }

    @Post('/CreateArtist')
    public async createArtist(@Body() body:artistDto, @Res() res: Response)
    {
        if(body!=undefined)
        {
            let artist = await this.artist.createArtist(body);
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