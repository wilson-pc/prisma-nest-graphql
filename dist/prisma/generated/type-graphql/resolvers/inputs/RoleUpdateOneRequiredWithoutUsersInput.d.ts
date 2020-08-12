import { RoleCreateWithoutUsersInput } from "../inputs/RoleCreateWithoutUsersInput";
import { RoleUpdateWithoutUsersDataInput } from "../inputs/RoleUpdateWithoutUsersDataInput";
import { RoleUpsertWithoutUsersInput } from "../inputs/RoleUpsertWithoutUsersInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";
export declare class RoleUpdateOneRequiredWithoutUsersInput {
    create?: RoleCreateWithoutUsersInput | undefined;
    connect?: RoleWhereUniqueInput | undefined;
    update?: RoleUpdateWithoutUsersDataInput | undefined;
    upsert?: RoleUpsertWithoutUsersInput | undefined;
}
