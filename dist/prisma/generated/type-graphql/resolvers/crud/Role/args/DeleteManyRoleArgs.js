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
exports.DeleteManyRoleArgs = void 0;
const TypeGraphQL = require("type-graphql");
const RoleWhereInput_1 = require("../../../inputs/RoleWhereInput");
let DeleteManyRoleArgs = class DeleteManyRoleArgs {
};
__decorate([
    TypeGraphQL.Field(_type => RoleWhereInput_1.RoleWhereInput, { nullable: true }),
    __metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], DeleteManyRoleArgs.prototype, "where", void 0);
DeleteManyRoleArgs = __decorate([
    TypeGraphQL.ArgsType()
], DeleteManyRoleArgs);
exports.DeleteManyRoleArgs = DeleteManyRoleArgs;
//# sourceMappingURL=DeleteManyRoleArgs.js.map