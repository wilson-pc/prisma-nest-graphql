import * as TypeGraphQL from "type-graphql";
import { Role } from "../../../models/Role";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Role, {
    nullable: false,
    description: undefined,
  })
  async role(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Role> {
    return ctx.prisma.user.findOne({
      where: {
        id: user.id,
      },
    }).role({});
  }
}
