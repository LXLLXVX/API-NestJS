import { Model } from 'sequelize-typescript';
import { Team } from '../../teams/entities/team.entity';
export declare class Player extends Model<Player> {
    id: number;
    nombre: string;
    edad: number;
    posicion: string;
    dorsal: number;
    teamId: number;
    team: Team;
}
