import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "../components/HeroSection";
import { ScrollArea } from "@mantine/core";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ScrollArea>
      <HeroSection />;
    </ScrollArea>
  );
}
