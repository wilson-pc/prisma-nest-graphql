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
var RoleWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const NullableStringFilter_1 = require("../inputs/NullableStringFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserFilter_1 = require("../inputs/UserFilter");
let RoleWhereInput = RoleWhereInput_1 = class RoleWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], RoleWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], RoleWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFilter_1.NullableStringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", NullableStringFilter_1.NullableStringFilter)
], RoleWhereInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserFilter_1.UserFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserFilter_1.UserFilter)
], RoleWhereInput.prototype, "users", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RoleWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RoleWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], RoleWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RoleWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], RoleWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RoleWhereInput_1], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], RoleWhereInput.prototype, "NOT", void 0);
RoleWhereInput = RoleWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], RoleWhereInput);
exports.RoleWhereInput = RoleWhereInput;
//# sourceMappingURL=RoleWhereInput.js.map