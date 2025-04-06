import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

interface ApiErrorDetail {
    field: string;
    message: string;
}

interface ApiResponse<T = any> {
    code: number;
    status: number;
    message: string;
    data: T | null;
    errors?: ApiErrorDetail[];
}

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
    withCredentials: false, // Set to true if you need to send cookies with requests
    headers: {
        "Content-Type": "application/json",
    },
});


apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // Add any request interceptors here if needed
        return config;
    },
    (error: AxiosError) => {
        // Handle request error here
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
        // Add any response interceptors here if needed
        return response;
    },
    (error: AxiosError) => {
        // Handle request error here
        return Promise.reject(error);
    }
);


const fetchApi = {
    get: async <T>(
        url: string,
        config?: AxiosRequestConfig,
    ): Promise<ApiResponse<T>> => {
        return apiClient.get(url, config);
    },
    post: async <T>(
        url: string,
        data: any,
        config?: AxiosRequestConfig,
    ): Promise<ApiResponse<T>> => {
        return apiClient.post(url, data, config);
    },
    put: async <T>(
        url: string,
        data: any,
        config?: AxiosRequestConfig,
    ): Promise<ApiResponse<T>> => {
        return apiClient.put(url, data, config);
    },
    delete: async <T>(
        url: string,
        config?: AxiosRequestConfig,
    ): Promise<ApiResponse<T>> => {
        return apiClient.delete(url, config);
    },
};

export default fetchApi;
