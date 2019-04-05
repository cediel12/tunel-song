import { ApiModelProperty } from '@nestjs/swagger';
import { Length, MinLength, MaxLength, IsNotEmpty } from 'class-validator';

export class artistDto
{
    @ApiModelProperty()
    @MinLength(4,{ message: "El nombre debe contener al menos 4 caracteres" })
    @MaxLength(40,{ message: "El nombre debe contener maximo 45 caracteres"})
    @IsNotEmpty()
    readonly name : string;

    @ApiModelProperty()
    @MinLength(10,{ message: "La descripcion es demaciado corta" })
    @IsNotEmpty()
    readonly description : string;

    @ApiModelProperty()
    readonly image : string;
}