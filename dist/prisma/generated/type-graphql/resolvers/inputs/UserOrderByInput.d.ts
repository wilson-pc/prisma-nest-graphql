import { SortOrder } from "../../enums/SortOrder";
export declare class UserOrderByInput {
    id?: keyof typeof SortOrder | undefined;
    createdAt?: keyof typeof SortOrder | undefined;
    email?: keyof typeof SortOrder | undefined;
    name?: keyof typeof SortOrder | undefined;
    roleId?: keyof typeof SortOrder | undefined;
}
