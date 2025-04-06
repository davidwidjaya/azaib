import apiClient from '@/src/lib/api';
import { Post } from '@/src/types/post';

export const postService = {
    getAll: () => apiClient.get<Post[]>('/posts'),
    getById: (id: number) => apiClient.get<Post>(`/posts/${id}`),
    create: (data: Omit<Post, 'id'>) => apiClient.post<Post>('/posts', data),
    update: (id: number, data: Partial<Post>) => apiClient.put<Post>(`/posts/${id}`, data),
    delete: (id: number) => apiClient.delete(`/posts/${id}`),
};
export default postService;
export type { Post };