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
exports.UserUpdateManyWithoutRoleInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateWithoutRoleInput_1 = require("../inputs/UserCreateWithoutRoleInput");
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyWithWhereNestedInput_1 = require("../inputs/UserUpdateManyWithWhereNestedInput");
const UserUpdateWithWhereUniqueWithoutRoleInput_1 = require("../inputs/UserUpdateWithWhereUniqueWithoutRoleInput");
const UserUpsertWithWhereUniqueWithoutRoleInput_1 = require("../inputs/UserUpsertWithWhereUniqueWithoutRoleInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateManyWithoutRoleInput = class UserUpdateManyWithoutRoleInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutRoleInput_1.UserCreateWithoutRoleInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], UserUpdateManyWithoutRoleInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], UserUpdateManyWithoutRoleInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], UserUpdateManyWithoutRoleInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], UserUpdateManyWithoutRoleInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], UserUpdateManyWithoutRoleInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutRoleInput_1.UserUpdateWithWhereUniqueWithoutRoleInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], UserUpdateManyWithoutRoleInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserUpdateManyWithWhereNestedInput_1.UserUpdateManyWithWhereNestedInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], UserUpdateManyWithoutRoleInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1.UserScalarWhereInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], UserUpdateManyWithoutRoleInput.prototype, "deleteMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutRoleInput_1.UserUpsertWithWhereUniqueWithoutRoleInput], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], UserUpdateManyWithoutRoleInput.prototype, "upsert", void 0);
UserUpdateManyWithoutRoleInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], UserUpdateManyWithoutRoleInput);
exports.UserUpdateManyWithoutRoleInput = UserUpdateManyWithoutRoleInput;
//# sourceMappingURL=UserUpdateManyWithoutRoleInput.js.map