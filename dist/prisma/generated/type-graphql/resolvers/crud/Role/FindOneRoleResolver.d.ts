import { FindOneRoleArgs } from "./args/FindOneRoleArgs";
import { Role } from "../../../models/Role";
export declare class FindOneRoleResolver {
    role(ctx: any, args: FindOneRoleArgs): Promise<Role | undefined>;
}
