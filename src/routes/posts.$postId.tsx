import { ErrorComponent, createFileRoute } from "@tanstack/react-router";
import { fetchPost } from "../posts";
import type { ErrorComponentProps } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$postId")({
  loader: async ({ params: { postId } }) => fetchPost(postId),
  errorComponent: PostErrorComponent,
  notFoundComponent: () => {
    return <p>Post not found</p>;
  },
  component: PostComponent,
});

export function PostErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function PostComponent() {
  const post = Route.useLoaderData();

  return (
    <div className="space-y-2">
      <div>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          {post.title}
        </h3>
      </div>
      <div style={{ fontSize: " 1rem" }}>{post.body}</div>
    </div>
  );
}
