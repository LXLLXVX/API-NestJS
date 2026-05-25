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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const player_entity_1 = require("../../players/entities/player.entity");
const match_entity_1 = require("../../matches/entities/match.entity");
let Team = class Team extends sequelize_typescript_1.Model {
};
exports.Team = Team;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Team.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Team.prototype, "nombre", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Team.prototype, "ciudad", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Team.prototype, "entrenador", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Team.prototype, "fundacion", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => player_entity_1.Player),
    __metadata("design:type", Array)
], Team.prototype, "players", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => match_entity_1.Match, 'localTeamId'),
    __metadata("design:type", Array)
], Team.prototype, "localMatches", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => match_entity_1.Match, 'visitanteTeamId'),
    __metadata("design:type", Array)
], Team.prototype, "visitanteMatches", void 0);
exports.Team = Team = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'teams' })
], Team);
//# sourceMappingURL=team.entity.js.map