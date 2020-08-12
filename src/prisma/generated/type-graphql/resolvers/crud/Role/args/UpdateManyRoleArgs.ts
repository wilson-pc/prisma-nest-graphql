import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { RoleUpdateManyMutationInput } from "../../../inputs/RoleUpdateManyMutationInput";
import { RoleWhereInput } from "../../../inputs/RoleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRoleArgs {
  @TypeGraphQL.Field(_type => RoleUpdateManyMutationInput, { nullable: false })
  data!: RoleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RoleWhereInput, { nullable: true })
  where?: RoleWhereInput | undefined;
}
