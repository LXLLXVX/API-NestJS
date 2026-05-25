import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
export declare class TeamsController {
    private readonly teamsService;
    constructor(teamsService: TeamsService);
    create(createTeamDto: CreateTeamDto): Promise<import("./entities/team.entity").Team>;
    findAll(): Promise<import("./entities/team.entity").Team[]>;
    findOne(id: number): Promise<import("./entities/team.entity").Team>;
    update(id: number, updateTeamDto: UpdateTeamDto): Promise<import("./entities/team.entity").Team>;
    remove(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
