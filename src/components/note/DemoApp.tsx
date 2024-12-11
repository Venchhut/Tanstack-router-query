import {
  Button,
  Flex,
  Group,
  List,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { getTodos, postTodo } from "../../api/note";

const DemoApp = () => {
  const [value, setValue] = useState("");
  // access the client
  const queryClient = useQueryClient();

  // query todos

  const query = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  //mutation
  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <SimpleGrid>
      <Paper withBorder p="md">
        <Text fz={"xl"}>Note List</Text>
        <Group justify="center" gap={"md"}>
          <Flex gap="md" justify={"space-between"}>
            <TextInput
              placeholder="input note"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

            <Button
              onClick={() => {
                mutation.mutate({
                  id: Date.now(),
                  title: value,
                  completed: false,
                });
              }}
            >
              add note
            </Button>
          </Flex>
        </Group>
        <Stack>
          {query.data?.map((todo) => (
            <List>
              <List.Item>{todo.title}</List.Item>
            </List>
          ))}
        </Stack>
      </Paper>
    </SimpleGrid>
  );
};

export default DemoApp;
