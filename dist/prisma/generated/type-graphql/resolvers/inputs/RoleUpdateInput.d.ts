import { UserUpdateManyWithoutRoleInput } from "../inputs/UserUpdateManyWithoutRoleInput";
export declare class RoleUpdateInput {
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    createdAt?: Date | undefined;
    users?: UserUpdateManyWithoutRoleInput | undefined;
}
