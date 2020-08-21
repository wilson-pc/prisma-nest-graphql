import { RoleOrderByInput } from "../../../inputs/RoleOrderByInput";
import { RoleWhereInput } from "../../../inputs/RoleWhereInput";
import { RoleWhereUniqueInput } from "../../../inputs/RoleWhereUniqueInput";
import { RoleDistinctFieldEnum } from "../../../../enums/RoleDistinctFieldEnum";
export declare class AggregateRoleArgs {
    where?: RoleWhereInput | undefined;
    orderBy?: RoleOrderByInput[] | undefined;
    cursor?: RoleWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<keyof typeof RoleDistinctFieldEnum> | undefined;
}
