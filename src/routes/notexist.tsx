import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/notexist")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /notexist!";
}
