import * as TypeGraphQL from "type-graphql";

export enum UserDistinctFieldEnum {
  id = "id",
  createdAt = "createdAt",
  email = "email",
  name = "name",
  roleId = "roleId"
}
TypeGraphQL.registerEnumType(UserDistinctFieldEnum, {
  name: "UserDistinctFieldEnum",
  description: undefined,
});
