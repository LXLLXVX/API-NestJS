import { MatchesService } from './matches.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
export declare class MatchesController {
    private readonly matchesService;
    constructor(matchesService: MatchesService);
    create(createMatchDto: CreateMatchDto): Promise<import("./entities/match.entity").Match>;
    findAll(): Promise<import("./entities/match.entity").Match[]>;
    findOne(id: number): Promise<import("./entities/match.entity").Match>;
    update(id: number, updateMatchDto: UpdateMatchDto): Promise<import("./entities/match.entity").Match>;
    remove(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
