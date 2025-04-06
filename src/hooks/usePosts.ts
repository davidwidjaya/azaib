import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import postService, { Post } from '../services/postService';

export const usePosts = () => useQuery(['posts'], postService.getAll);

export const usePost = (id: number) => useQuery(['post', id], () => postService.getById(id));

export const useCreatePost = () => {
  const qc = useQueryClient();
  return useMutation<Omit<Post, 'id'>, Error, Omit<Post, 'id'>>(postService.create, {
    onSuccess: () => qc.invalidateQueries(['posts']),
  });
};

export const useUpdatePost = () => {
  const qc = useQueryClient();
  return useMutation<Post | null, Error, { id: number; data: Partial<Post> }>(
    async ({ id, data }: { id: number; data: Partial<Post> }) => {
      const response = await postService.update(id, data);
      return response.data;
    },
    {
      onSuccess: () => qc.invalidateQueries(['posts']),
    }
  );
};

export const useDeletePost = () => {
  const qc = useQueryClient();
  return useMutation((id: number) => postService.delete(id), {
    onSuccess: () => qc.invalidateQueries(['posts']),
  });
};
