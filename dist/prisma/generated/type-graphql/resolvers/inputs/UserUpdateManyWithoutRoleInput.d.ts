import { UserCreateWithoutRoleInput } from "../inputs/UserCreateWithoutRoleInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereNestedInput } from "../inputs/UserUpdateManyWithWhereNestedInput";
import { UserUpdateWithWhereUniqueWithoutRoleInput } from "../inputs/UserUpdateWithWhereUniqueWithoutRoleInput";
import { UserUpsertWithWhereUniqueWithoutRoleInput } from "../inputs/UserUpsertWithWhereUniqueWithoutRoleInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateManyWithoutRoleInput {
    create?: UserCreateWithoutRoleInput[] | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
    set?: UserWhereUniqueInput[] | undefined;
    disconnect?: UserWhereUniqueInput[] | undefined;
    delete?: UserWhereUniqueInput[] | undefined;
    update?: UserUpdateWithWhereUniqueWithoutRoleInput[] | undefined;
    updateMany?: UserUpdateManyWithWhereNestedInput[] | undefined;
    deleteMany?: UserScalarWhereInput[] | undefined;
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput[] | undefined;
}
