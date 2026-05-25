import { IsDateString, IsInt, Min } from 'class-validator';

export class CreateMatchDto {
	@IsDateString()
	fecha: string;

	@IsInt()
	@Min(0)
	puntosLocal: number;

	@IsInt()
	@Min(0)
	puntosVisitante: number;

	@IsInt()
	localTeamId: number;

	@IsInt()
	visitanteTeamId: number;
}
