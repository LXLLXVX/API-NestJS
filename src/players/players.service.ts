import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';
import { Team } from '../teams/entities/team.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectModel(Player)
    private readonly playerModel: typeof Player,
  ) {}

  create(createPlayerDto: CreatePlayerDto) {
    return this.playerModel.create(createPlayerDto as any);
  }

  findAll() {
    return this.playerModel.findAll({
      include: [
        {
          model: Team,
        },
      ],
    });
  }

  async findOne(id: number) {
    const player = await this.playerModel.findByPk(id, {
      include: [
        {
          model: Team,
        },
      ],
    });

    if (!player) {
      throw new NotFoundException(`No existe el jugador con id ${id}`);
    }

    return player;
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto) {
    const player = await this.playerModel.findByPk(id);

    if (!player) {
      throw new NotFoundException(`No existe el jugador con id ${id}`);
    }

    await player.update(updatePlayerDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const deletedRows = await this.playerModel.destroy({ where: { id } });

    if (!deletedRows) {
      throw new NotFoundException(`No existe el jugador con id ${id}`);
    }

    return { deleted: true, id };
  }
}
