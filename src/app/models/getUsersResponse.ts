import { User } from "./user";

export interface GetUsersResponse {
    page?: number;
    per_page?: number;
    total?: number;
    total_pages?: number;
    data?: Array<User>;
    support?:{}
}