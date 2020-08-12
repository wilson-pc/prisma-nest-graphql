import { GraphQLResolveInfo } from "graphql";
import { AggregateRoleArgs } from "./args/AggregateRoleArgs";
import { CreateRoleArgs } from "./args/CreateRoleArgs";
import { DeleteManyRoleArgs } from "./args/DeleteManyRoleArgs";
import { DeleteRoleArgs } from "./args/DeleteRoleArgs";
import { FindManyRoleArgs } from "./args/FindManyRoleArgs";
import { FindOneRoleArgs } from "./args/FindOneRoleArgs";
import { UpdateManyRoleArgs } from "./args/UpdateManyRoleArgs";
import { UpdateRoleArgs } from "./args/UpdateRoleArgs";
import { UpsertRoleArgs } from "./args/UpsertRoleArgs";
import { Role } from "../../../models/Role";
import { AggregateRole } from "../../outputs/AggregateRole";
import { BatchPayload } from "../../outputs/BatchPayload";
export declare class RoleCrudResolver {
    role(ctx: any, args: FindOneRoleArgs): Promise<Role | undefined>;
    roles(ctx: any, args: FindManyRoleArgs): Promise<Role[]>;
    createRole(ctx: any, args: CreateRoleArgs): Promise<Role>;
    deleteRole(ctx: any, args: DeleteRoleArgs): Promise<Role | undefined>;
    updateRole(ctx: any, args: UpdateRoleArgs): Promise<Role | undefined>;
    deleteManyRole(ctx: any, args: DeleteManyRoleArgs): Promise<BatchPayload>;
    updateManyRole(ctx: any, args: UpdateManyRoleArgs): Promise<BatchPayload>;
    upsertRole(ctx: any, args: UpsertRoleArgs): Promise<Role>;
    aggregateRole(ctx: any, info: GraphQLResolveInfo, args: AggregateRoleArgs): Promise<AggregateRole>;
}
