import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../../prisma/client";
import { UserCreateWithoutRoleInput } from "../inputs/UserCreateWithoutRoleInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereNestedInput } from "../inputs/UserUpdateManyWithWhereNestedInput";
import { UserUpdateWithWhereUniqueWithoutRoleInput } from "../inputs/UserUpdateWithWhereUniqueWithoutRoleInput";
import { UserUpsertWithWhereUniqueWithoutRoleInput } from "../inputs/UserUpsertWithWhereUniqueWithoutRoleInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateManyWithoutRoleInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutRoleInput], {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutRoleInput], {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithWhereUniqueWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: UserUpdateManyWithWhereNestedInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: UserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutRoleInput], {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithWhereUniqueWithoutRoleInput[] | undefined;
}
