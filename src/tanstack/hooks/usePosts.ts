import { useQuery } from "@tanstack/react-query";
import { postsQueryKey, postsListQueryFn } from "../queries/posts.query";

export type UsePostsOptions = {
  limit?: number;
};

export const usePosts = (options: UsePostsOptions = {}) => {
  const { limit } = options;

  return useQuery({
    queryKey: postsQueryKey.list({ limit }),
    queryFn: postsListQueryFn,
  });
};
