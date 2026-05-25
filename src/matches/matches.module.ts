import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MatchesService } from './matches.service';
import { MatchesController } from './matches.controller';
import { Match } from './entities/match.entity';
import { Team } from '../teams/entities/team.entity';

@Module({
  imports: [SequelizeModule.forFeature([Match, Team])],
  controllers: [MatchesController],
  providers: [MatchesService],
})
export class MatchesModule {}
