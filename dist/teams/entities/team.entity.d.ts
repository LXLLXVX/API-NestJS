import { Model } from 'sequelize-typescript';
import { Player } from '../../players/entities/player.entity';
import { Match } from '../../matches/entities/match.entity';
export declare class Team extends Model<Team> {
    id: number;
    nombre: string;
    ciudad: string;
    entrenador: string;
    fundacion: number;
    players: Player[];
    localMatches: Match[];
    visitanteMatches: Match[];
}
