import { Role } from "../../../models/Role";
import { User } from "../../../models/User";
export declare class UserRelationsResolver {
    role(user: User, ctx: any): Promise<Role>;
}
