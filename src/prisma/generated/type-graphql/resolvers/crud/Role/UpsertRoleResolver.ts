import * as TypeGraphQL from "type-graphql";
import { UpsertRoleArgs } from "./args/UpsertRoleArgs";
import { Role } from "../../../models/Role";

@TypeGraphQL.Resolver(_of => Role)
export class UpsertRoleResolver {
  @TypeGraphQL.Mutation(_returns => Role, {
    nullable: false,
    description: undefined
  })
  async upsertRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertRoleArgs): Promise<Role> {
    return ctx.prisma.role.upsert(args);
  }
}
