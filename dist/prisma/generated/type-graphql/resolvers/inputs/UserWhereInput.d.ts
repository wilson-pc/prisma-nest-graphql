import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { RoleWhereInput } from "../inputs/RoleWhereInput";
import { StringFilter } from "../inputs/StringFilter";
export declare class UserWhereInput {
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    email?: StringFilter | undefined;
    name?: StringFilter | undefined;
    roleId?: StringFilter | undefined;
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    role?: RoleWhereInput | undefined;
}
