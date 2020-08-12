import { UpsertRoleArgs } from "./args/UpsertRoleArgs";
import { Role } from "../../../models/Role";
export declare class UpsertRoleResolver {
    upsertRole(ctx: any, args: UpsertRoleArgs): Promise<Role>;
}
