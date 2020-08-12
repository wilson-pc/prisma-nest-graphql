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
exports.FindOneRoleArgs = void 0;
const TypeGraphQL = require("type-graphql");
const RoleWhereUniqueInput_1 = require("../../../inputs/RoleWhereUniqueInput");
let FindOneRoleArgs = class FindOneRoleArgs {
};
__decorate([
    TypeGraphQL.Field(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, { nullable: false }),
    __metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], FindOneRoleArgs.prototype, "where", void 0);
FindOneRoleArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindOneRoleArgs);
exports.FindOneRoleArgs = FindOneRoleArgs;
//# sourceMappingURL=FindOneRoleArgs.js.map