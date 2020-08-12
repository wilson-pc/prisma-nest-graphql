import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { RoleCreateInput } from "../../../inputs/RoleCreateInput";
import { RoleUpdateInput } from "../../../inputs/RoleUpdateInput";
import { RoleWhereUniqueInput } from "../../../inputs/RoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertRoleArgs {
  @TypeGraphQL.Field(_type => RoleWhereUniqueInput, { nullable: false })
  where!: RoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => RoleCreateInput, { nullable: false })
  create!: RoleCreateInput;

  @TypeGraphQL.Field(_type => RoleUpdateInput, { nullable: false })
  update!: RoleUpdateInput;
}
