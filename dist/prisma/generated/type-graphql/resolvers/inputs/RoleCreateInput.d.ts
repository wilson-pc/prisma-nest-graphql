import { UserCreateManyWithoutRoleInput } from "../inputs/UserCreateManyWithoutRoleInput";
export declare class RoleCreateInput {
    id?: string | undefined;
    name: string;
    description?: string | undefined;
    createdAt?: Date | undefined;
    users?: UserCreateManyWithoutRoleInput | undefined;
}
