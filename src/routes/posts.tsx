import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { fetchPosts } from "../posts";

export const Route = createFileRoute("/posts")({
  loader: fetchPosts,
  component: PostComponent,
});
console.log(fetchPosts);
function PostComponent() {
  const posts = Route.useLoaderData();
  return (
    <div className="p-2 flex gap-5 ">
      <ul className="gap-2">
        {[...posts].map((post) => {
          return (
            // <div key={post.id}>
            //   <h2>{post.title}</h2>
            //   <p>{post.body}</p>
            // </div>
            <li key={post.id} className="whitespace-nowrap">
              <Link
                to="/posts/$postId"
                params={{
                  postId: post.id,
                }}
                className="block py-1 text-blue-600 hover:opacity-75"
                activeProps={{ className: "font-bold underline" }}
              >
                <div>{post.title.substring(0, 20)}</div>
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}
