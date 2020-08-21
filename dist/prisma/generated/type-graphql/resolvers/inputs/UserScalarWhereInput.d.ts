import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class UserScalarWhereInput {
    AND?: UserScalarWhereInput[] | undefined;
    OR?: UserScalarWhereInput[] | undefined;
    NOT?: UserScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    email?: StringFilter | undefined;
    name?: StringFilter | undefined;
    roleId?: StringFilter | undefined;
}
