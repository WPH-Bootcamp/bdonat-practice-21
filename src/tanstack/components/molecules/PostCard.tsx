import type { Posts } from "../../api/posts.api";

type Props = {
  posts: Posts;
};

export const PostCard = ({ posts }: Props) => {
  return (
    <li>
      <h2 className="font-bold text-lg mb-2">{posts.title}</h2>
      <p>{posts.body}</p>
    </li>
  );
};
