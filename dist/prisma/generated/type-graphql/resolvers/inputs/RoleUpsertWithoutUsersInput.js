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
exports.RoleUpsertWithoutUsersInput = void 0;
const TypeGraphQL = require("type-graphql");
const RoleCreateWithoutUsersInput_1 = require("../inputs/RoleCreateWithoutUsersInput");
const RoleUpdateWithoutUsersDataInput_1 = require("../inputs/RoleUpdateWithoutUsersDataInput");
let RoleUpsertWithoutUsersInput = class RoleUpsertWithoutUsersInput {
};
__decorate([
    TypeGraphQL.Field(_type => RoleUpdateWithoutUsersDataInput_1.RoleUpdateWithoutUsersDataInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", RoleUpdateWithoutUsersDataInput_1.RoleUpdateWithoutUsersDataInput)
], RoleUpsertWithoutUsersInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput)
], RoleUpsertWithoutUsersInput.prototype, "create", void 0);
RoleUpsertWithoutUsersInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], RoleUpsertWithoutUsersInput);
exports.RoleUpsertWithoutUsersInput = RoleUpsertWithoutUsersInput;
//# sourceMappingURL=RoleUpsertWithoutUsersInput.js.map