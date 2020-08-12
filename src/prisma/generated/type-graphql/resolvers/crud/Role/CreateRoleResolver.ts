import * as TypeGraphQL from "type-graphql";
import { CreateRoleArgs } from "./args/CreateRoleArgs";
import { Role } from "../../../models/Role";

@TypeGraphQL.Resolver(_of => Role)
export class CreateRoleResolver {
  @TypeGraphQL.Mutation(_returns => Role, {
    nullable: false,
    description: undefined
  })
  async createRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateRoleArgs): Promise<Role> {
    return ctx.prisma.role.create(args);
  }
}
