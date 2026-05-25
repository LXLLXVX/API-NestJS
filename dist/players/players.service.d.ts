import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';
export declare class PlayersService {
    private readonly playerModel;
    constructor(playerModel: typeof Player);
    create(createPlayerDto: CreatePlayerDto): Promise<Player>;
    findAll(): Promise<Player[]>;
    findOne(id: number): Promise<Player>;
    update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<Player>;
    remove(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
