import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/_layout-2/layout-b")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /_layout/_layout-2/layout-b!";
}