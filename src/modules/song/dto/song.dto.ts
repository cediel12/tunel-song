import { ApiModelProperty } from '@nestjs/swagger';
import { Length, MinLength, MaxLength, IsNotEmpty, Min, Max } from 'class-validator';

export class songDto 
{
    @ApiModelProperty()

    @IsNotEmpty()
    readonly number : number;

    @ApiModelProperty()
    @MinLength(4,{ message: "El Nombre debe contener al menos 4 caracteres" })
    @MaxLength(50,{ message: "El Nombre debe contener maximo 45 caracteres"})
    @IsNotEmpty()
    readonly name : string;

    @ApiModelProperty()
    @IsNotEmpty()
    readonly file : string;

    @ApiModelProperty()
    @IsNotEmpty()
    readonly duration : number;
}