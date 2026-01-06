import type { Posts } from "../../api/posts.api";
import { Loader } from "../atoms/Loader";
import { ErrorState } from "../atoms/ErrorState";
import { Button } from "../atoms/Button";
import { PostList } from "../organisms/PostList";
import { showTopTenSignal } from "../../signals/ui.signal";

type Props = {
  title: string;
  posts?: Posts[] | null;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  onRetry: () => void;
};

export const PostsTemplate = ({
  title,
  posts,
  isLoading,
  isFetching,
  isError,
  onRetry,
}: Props) => {
  if (isLoading) return <Loader />;

  if (isError)
    return (
      <ErrorState
        message="Gagal memuat posts. Coba lagi nanti yakkk...."
        onRetry={onRetry}
      />
    );

  return (
    <div>
      <header>
        <h1>
          {title} {isFetching && "(Rereshing...)"}
        </h1>
        <Button
          type="button"
          onClick={() => (showTopTenSignal.value = !showTopTenSignal.value)}
        >
          {showTopTenSignal.value ? "Hide Top 10" : "Show Top 10"}
        </Button>
        <Button type="button" onClick={onRetry}>
          Manual Refresh
        </Button>
      </header>
      <main>
        <PostList posts={posts ?? []} />
      </main>
    </div>
  );
};
