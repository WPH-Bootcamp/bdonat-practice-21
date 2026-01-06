import type { Posts } from "../../api/posts.api";
import { PostCard } from "../molecules/PostCard";
import { showTopTenSignal } from "../../signals/ui.signal";

type Props = {
  posts: Posts[];
};

export const PostList = ({ posts }: Props) => {
  const visible = showTopTenSignal.value ? posts.slice(0, 10) : posts;
  return (
    <ul>
      {visible.map((post) => (
        <PostCard key={post.id} posts={post} />
      ))}
    </ul>
  );
};
