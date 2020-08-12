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
exports.UpsertRoleArgs = void 0;
const TypeGraphQL = require("type-graphql");
const RoleCreateInput_1 = require("../../../inputs/RoleCreateInput");
const RoleUpdateInput_1 = require("../../../inputs/RoleUpdateInput");
const RoleWhereUniqueInput_1 = require("../../../inputs/RoleWhereUniqueInput");
let UpsertRoleArgs = class UpsertRoleArgs {
};
__decorate([
    TypeGraphQL.Field(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, { nullable: false }),
    __metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], UpsertRoleArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => RoleCreateInput_1.RoleCreateInput, { nullable: false }),
    __metadata("design:type", RoleCreateInput_1.RoleCreateInput)
], UpsertRoleArgs.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => RoleUpdateInput_1.RoleUpdateInput, { nullable: false }),
    __metadata("design:type", RoleUpdateInput_1.RoleUpdateInput)
], UpsertRoleArgs.prototype, "update", void 0);
UpsertRoleArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpsertRoleArgs);
exports.UpsertRoleArgs = UpsertRoleArgs;
//# sourceMappingURL=UpsertRoleArgs.js.map