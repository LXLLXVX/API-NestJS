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
exports.PlayersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const player_entity_1 = require("./entities/player.entity");
const team_entity_1 = require("../teams/entities/team.entity");
let PlayersService = class PlayersService {
    playerModel;
    constructor(playerModel) {
        this.playerModel = playerModel;
    }
    create(createPlayerDto) {
        return this.playerModel.create(createPlayerDto);
    }
    findAll() {
        return this.playerModel.findAll({
            include: [
                {
                    model: team_entity_1.Team,
                },
            ],
        });
    }
    async findOne(id) {
        const player = await this.playerModel.findByPk(id, {
            include: [
                {
                    model: team_entity_1.Team,
                },
            ],
        });
        if (!player) {
            throw new common_1.NotFoundException(`No existe el jugador con id ${id}`);
        }
        return player;
    }
    async update(id, updatePlayerDto) {
        const player = await this.playerModel.findByPk(id);
        if (!player) {
            throw new common_1.NotFoundException(`No existe el jugador con id ${id}`);
        }
        await player.update(updatePlayerDto);
        return this.findOne(id);
    }
    async remove(id) {
        const deletedRows = await this.playerModel.destroy({ where: { id } });
        if (!deletedRows) {
            throw new common_1.NotFoundException(`No existe el jugador con id ${id}`);
        }
        return { deleted: true, id };
    }
};
exports.PlayersService = PlayersService;
exports.PlayersService = PlayersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(player_entity_1.Player)),
    __metadata("design:paramtypes", [Object])
], PlayersService);
//# sourceMappingURL=players.service.js.map