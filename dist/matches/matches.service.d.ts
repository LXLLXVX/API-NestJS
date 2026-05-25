import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { Match } from './entities/match.entity';
export declare class MatchesService {
    private readonly matchModel;
    constructor(matchModel: typeof Match);
    create(createMatchDto: CreateMatchDto): Promise<Match>;
    findAll(): Promise<Match[]>;
    findOne(id: number): Promise<Match>;
    update(id: number, updateMatchDto: UpdateMatchDto): Promise<Match>;
    remove(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
    private validateDifferentTeams;
}
