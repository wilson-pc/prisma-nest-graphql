import { FindManyRoleArgs } from "./args/FindManyRoleArgs";
import { Role } from "../../../models/Role";
export declare class FindManyRoleResolver {
    roles(ctx: any, args: FindManyRoleArgs): Promise<Role[]>;
}
