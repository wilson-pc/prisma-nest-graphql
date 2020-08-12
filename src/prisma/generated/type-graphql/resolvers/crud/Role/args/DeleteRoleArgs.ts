import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { RoleWhereUniqueInput } from "../../../inputs/RoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteRoleArgs {
  @TypeGraphQL.Field(_type => RoleWhereUniqueInput, { nullable: false })
  where!: RoleWhereUniqueInput;
}
