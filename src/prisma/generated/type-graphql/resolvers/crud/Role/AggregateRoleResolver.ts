import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRoleArgs } from "./args/AggregateRoleArgs";
import { Role } from "../../../models/Role";
import { AggregateRole } from "../../outputs/AggregateRole";

@TypeGraphQL.Resolver(_of => Role)
export class AggregateRoleResolver {
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
