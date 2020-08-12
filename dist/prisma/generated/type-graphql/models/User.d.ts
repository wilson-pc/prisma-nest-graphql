import { Role } from "../models/Role";
export declare class User {
    id: string;
    createdAt: Date;
    email: string;
    name: string;
    roleId: string;
    role?: Role;
}
