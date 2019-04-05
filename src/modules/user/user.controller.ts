import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { userService } from './user.service';
import { userDto } from './dto/usert.dto';
import { Response } from 'express';

@Controller('auth')
export class userController{
    constructor(private readonly user: userService) {}

    @Post('/SingUp')
    public async SingUp(@Body() data: userDto, @Res() res: Response)
    {
        if(data!=undefined)
        {
            let result = this.user.SingUp(data);
            console.log(result);
            if(result)
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

    @Post('/Login')
    public async Login()
    {

    }
}