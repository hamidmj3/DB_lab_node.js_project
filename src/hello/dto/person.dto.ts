import { Length , IsOptional, Min, IsNumber,Max } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class PersonDto {

 @Length(3, 10)
 @ApiProperty({description:'Enter Your Name > ', minLength: 3, default: 'Ali' ,maxLength:10})
 name: string;
 @IsNumber()
 @IsOptional()
 @Min(1960)
 // adding a max for age so result won't be negetive 
 @Max(2020)
 @ApiPropertyOptional({ description: 'Optional', default:1998 , minimum:1960, maximum:2020 })
year: number;


}


