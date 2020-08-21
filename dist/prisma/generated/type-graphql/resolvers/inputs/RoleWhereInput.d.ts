import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
export declare class RoleWhereInput {
    AND?: RoleWhereInput[] | undefined;
    OR?: RoleWhereInput[] | undefined;
    NOT?: RoleWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    users?: UserListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
