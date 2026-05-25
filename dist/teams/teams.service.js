"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const team_entity_1 = require("./entities/team.entity");
const player_entity_1 = require("../players/entities/player.entity");
const match_entity_1 = require("../matches/entities/match.entity");
let TeamsService = class TeamsService {
    teamModel;
    constructor(teamModel) {
        this.teamModel = teamModel;
    }
    create(createTeamDto) {
        return this.teamModel.create(createTeamDto);
    }
    findAll() {
        return this.teamModel.findAll({
            include: [
                {
                    model: player_entity_1.Player,
                },
                {
                    model: match_entity_1.Match,
                    as: 'localMatches',
                },
                {
                    model: match_entity_1.Match,
                    as: 'visitanteMatches',
                },
            ],
        });
    }
    async findOne(id) {
        const team = await this.teamModel.findByPk(id, {
            include: [
                {
                    model: player_entity_1.Player,
                },
                {
                    model: match_entity_1.Match,
                    as: 'localMatches',
                },
                {
                    model: match_entity_1.Match,
                    as: 'visitanteMatches',
                },
            ],
        });
        if (!team) {
            throw new common_1.NotFoundException(`No existe el equipo con id ${id}`);
        }
        return team;
    }
    async update(id, updateTeamDto) {
        const team = await this.teamModel.findByPk(id);
        if (!team) {
            throw new common_1.NotFoundException(`No existe el equipo con id ${id}`);
        }
        await team.update(updateTeamDto);
        return this.findOne(id);
    }
    async remove(id) {
        const deletedRows = await this.teamModel.destroy({ where: { id } });
        if (!deletedRows) {
            throw new common_1.NotFoundException(`No existe el equipo con id ${id}`);
        }
        return { deleted: true, id };
    }
};
exports.TeamsService = TeamsService;
exports.TeamsService = TeamsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(team_entity_1.Team)),
    __metadata("design:paramtypes", [Object])
], TeamsService);
//# sourceMappingURL=teams.service.js.map