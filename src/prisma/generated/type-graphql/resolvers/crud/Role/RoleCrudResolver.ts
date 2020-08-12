import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRoleArgs } from "./args/AggregateRoleArgs";
import { CreateRoleArgs } from "./args/CreateRoleArgs";
import { DeleteManyRoleArgs } from "./args/DeleteManyRoleArgs";
import { DeleteRoleArgs } from "./args/DeleteRoleArgs";
import { FindManyRoleArgs } from "./args/FindManyRoleArgs";
import { FindOneRoleArgs } from "./args/FindOneRoleArgs";
import { UpdateManyRoleArgs } from "./args/UpdateManyRoleArgs";
import { UpdateRoleArgs } from "./args/UpdateRoleArgs";
import { UpsertRoleArgs } from "./args/UpsertRoleArgs";
import { Role } from "../../../models/Role";
import { AggregateRole } from "../../outputs/AggregateRole";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Role)
export class RoleCrudResolver {
  @TypeGraphQL.Query(_returns => Role, {
    nullable: true,
    description: undefined
  })
  async role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneRoleArgs): Promise<Role | undefined> {
    return ctx.prisma.role.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Role], {
    nullable: false,
    description: undefined
  })
  async roles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyRoleArgs): Promise<Role[]> {
    return ctx.prisma.role.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Role, {
    nullable: false,
    description: undefined
  })
  async createRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateRoleArgs): Promise<Role> {
    return ctx.prisma.role.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Role, {
    nullable: true,
    description: undefined
  })
  async deleteRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteRoleArgs): Promise<Role | undefined> {
    return ctx.prisma.role.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Role, {
    nullable: true,
    description: undefined
  })
  async updateRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateRoleArgs): Promise<Role | undefined> {
    return ctx.prisma.role.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyRoleArgs): Promise<BatchPayload> {
    return ctx.prisma.role.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyRoleArgs): Promise<BatchPayload> {
    return ctx.prisma.role.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Role, {
    nullable: false,
    description: undefined
  })
  async upsertRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertRoleArgs): Promise<Role> {
    return ctx.prisma.role.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateRole, {
    nullable: false,
    description: undefined
  })
  async aggregateRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRoleArgs): Promise<AggregateRole> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          .filter(([key, value]) => !key.startsWith("_"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.role.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
