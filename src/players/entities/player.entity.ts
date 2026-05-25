import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript';
import { Team } from '../../teams/entities/team.entity';

@Table({ tableName: 'players' })
export class Player extends Model<Player> {
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
		type: DataType.INTEGER,
		allowNull: false,
	})
	declare edad: number;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	declare posicion: string;

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	declare dorsal: number;

	@ForeignKey(() => Team)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	declare teamId: number;

	@BelongsTo(() => Team)
	declare team: Team;
}
