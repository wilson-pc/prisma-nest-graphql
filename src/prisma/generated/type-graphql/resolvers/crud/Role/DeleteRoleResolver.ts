import * as TypeGraphQL from "type-graphql";
import { DeleteRoleArgs } from "./args/DeleteRoleArgs";
import { Role } from "../../../models/Role";

@TypeGraphQL.Resolver(_of => Role)
export class DeleteRoleResolver {
  @TypeGraphQL.Mutation(_returns => Role, {
    nullable: true,
    description: undefined
  })
  async deleteRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteRoleArgs): Promise<Role | undefined> {
    return ctx.prisma.role.delete(args);
  }
}
