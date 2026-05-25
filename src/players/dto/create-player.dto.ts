import { IsIn, IsInt, IsString, Max, Min, MinLength } from 'class-validator';

export class CreatePlayerDto {
	@IsString()
	@MinLength(2)
	nombre: string;

	@IsInt()
	@Min(15)
	@Max(60)
	edad: number;

	@IsString()
	@IsIn(['Base', 'Escolta', 'Alero', 'Ala-Pivot', 'Pivot'])
	posicion: string;

	@IsInt()
	@Min(0)
	@Max(99)
	dorsal: number;

	@IsInt()
	teamId: number;
}
