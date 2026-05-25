import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { Match } from './entities/match.entity';
import { Team } from '../teams/entities/team.entity';

@Injectable()
export class MatchesService {
  constructor(
    @InjectModel(Match)
    private readonly matchModel: typeof Match,
  ) {}

  create(createMatchDto: CreateMatchDto) {
    this.validateDifferentTeams(
      createMatchDto.localTeamId,
      createMatchDto.visitanteTeamId,
    );

    return this.matchModel.create({
      ...createMatchDto,
      fecha: new Date(createMatchDto.fecha),
    } as any);
  }

  findAll() {
    return this.matchModel.findAll({
      include: [
        {
          model: Team,
          as: 'localTeam',
        },
        {
          model: Team,
          as: 'visitanteTeam',
        },
      ],
    });
  }

  async findOne(id: number) {
    const match = await this.matchModel.findByPk(id, {
      include: [
        {
          model: Team,
          as: 'localTeam',
        },
        {
          model: Team,
          as: 'visitanteTeam',
        },
      ],
    });

    if (!match) {
      throw new NotFoundException(`No existe el partido con id ${id}`);
    }

    return match;
  }

  async update(id: number, updateMatchDto: UpdateMatchDto) {
    const match = await this.matchModel.findByPk(id);

    if (!match) {
      throw new NotFoundException(`No existe el partido con id ${id}`);
    }

    const localTeamId = updateMatchDto.localTeamId ?? match.localTeamId;
    const visitanteTeamId =
      updateMatchDto.visitanteTeamId ?? match.visitanteTeamId;

    this.validateDifferentTeams(localTeamId, visitanteTeamId);

    await match.update({
      ...updateMatchDto,
      fecha: updateMatchDto.fecha
        ? new Date(updateMatchDto.fecha)
        : match.fecha,
    });

    return this.findOne(id);
  }

  async remove(id: number) {
    const deletedRows = await this.matchModel.destroy({ where: { id } });

    if (!deletedRows) {
      throw new NotFoundException(`No existe el partido con id ${id}`);
    }

    return { deleted: true, id };
  }

  private validateDifferentTeams(localTeamId: number, visitanteTeamId: number) {
    if (localTeamId === visitanteTeamId) {
      throw new BadRequestException(
        'El equipo local y visitante deben ser distintos',
      );
    }
  }
}
