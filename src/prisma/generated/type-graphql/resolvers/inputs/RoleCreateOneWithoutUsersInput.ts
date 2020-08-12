import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { RoleCreateWithoutUsersInput } from "../inputs/RoleCreateWithoutUsersInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RoleCreateOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => RoleCreateWithoutUsersInput, {
    nullable: true,
    description: undefined
  })
  create?: RoleCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => RoleWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: RoleWhereUniqueInput | undefined;
}
