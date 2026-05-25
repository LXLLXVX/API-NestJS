import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Player } from '../../players/entities/player.entity';
import { Match } from '../../matches/entities/match.entity';

@Table({ tableName: 'teams' })
export class Team extends Model<Team> {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	declare nombre: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	declare ciudad: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	declare entrenador: string;

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	declare fundacion: number;

	@HasMany(() => Player)
	declare players: Player[];

	@HasMany(() => Match, 'localTeamId')
	declare localMatches: Match[];

	@HasMany(() => Match, 'visitanteTeamId')
	declare visitanteMatches: Match[];
}
