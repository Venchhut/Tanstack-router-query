import { createFileRoute } from "@tanstack/react-router";
import JobListing from "../components/ListJob/Joblist";
import { Card, Skeleton } from "@mantine/core";
import { useState } from "react";

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <JobListing />
    </>
  );
}
