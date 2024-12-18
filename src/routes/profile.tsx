import { createFileRoute } from "@tanstack/react-router";
import JobListing from "../components/ListJob/Joblist";
export const Route = createFileRoute("/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <JobListing />
    </>
  );
}
