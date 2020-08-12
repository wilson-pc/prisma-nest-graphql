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
exports.RoleUpdateOneRequiredWithoutUsersInput = void 0;
const TypeGraphQL = require("type-graphql");
const RoleCreateWithoutUsersInput_1 = require("../inputs/RoleCreateWithoutUsersInput");
const RoleUpdateWithoutUsersDataInput_1 = require("../inputs/RoleUpdateWithoutUsersDataInput");
const RoleUpsertWithoutUsersInput_1 = require("../inputs/RoleUpsertWithoutUsersInput");
const RoleWhereUniqueInput_1 = require("../inputs/RoleWhereUniqueInput");
let RoleUpdateOneRequiredWithoutUsersInput = class RoleUpdateOneRequiredWithoutUsersInput {
};
__decorate([
    TypeGraphQL.Field(_type => RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput)
], RoleUpdateOneRequiredWithoutUsersInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], RoleUpdateOneRequiredWithoutUsersInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => RoleUpdateWithoutUsersDataInput_1.RoleUpdateWithoutUsersDataInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", RoleUpdateWithoutUsersDataInput_1.RoleUpdateWithoutUsersDataInput)
], RoleUpdateOneRequiredWithoutUsersInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => RoleUpsertWithoutUsersInput_1.RoleUpsertWithoutUsersInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", RoleUpsertWithoutUsersInput_1.RoleUpsertWithoutUsersInput)
], RoleUpdateOneRequiredWithoutUsersInput.prototype, "upsert", void 0);
RoleUpdateOneRequiredWithoutUsersInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], RoleUpdateOneRequiredWithoutUsersInput);
exports.RoleUpdateOneRequiredWithoutUsersInput = RoleUpdateOneRequiredWithoutUsersInput;
//# sourceMappingURL=RoleUpdateOneRequiredWithoutUsersInput.js.map