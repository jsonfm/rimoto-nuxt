import { ofetch } from "ofetch";

export const getApiClient = () => {
    if (process.server && !process.client) return () => {};
    const config = useRuntimeConfig();
    const apiClient = ofetch.create({
        baseURL: config.public.BACKEND_API_URL,
        headers: {
            Accept: "application/json",
        },
    });
    return apiClient;
};
