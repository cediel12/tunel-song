import { ApiModelProperty } from '@nestjs/swagger';
import { Length, IsEmail, MinLength, MaxLength, IsNotEmpty } from 'class-validator';

export class userDto{

    @ApiModelProperty()
    @MinLength(4,{ message: "El nombre debe contener al menos 4 caracteres" })
    @MaxLength(40,{ message: "El nombre debe contener maximo 45 caracteres"})
    @IsNotEmpty()
    readonly name: string;

    @ApiModelProperty()
    @MinLength(4,{ message: "El Apellido debe contener al menos 4 caracteres" })
    @MaxLength(40,{ message: "El Apellido debe contener maximo 45 caracteres"})
    @IsNotEmpty()
    readonly surname: string;

    @ApiModelProperty()
    @IsEmail({}, { message: "El correo no cumple con su formato" })
    @IsNotEmpty()
    @MinLength(10,{ message: "El Correo no es valido" })
    readonly email: string;
    
    @ApiModelProperty()
    @Length(4, 30, { message: "La contraseña debe estar entre 4 a 30 letras" })
    @IsNotEmpty() 
    readonly password: string;

    @ApiModelProperty()
    @IsNotEmpty()
    @MinLength(3,{})
    readonly role: string;

    @ApiModelProperty()
    readonly image: string;
}