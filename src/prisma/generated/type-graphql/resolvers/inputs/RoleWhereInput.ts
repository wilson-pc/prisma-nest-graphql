import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../../prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RoleWhereInput {
  @TypeGraphQL.Field(_type => [RoleWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: RoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: RoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: RoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
    description: undefined
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true,
    description: undefined
  })
  users?: UserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | undefined;
}
