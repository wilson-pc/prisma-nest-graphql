import { UpdateRoleArgs } from "./args/UpdateRoleArgs";
import { Role } from "../../../models/Role";
export declare class UpdateRoleResolver {
    updateRole(ctx: any, args: UpdateRoleArgs): Promise<Role | undefined>;
}
