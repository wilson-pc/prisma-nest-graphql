import * as TypeGraphQL from "type-graphql";
import { UpdateRoleArgs } from "./args/UpdateRoleArgs";
import { Role } from "../../../models/Role";

@TypeGraphQL.Resolver(_of => Role)
export class UpdateRoleResolver {
  @TypeGraphQL.Mutation(_returns => Role, {
    nullable: true,
    description: undefined
  })
  async updateRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateRoleArgs): Promise<Role | undefined> {
    return ctx.prisma.role.update(args);
  }
}
