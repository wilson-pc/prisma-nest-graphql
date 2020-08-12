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
exports.UpdateManyRoleArgs = void 0;
const TypeGraphQL = require("type-graphql");
const RoleUpdateManyMutationInput_1 = require("../../../inputs/RoleUpdateManyMutationInput");
const RoleWhereInput_1 = require("../../../inputs/RoleWhereInput");
let UpdateManyRoleArgs = class UpdateManyRoleArgs {
};
__decorate([
    TypeGraphQL.Field(_type => RoleUpdateManyMutationInput_1.RoleUpdateManyMutationInput, { nullable: false }),
    __metadata("design:type", RoleUpdateManyMutationInput_1.RoleUpdateManyMutationInput)
], UpdateManyRoleArgs.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => RoleWhereInput_1.RoleWhereInput, { nullable: true }),
    __metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], UpdateManyRoleArgs.prototype, "where", void 0);
UpdateManyRoleArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpdateManyRoleArgs);
exports.UpdateManyRoleArgs = UpdateManyRoleArgs;
//# sourceMappingURL=UpdateManyRoleArgs.js.map