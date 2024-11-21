import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h2>This is layout</h2>
      <Outlet />
    </div>
  );
}
