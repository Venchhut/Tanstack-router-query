import { createFileRoute } from "@tanstack/react-router";
import GoogleDriveBreadcrumbs from "../components/crumbs";

export const Route = createFileRoute("/breadcrumbs")({
  component: GoogleDriveBreadcrumbs,
});
