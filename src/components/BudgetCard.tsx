import {
  Avatar,
  Badge,
  Card,
  Group,
  Stack,
  Text,
  Progress,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const BudgetCard = () => {
  return (
    <Group p={"sm"}>
      <Card shadow="sm" padding="xl" radius="md" withBorder>
        {/* Header Section */}
        <Group align="center">
          <Badge color="blue" variant="light">
            PRO
          </Badge>
        </Group>

        <Stack align="center" gap="xs" mt="md">
          <Avatar
            src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"
            size={80}
            radius="xl"
          />
          <Group gap={"xs"} align="center">
            <Text size="lg" fw={500}>
              Chris Mortin
            </Text>
            <IconCheck size={18} color="blue" />
          </Group>
          <Text size="sm" color="dimmed">
            thechristmort@gmail.com
          </Text>
        </Stack>

        {/* Budget Section */}
        <Stack mt="lg" gap="sm">
          <Group justify="space-between">
            <Text size="sm">Subscriptions</Text>
            <Text size="sm" fw={500}>
              $25 left
            </Text>
          </Group>
          <Progress value={20} color="blue" size="md" radius="xs" />

          <Group justify="space-between">
            <Text size="sm">Food and booze</Text>
            <Text size="sm" fw={500}>
              $120 left
            </Text>
          </Group>
          <Progress value={60} color="teal" size="md" radius="xs" />

          <Group justify="space-between">
            <Text size="sm">Groceries</Text>
            <Text size="sm" fw={500}>
              $200 left
            </Text>
          </Group>
          <Progress value={80} color="violet" size="md" radius="xs" />

          <Group justify="space-between">
            <Text size="sm">Savings</Text>
            <Text size="sm" fw={500}>
              $50 left
            </Text>
          </Group>
          <Progress value={40} color="orange" size="md" radius="xs" />
        </Stack>
      </Card>
    </Group>
  );
};

export default BudgetCard;
