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
exports.RoleCreateInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateManyWithoutRoleInput_1 = require("../inputs/UserCreateManyWithoutRoleInput");
let RoleCreateInput = class RoleCreateInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], RoleCreateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false,
        description: undefined
    }),
    __metadata("design:type", String)
], RoleCreateInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], RoleCreateInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Date)
], RoleCreateInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateManyWithoutRoleInput_1.UserCreateManyWithoutRoleInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserCreateManyWithoutRoleInput_1.UserCreateManyWithoutRoleInput)
], RoleCreateInput.prototype, "users", void 0);
RoleCreateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], RoleCreateInput);
exports.RoleCreateInput = RoleCreateInput;
//# sourceMappingURL=RoleCreateInput.js.map