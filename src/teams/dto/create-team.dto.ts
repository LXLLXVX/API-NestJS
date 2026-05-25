import { IsInt, IsString, Max, Min, MinLength } from 'class-validator';

export class CreateTeamDto {
	@IsString()
	@MinLength(2)
	nombre: string;

	@IsString()
	@MinLength(2)
	ciudad: string;

	@IsString()
	@MinLength(2)
	entrenador: string;

	@IsInt()
	@Min(1800)
	@Max(2100)
	fundacion: number;
}
