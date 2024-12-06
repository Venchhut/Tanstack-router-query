import { createFileRoute } from "@tanstack/react-router";
import SignUp from "../components/form/MyForm";

export const Route = createFileRoute("/form")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignUp />;
}
