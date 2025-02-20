import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { Container, Title, Group, Button, AppShell, rem } from "@mantine/core";

const navLinks = [
  { title: "Home", to: "/" },
  { title: "About", to: "/about" },
  { title: "Profile", to: "/profile" },
  { title: "Pokemon", to: "/pokemon" },
];

const activeProps = {
  style: {
    backgroundColor: "#228be6",
    color: "white",
  },
};

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Container size="xl" h="100%">
          <Group justify="space-between" h="100%" px="md">
            <Title order={2} c="blue.6">
              TanStack Query
            </Title>
            <Group gap="sm">
              {navLinks.map((link) => (
                <Button
                  key={link.title}
                  component={Link}
                  to={link.to}
                  variant="subtle"
                  size="sm"
                  activeProps={activeProps}
                >
                  {link.title}
                </Button>
              ))}
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Container size="xl" py={rem(20)}>
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
