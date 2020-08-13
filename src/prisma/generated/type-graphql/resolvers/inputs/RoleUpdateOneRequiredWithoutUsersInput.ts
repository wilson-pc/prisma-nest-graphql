import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../../prisma/client";
import { RoleCreateWithoutUsersInput } from "../inputs/RoleCreateWithoutUsersInput";
import { RoleUpdateWithoutUsersDataInput } from "../inputs/RoleUpdateWithoutUsersDataInput";
import { RoleUpsertWithoutUsersInput } from "../inputs/RoleUpsertWithoutUsersInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RoleUpdateOneRequiredWithoutUsersInput {
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

  @TypeGraphQL.Field(_type => RoleUpdateWithoutUsersDataInput, {
    nullable: true,
    description: undefined
  })
  update?: RoleUpdateWithoutUsersDataInput | undefined;

  @TypeGraphQL.Field(_type => RoleUpsertWithoutUsersInput, {
    nullable: true,
    description: undefined
  })
  upsert?: RoleUpsertWithoutUsersInput | undefined;
}
