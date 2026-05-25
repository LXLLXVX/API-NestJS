import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';
import { Player } from '../players/entities/player.entity';
import { Match } from '../matches/entities/match.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectModel(Team)
    private readonly teamModel: typeof Team,
  ) {}

  create(createTeamDto: CreateTeamDto) {
    return this.teamModel.create(createTeamDto as any);
  }

  findAll() {
    return this.teamModel.findAll({
      include: [
        {
          model: Player,
        },
        {
          model: Match,
          as: 'localMatches',
        },
        {
          model: Match,
          as: 'visitanteMatches',
        },
      ],
    });
  }

  async findOne(id: number) {
    const team = await this.teamModel.findByPk(id, {
      include: [
        {
          model: Player,
        },
        {
          model: Match,
          as: 'localMatches',
        },
        {
          model: Match,
          as: 'visitanteMatches',
        },
      ],
    });

    if (!team) {
      throw new NotFoundException(`No existe el equipo con id ${id}`);
    }

    return team;
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    const team = await this.teamModel.findByPk(id);

    if (!team) {
      throw new NotFoundException(`No existe el equipo con id ${id}`);
    }

    await team.update(updateTeamDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const deletedRows = await this.teamModel.destroy({ where: { id } });

    if (!deletedRows) {
      throw new NotFoundException(`No existe el equipo con id ${id}`);
    }

    return { deleted: true, id };
  }
}
