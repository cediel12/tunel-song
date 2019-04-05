import { ApiModelProperty } from '@nestjs/swagger';
import { Length, MinLength, MaxLength, IsNotEmpty, Min, Max } from 'class-validator';

export class albumDto 
{
    @ApiModelProperty()
    @MinLength(4,{ message: "El titulo debe contener al menos 4 caracteres" })
    @MaxLength(50,{ message: "El titulo debe contener maximo 45 caracteres"})
    @IsNotEmpty()
    readonly title : string;

    @ApiModelProperty()
    @MinLength(10,{ message: "La descripcion es demaciado corta" })
    @IsNotEmpty()
    readonly description : string;

    @ApiModelProperty()
    @IsNotEmpty()
    readonly year : number;

    @ApiModelProperty()
    readonly image : string;
}