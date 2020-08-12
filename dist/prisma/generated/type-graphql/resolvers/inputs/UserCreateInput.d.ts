import { RoleCreateOneWithoutUsersInput } from "../inputs/RoleCreateOneWithoutUsersInput";
export declare class UserCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    email: string;
    name: string;
    role: RoleCreateOneWithoutUsersInput;
}
