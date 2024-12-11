import {
  Button,
  Flex,
  Group,
  List,
  Paper,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addTodo, fetchTodos } from "../../api/note";
import { Todo } from "../../entities/todo";

const DemoApp = () => {
  const [value, setValue] = useState("");
  // access the client
  const queryClient = useQueryClient();

  const query = useQuery({ queryKey: ["todos"], queryFn: () => fetchTodos() });

  // mutation
  const mutation = useMutation({
    mutationFn: (todo: Pick<Todo, "title">) => addTodo(todo),
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

            <Button onClick={() => mutation.mutate({ title: value })}>
              add note
            </Button>
          </Flex>
        </Group>
        <List>
          {query.data?.map((todo) => (
            <List.Item key={todo.id}>{todo.title}</List.Item>
          ))}
        </List>
      </Paper>
    </SimpleGrid>
  );
};

export default DemoApp;
