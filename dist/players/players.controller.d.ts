import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
export declare class PlayersController {
    private readonly playersService;
    constructor(playersService: PlayersService);
    create(createPlayerDto: CreatePlayerDto): Promise<import("./entities/player.entity").Player>;
    findAll(): Promise<import("./entities/player.entity").Player[]>;
    findOne(id: number): Promise<import("./entities/player.entity").Player>;
    update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<import("./entities/player.entity").Player>;
    remove(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
