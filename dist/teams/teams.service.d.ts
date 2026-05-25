import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';
export declare class TeamsService {
    private readonly teamModel;
    constructor(teamModel: typeof Team);
    create(createTeamDto: CreateTeamDto): Promise<Team>;
    findAll(): Promise<Team[]>;
    findOne(id: number): Promise<Team>;
    update(id: number, updateTeamDto: UpdateTeamDto): Promise<Team>;
    remove(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
