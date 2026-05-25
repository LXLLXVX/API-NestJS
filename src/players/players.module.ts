import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { Player } from './entities/player.entity';
import { Team } from '../teams/entities/team.entity';

@Module({
  imports: [SequelizeModule.forFeature([Player, Team])],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}
