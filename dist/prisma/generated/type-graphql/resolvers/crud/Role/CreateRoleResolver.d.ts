import { CreateRoleArgs } from "./args/CreateRoleArgs";
import { Role } from "../../../models/Role";
export declare class CreateRoleResolver {
    createRole(ctx: any, args: CreateRoleArgs): Promise<Role>;
}
