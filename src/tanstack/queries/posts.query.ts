import type { QueryFunctionContext } from "@tanstack/react-query";
import { getPosts } from "../api/posts.api";

export const postsQueryKey = {
  all: ["posts"] as const,
  list: (params: { limit?: number }) =>
    [...postsQueryKey.all, "list", params] as const,
};

type PostsListKey = ReturnType<typeof postsQueryKey.list>;

export const postsListQueryFn = async ({
  queryKey,
  signal,
}: QueryFunctionContext<PostsListKey>) => {
  const [, , params] = queryKey;
  return getPosts({ limit: params?.limit, signal });
};
