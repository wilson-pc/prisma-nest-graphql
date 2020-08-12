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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateRoleArgs_1 = require("./args/AggregateRoleArgs");
const CreateRoleArgs_1 = require("./args/CreateRoleArgs");
const DeleteManyRoleArgs_1 = require("./args/DeleteManyRoleArgs");
const DeleteRoleArgs_1 = require("./args/DeleteRoleArgs");
const FindManyRoleArgs_1 = require("./args/FindManyRoleArgs");
const FindOneRoleArgs_1 = require("./args/FindOneRoleArgs");
const UpdateManyRoleArgs_1 = require("./args/UpdateManyRoleArgs");
const UpdateRoleArgs_1 = require("./args/UpdateRoleArgs");
const UpsertRoleArgs_1 = require("./args/UpsertRoleArgs");
const Role_1 = require("../../../models/Role");
const AggregateRole_1 = require("../../outputs/AggregateRole");
const BatchPayload_1 = require("../../outputs/BatchPayload");
let RoleCrudResolver = class RoleCrudResolver {
    async role(ctx, args) {
        return ctx.prisma.role.findOne(args);
    }
    async roles(ctx, args) {
        return ctx.prisma.role.findMany(args);
    }
    async createRole(ctx, args) {
        return ctx.prisma.role.create(args);
    }
    async deleteRole(ctx, args) {
        return ctx.prisma.role.delete(args);
    }
    async updateRole(ctx, args) {
        return ctx.prisma.role.update(args);
    }
    async deleteManyRole(ctx, args) {
        return ctx.prisma.role.deleteMany(args);
    }
    async updateManyRole(ctx, args) {
        return ctx.prisma.role.updateMany(args);
    }
    async upsertRole(ctx, args) {
        return ctx.prisma.role.upsert(args);
    }
    async aggregateRole(ctx, info, args) {
        function transformFields(fields) {
            return Object.fromEntries(Object.entries(fields)
                .filter(([key, value]) => !key.startsWith("_"))
                .map(([key, value]) => {
                if (Object.keys(value).length === 0) {
                    return [key, true];
                }
                return [key, transformFields(value)];
            }));
        }
        return ctx.prisma.role.aggregate(Object.assign(Object.assign({}, args), transformFields(graphql_fields_1.default(info))));
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Role_1.Role, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindOneRoleArgs_1.FindOneRoleArgs]),
    __metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "role", null);
__decorate([
    TypeGraphQL.Query(_returns => [Role_1.Role], {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyRoleArgs_1.FindManyRoleArgs]),
    __metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "roles", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Role_1.Role, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateRoleArgs_1.CreateRoleArgs]),
    __metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "createRole", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Role_1.Role, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteRoleArgs_1.DeleteRoleArgs]),
    __metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "deleteRole", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Role_1.Role, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateRoleArgs_1.UpdateRoleArgs]),
    __metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "updateRole", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyRoleArgs_1.DeleteManyRoleArgs]),
    __metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "deleteManyRole", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BatchPayload_1.BatchPayload, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyRoleArgs_1.UpdateManyRoleArgs]),
    __metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "updateManyRole", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Role_1.Role, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertRoleArgs_1.UpsertRoleArgs]),
    __metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "upsertRole", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateRole_1.AggregateRole, {
        nullable: false,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateRoleArgs_1.AggregateRoleArgs]),
    __metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "aggregateRole", null);
RoleCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Role_1.Role)
], RoleCrudResolver);
exports.RoleCrudResolver = RoleCrudResolver;
//# sourceMappingURL=RoleCrudResolver.js.map