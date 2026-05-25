import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript';
import { Team } from '../../teams/entities/team.entity';

@Table({ tableName: 'matches' })
export class Match extends Model<Match> {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;

	@Column({
		type: DataType.DATE,
		allowNull: false,
	})
	declare fecha: Date;

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	declare puntosLocal: number;

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	declare puntosVisitante: number;

	@ForeignKey(() => Team)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	declare localTeamId: number;

	@ForeignKey(() => Team)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	declare visitanteTeamId: number;

	@BelongsTo(() => Team, 'localTeamId')
	declare localTeam: Team;

	@BelongsTo(() => Team, 'visitanteTeamId')
	declare visitanteTeam: Team;
}
