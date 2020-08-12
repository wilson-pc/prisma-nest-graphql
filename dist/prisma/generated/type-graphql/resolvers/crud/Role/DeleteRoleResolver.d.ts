import { DeleteRoleArgs } from "./args/DeleteRoleArgs";
import { Role } from "../../../models/Role";
export declare class DeleteRoleResolver {
    deleteRole(ctx: any, args: DeleteRoleArgs): Promise<Role | undefined>;
}
