import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserFilter } from "../inputs/UserFilter";
export declare class RoleWhereInput {
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    description?: NullableStringFilter | undefined;
    users?: UserFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    AND?: RoleWhereInput[] | undefined;
    OR?: RoleWhereInput[] | undefined;
    NOT?: RoleWhereInput[] | undefined;
}
