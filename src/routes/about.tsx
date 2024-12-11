import { createFileRoute } from "@tanstack/react-router";
import DemoApp from "../components/note/DemoApp";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return <DemoApp />;
}
