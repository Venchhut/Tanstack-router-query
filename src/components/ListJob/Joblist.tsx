import {
  Card,
  Badge,
  Text,
  Group,
  Button,
  SimpleGrid,
  Container,
  ActionIcon,
  Flex,
  Stack,
  Skeleton,
} from "@mantine/core";
import { IconArrowDown, IconPlus, IconUsers } from "@tabler/icons-react";
import { jobData } from "../../data/job";
import { useEffect, useState } from "react";
// Mock Data (from the image)

interface Job {
  id: number;
  title: string;
  category: string;
  employmentType: string;
  location: string;
  activeUntil: string;
  description: string;
}

const JobCard = ({ job }: { job: Job }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack justify="space-between" h="50%" gap={"xs"}>
        <Text size="xs" c="dark">
          Active until: {job.activeUntil}
        </Text>
        <Group>
          <Card.Section mt={"sm"} p={"xs"}>
            <Group mb="xs">
              <Text fw={500}>{job.title}</Text>
            </Group>
          </Card.Section>
        </Group>
        <Group>
          <Card.Section p={"xs"}>
            <Text size="sm" color="dimmed">
              {job.description}
            </Text>
          </Card.Section>
        </Group>
        <Group mt="md" gap="xs" align="end">
          <Badge
            p={10}
            radius={"md"}
            color={
              job.category === "Design"
                ? "green"
                : job.category === "Development"
                  ? "yellow"
                  : "red"
            }
          >
            {job.category}
          </Badge>
          <Badge
            variant="default"
            p={10}
            radius={"md"}
            color={job.employmentType === "Full Time" ? "green" : "red"}
          >
            {job.employmentType}
          </Badge>
          <Badge variant="default" p={10} radius={"md"}>
            {job.location}
          </Badge>
        </Group>
      </Stack>
    </Card>
  );
};

const JobListing = () => {
  const [isloading, setIsloading] = useState(true);
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setJobs(jobData);
      setIsloading(false);
    }, 2000);
  }, []);
  return (
    <Container size={"lg"}>
      <Group justify="space-between" pb={"xs"} pl={"md"} pr={"md"}>
        <Group gap={"xs"}>
          <Flex gap={"ms"}>
            <ActionIcon variant="default" bg={"blue"} radius={"xl"}>
              <IconUsers size={16} />
            </ActionIcon>
            <Text fz={"xl"}>Job List</Text>
          </Flex>
        </Group>
        <Group>
          <Button
            radius={"md"}
            size="xs"
            variant="default"
            leftSection={<IconUsers size={16} />}
            rightSection={<IconArrowDown size={14} />}
          >
            Active Jobs
          </Button>
          <Button radius={"md"} size="xs" leftSection={<IconPlus size={14} />}>
            Add Job
          </Button>
        </Group>
      </Group>

      <SimpleGrid cols={{ base: 2, md: 3 }}>
        {isloading
          ? Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} shadow="md" padding="lg" radius="md" withBorder>
                <Skeleton height={10} radius="md" mb={10} />
                <Skeleton height={30} radius="md" mb={10} />
                <Skeleton height={20} radius="md" mt={10} />
              </Card>
            ))
          : jobs.map((job) => <JobCard job={job} key={job.id} />)}
      </SimpleGrid>
    </Container>
  );
};

export default JobListing;
