import { getApiClient } from "@/lib/ofetch";
import { $Fetch } from "ofetch";

class UsersService {
    private static instance: UsersService;
    api: $Fetch;

    private constructor() {
        this.api = getApiClient() as $Fetch;
    }

    public static getInstance(): UsersService {
        if (!UsersService.instance) {
            UsersService.instance = new UsersService();
        }

        return UsersService.instance;
    }

    login = (email: string, password: string) => {
        const body = {
            email,
            password,
        };
        const response = this.api("/auth/login", {
            body: body,
        });
        return response;
    };
}

export const usersService = UsersService.getInstance();
