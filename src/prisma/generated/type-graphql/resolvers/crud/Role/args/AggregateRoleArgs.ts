import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { RoleOrderByInput } from "../../../inputs/RoleOrderByInput";
import { RoleWhereInput } from "../../../inputs/RoleWhereInput";
import { RoleWhereUniqueInput } from "../../../inputs/RoleWhereUniqueInput";
import { RoleDistinctFieldEnum } from "../../../../enums/RoleDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class AggregateRoleArgs {
  @TypeGraphQL.Field(_type => RoleWhereInput, { nullable: true })
  where?: RoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RoleOrderByInput], { nullable: true })
  orderBy?: RoleOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => RoleWhereUniqueInput, { nullable: true })
  cursor?: RoleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [RoleDistinctFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof RoleDistinctFieldEnum> | undefined;
}
