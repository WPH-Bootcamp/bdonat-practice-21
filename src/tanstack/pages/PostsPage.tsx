import { PostsTemplate } from "../components/templates/PostsTemplate";
import { usePosts } from "../hooks/usePosts";

const PostsPage = () => {
  const query = usePosts({ limit: 20 });
  return (
    <PostsTemplate
      title="Posts List"
      posts={query.data}
      isLoading={query.isLoading}
      isFetching={query.isFetching}
      isError={query.isError}
      onRetry={() => query.refetch()}
    />
  );
};

export default PostsPage;
