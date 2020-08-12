import { SortOrder } from "../../enums/SortOrder";
export declare class RoleOrderByInput {
    id?: keyof typeof SortOrder | undefined;
    name?: keyof typeof SortOrder | undefined;
    description?: keyof typeof SortOrder | undefined;
    createdAt?: keyof typeof SortOrder | undefined;
}
