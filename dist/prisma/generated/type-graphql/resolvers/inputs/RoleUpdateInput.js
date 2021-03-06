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
exports.RoleUpdateInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserUpdateManyWithoutRoleInput_1 = require("../inputs/UserUpdateManyWithoutRoleInput");
let RoleUpdateInput = class RoleUpdateInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], RoleUpdateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], RoleUpdateInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], RoleUpdateInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Date)
], RoleUpdateInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutRoleInput_1.UserUpdateManyWithoutRoleInput, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", UserUpdateManyWithoutRoleInput_1.UserUpdateManyWithoutRoleInput)
], RoleUpdateInput.prototype, "users", void 0);
RoleUpdateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
        description: undefined,
    })
], RoleUpdateInput);
exports.RoleUpdateInput = RoleUpdateInput;
//# sourceMappingURL=RoleUpdateInput.js.map