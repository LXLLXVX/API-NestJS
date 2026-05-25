import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { Team } from './entities/team.entity';
import { Player } from '../players/entities/player.entity';
import { Match } from '../matches/entities/match.entity';

@Module({
  imports: [SequelizeModule.forFeature([Team, Player, Match])],
  controllers: [TeamsController],
  providers: [TeamsService],
})
export class TeamsModule {}
