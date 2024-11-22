import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "../components/HeroSection";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <HeroSection />;
}
