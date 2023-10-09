import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ResetRequestDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  newPassword: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  confirmPassword: string;
}
