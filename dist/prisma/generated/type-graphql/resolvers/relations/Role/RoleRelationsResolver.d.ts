import { Role } from "../../../models/Role";
import { User } from "../../../models/User";
import { RoleUsersArgs } from "./args/RoleUsersArgs";
export declare class RoleRelationsResolver {
    users(role: Role, ctx: any, args: RoleUsersArgs): Promise<User[] | undefined>;
}
