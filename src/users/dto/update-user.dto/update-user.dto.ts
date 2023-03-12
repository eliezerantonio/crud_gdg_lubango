import { IsString, IsNumber } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly age: Number;

  @IsString()
  readonly phone: string;
}
