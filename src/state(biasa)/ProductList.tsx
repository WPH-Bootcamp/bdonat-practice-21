import { useState, useEffect } from "react";

const ProductList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error: unknown) {
        setError(
          error instanceof Error ? error.message : "Failed to fetch products"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  console.log(posts);

  return (
    <div>
      <h1>Product List (State Naif)</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
