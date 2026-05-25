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
exports.MatchesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const match_entity_1 = require("./entities/match.entity");
const team_entity_1 = require("../teams/entities/team.entity");
let MatchesService = class MatchesService {
    matchModel;
    constructor(matchModel) {
        this.matchModel = matchModel;
    }
    create(createMatchDto) {
        this.validateDifferentTeams(createMatchDto.localTeamId, createMatchDto.visitanteTeamId);
        return this.matchModel.create({
            ...createMatchDto,
            fecha: new Date(createMatchDto.fecha),
        });
    }
    findAll() {
        return this.matchModel.findAll({
            include: [
                {
                    model: team_entity_1.Team,
                    as: 'localTeam',
                },
                {
                    model: team_entity_1.Team,
                    as: 'visitanteTeam',
                },
            ],
        });
    }
    async findOne(id) {
        const match = await this.matchModel.findByPk(id, {
            include: [
                {
                    model: team_entity_1.Team,
                    as: 'localTeam',
                },
                {
                    model: team_entity_1.Team,
                    as: 'visitanteTeam',
                },
            ],
        });
        if (!match) {
            throw new common_1.NotFoundException(`No existe el partido con id ${id}`);
        }
        return match;
    }
    async update(id, updateMatchDto) {
        const match = await this.matchModel.findByPk(id);
        if (!match) {
            throw new common_1.NotFoundException(`No existe el partido con id ${id}`);
        }
        const localTeamId = updateMatchDto.localTeamId ?? match.localTeamId;
        const visitanteTeamId = updateMatchDto.visitanteTeamId ?? match.visitanteTeamId;
        this.validateDifferentTeams(localTeamId, visitanteTeamId);
        await match.update({
            ...updateMatchDto,
            fecha: updateMatchDto.fecha
                ? new Date(updateMatchDto.fecha)
                : match.fecha,
        });
        return this.findOne(id);
    }
    async remove(id) {
        const deletedRows = await this.matchModel.destroy({ where: { id } });
        if (!deletedRows) {
            throw new common_1.NotFoundException(`No existe el partido con id ${id}`);
        }
        return { deleted: true, id };
    }
    validateDifferentTeams(localTeamId, visitanteTeamId) {
        if (localTeamId === visitanteTeamId) {
            throw new common_1.BadRequestException('El equipo local y visitante deben ser distintos');
        }
    }
};
exports.MatchesService = MatchesService;
exports.MatchesService = MatchesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(match_entity_1.Match)),
    __metadata("design:paramtypes", [Object])
], MatchesService);
//# sourceMappingURL=matches.service.js.map