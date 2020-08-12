import { User } from "../models/User";
export declare class Role {
    id: string;
    name: string;
    description?: string | undefined;
    users?: User[] | undefined;
    createdAt: Date;
}
