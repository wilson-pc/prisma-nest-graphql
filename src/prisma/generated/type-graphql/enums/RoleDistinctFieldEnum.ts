import * as TypeGraphQL from "type-graphql";

export enum RoleDistinctFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(RoleDistinctFieldEnum, {
  name: "RoleDistinctFieldEnum",
  description: undefined,
});
