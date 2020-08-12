import { RoleUpdateOneRequiredWithoutUsersInput } from "../inputs/RoleUpdateOneRequiredWithoutUsersInput";
export declare class UserUpdateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    email?: string | undefined;
    name?: string | undefined;
    role?: RoleUpdateOneRequiredWithoutUsersInput | undefined;
}
