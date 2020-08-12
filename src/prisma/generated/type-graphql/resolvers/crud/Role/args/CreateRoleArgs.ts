import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { RoleCreateInput } from "../../../inputs/RoleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateRoleArgs {
  @TypeGraphQL.Field(_type => RoleCreateInput, { nullable: false })
  data!: RoleCreateInput;
}
