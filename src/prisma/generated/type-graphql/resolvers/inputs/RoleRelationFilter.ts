import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../../prisma/client";
import { RoleWhereInput } from "../inputs/RoleWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RoleRelationFilter {
  @TypeGraphQL.Field(_type => RoleWhereInput, {
    nullable: true,
    description: undefined
  })
  is?: RoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => RoleWhereInput, {
    nullable: true,
    description: undefined
  })
  isNot?: RoleWhereInput | undefined;
}
