import { apiClient } from "./axios";

export type Posts = {
  id: number;
  title: string;
  body: string;
};

export type GetPostsParams = {
  limit?: number;
  signal?: AbortSignal;
};

export const getPosts = async ({
  limit,
  signal,
}: GetPostsParams): Promise<Posts[]> => {
  const res = await apiClient.get<Posts[]>("/posts", {
    params: limit ? { _limit: limit } : undefined,
    signal,
  });
  return res.data;
};
