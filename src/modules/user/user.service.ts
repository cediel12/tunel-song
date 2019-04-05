import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { userInterface } from './interface/user.interface';
import { userDto } from './dto/usert.dto';

@Injectable()
export class userService{
   constructor(@Inject('USER_MODEL') private readonly userModel: Model<userInterface>)
   {
   }
   
   public async SingUp(data:userDto): Promise <userInterface>
   {
        const user = new this.userModel(data);
        return await user.save(); 
   }
   
}