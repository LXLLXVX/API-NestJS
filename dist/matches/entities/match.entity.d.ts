import { Model } from 'sequelize-typescript';
import { Team } from '../../teams/entities/team.entity';
export declare class Match extends Model<Match> {
    id: number;
    fecha: Date;
    puntosLocal: number;
    puntosVisitante: number;
    localTeamId: number;
    visitanteTeamId: number;
    localTeam: Team;
    visitanteTeam: Team;
}
